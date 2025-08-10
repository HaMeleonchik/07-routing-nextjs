import React from "react"
import css from "./LayoutNotes.module.css"
interface Props{
    children: React.ReactNode,
    sidebar: React.ReactNode
}
export default function NotesLayout({ children, sidebar}: Props) {
    return (
        <div className={css.container}>
            {sidebar}
            {children}
        </div>
    )
}