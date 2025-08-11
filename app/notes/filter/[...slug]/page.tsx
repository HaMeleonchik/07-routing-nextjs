import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface Props{
  params: Promise<{slug:string[]}>
}
export default async function Notes({params}:Props) {
  const { slug } = await params
  
const filterNot = slug[0]
const tag = filterNot === "All" ? undefined : filterNot

  const page = 1
  const searchQuery = ""
  
  const initialData = await fetchNotes(searchQuery, page, tag)

    return <NotesClient
    initialNotes={initialData.notes}
    initialTotalPages={ initialData.totalPages}
    tag={tag}
  />

}