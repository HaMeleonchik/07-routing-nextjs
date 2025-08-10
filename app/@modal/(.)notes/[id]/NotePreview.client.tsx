"use client"
import { useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal"
import css from "./NotePreview.module.css"
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";


export default function NotePreview() {

  const { id } = useParams<{ id: string }>();
    
 const {data:note} = useQuery({
        queryKey: ["note", id],
        queryFn: () => fetchNoteById(id),
        refetchOnMount:false,
 })    

    const router = useRouter();
    const handleClose = () => {
    router.back()
    }


    return <Modal onClose={handleClose}>
        <div className={css.container}>
	<div className={css.item}>
    <div className={css.header}>
    <h2>{note?.title}</h2>
    <button className={css.backBtn} onClick={handleClose}>Close</button>
        </div>
    <p className={css.content}>{note?.content}</p>
    <p className={css.tag}>{ note?.tag}</p>
    <p className={css.date}>{note?.updatedAt}</p>
                
        </div>
    </div>
    </Modal>
}