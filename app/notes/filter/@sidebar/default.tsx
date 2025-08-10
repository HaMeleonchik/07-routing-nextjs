import SidebarNotes from "@/components/SidebarNotes/SidebarNotes";
import css from "../LayoutNotes.module.css"
export default function Sidebar() {
    
    const categories: string[] = ["All", "Personal", "Work", "Todo", "Meeting", "Shopping"]

    return <div className={css.sidebar}>
        <SidebarNotes categories={categories} />
    </div>
}