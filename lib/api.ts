import axios from "axios";
// NoteDetails
import type {  NewNote, Note } from "../types/note";

interface NoteHttpResponse{
    notes: Note[], 
    totalPages: number,
    tag: string,
}
const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
    headers: {
            Authorization: `Bearer ${myKey}`,
        }
})


export async function fetchNotes(searchQuery: string, tag?:string, page: number = 1): Promise<{notes: Note[],  totalPages:number, tag?:string,}> {
    const response = await api.get<NoteHttpResponse>("/notes", {
        params: {
            ...(searchQuery.trim() && { search: searchQuery.trim() }),
            page,
            tag,
            perPage: 12,
        },
    }
    )
    return {
        notes: response.data.notes,
        totalPages: response.data.totalPages,
    }
}




export async function createNote(taskData: NewNote): Promise<Note> {
    const response = await api.post<Note>("/notes", taskData)

    return response.data

}


export async function deleteNote(taskId: string):Promise<Note> {
const response = await api.delete<Note>(`/notes/${taskId}`)
    return response.data
}


export async function fetchNoteById(noteId: string): Promise<Note> {
const response = await api.get<Note>(`/notes/${noteId}`)
    return response.data
}

