import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function Notes() {

  const page = 1
  const searchQuery = ""

  const initialData = await fetchNotes(searchQuery, page)

    return <NotesClient
    initialNotes={initialData.notes}
    initialTotalPages={ initialData.totalPages}
    initialSearchQuery={searchQuery }
    initialPage={page}
  />

}