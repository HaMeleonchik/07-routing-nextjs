import SidebarNotes from "@/components/SidebarNotes/SidebarNotes";
import css from "../LayoutNotes.module.css"
export default function Sidebar() {
    return <div className={css.sidebar}>
        <SidebarNotes />
    </div>
}