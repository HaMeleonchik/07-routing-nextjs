'use client'
import css from "./notes.module.css"
import style from "@//components/loaderErrorCss/loaderErrorCss.module.css"
import NoteList from "@//components/NoteList/NoteList"
import { fetchNotes } from "@//lib/api"
import SearchBox from "@//components/SearchBox/SearchBox";
import Modal from "@//components/Modal/Modal";
import Pagination from "@//components/Pagination/Pagination";
import NoteForm from "@/components/NoteForm/NoteForm";
import { useQuery, keepPreviousData} from '@tanstack/react-query';
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { Note } from "@/types/note"

interface DataProps{
  initialNotes: Note[];
  initialTotalPages: number;
  tag:string | undefined,
}

export default function NotesClient({initialNotes, initialTotalPages, tag}:DataProps) {
  const [query, setQuery] = useState("")
  const [isOpenModal, setOpenModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [debouncedSearchQuery] = useDebounce(query, 300)

  if (tag === "undefined") {
    alert("no tags")
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", debouncedSearchQuery, currentPage,  tag],
    queryFn: () => fetchNotes(debouncedSearchQuery, currentPage,  tag),
    placeholderData: keepPreviousData,
    initialData: {
      notes: initialNotes,
      totalPages: initialTotalPages,
    }
  })
  
  
  const updateSearchQuery = (newSearchQuery: string) => {
      setQuery(newSearchQuery)
      setCurrentPage(1)
    }

  const totalPages = data?.totalPages ?? 0;
  
  return <div className={css.app}>
	<header className={css.toolbar}>
      <SearchBox value={query} onSearch = { updateSearchQuery} />
    {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />}
		<button className={css.button} onClick={()=> setOpenModal(true)}>Create note + </button>
    </header>
    {data?.notes && data?.notes.length > 0 ? <NoteList notes={data?.notes} /> : "no notes"}
    {isLoading && <p className={style.loadingText}>Loading notes, please wait...</p>}
    {isError && <p className={style.errorText}>There was an error, please try again...</p>}
    {isOpenModal &&
    <Modal onClose={() => setOpenModal(false)}>
    <NoteForm onClose={ ()=> setOpenModal(false)} />
    </Modal>
    }
  </div>

}