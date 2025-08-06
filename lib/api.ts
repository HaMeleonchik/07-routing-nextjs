import axios from "axios";
// NoteDetails
import type {  NewNote, Note } from "../types/note";

interface NoteHttpResponse{
    notes: Note[], 
    totalPages: number,
}
const url = "https://notehub-public.goit.study/api/notes"
const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export async function fetchNotes(searchQuery: string, page: number): Promise<{notes: Note[], totalPages:number}> {
    const response = await axios.get<NoteHttpResponse>(url, {
        params: {
            ...(searchQuery.trim() && { search: searchQuery.trim() }),
            page,
            perPage: 12,
        },
        headers: {
            Authorization: `Bearer ${myKey}`,
        }
    }
    )
    return {
        notes: response.data.notes,
        totalPages:response.data.totalPages
    }
}




export async function createNote(taskData: NewNote): Promise<Note> {
    const response = await axios.post<Note>(url, taskData, {
        headers: {
            Authorization: `Bearer ${myKey}`,
        }
    }
    )

    return response.data

}


export async function deleteNote(taskId: string):Promise<Note> {
const response = await axios.delete<Note>(`${url}/${taskId}`, {
        headers: {
            Authorization: `Bearer ${myKey}`,
        }
    }
    )
    return response.data
}


export async function fetchNoteById(noteId: string): Promise<Note> {
const response = await axios.get<Note>(`${url}/${noteId}`, {
        headers: {
            Authorization: `Bearer ${myKey}`,
        }
    }
    )
    return response.data
}

