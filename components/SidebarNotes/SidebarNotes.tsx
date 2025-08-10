import css from "./SidebarNotes.module.css"
import Link from "next/link"

export default async function SidebarNotes() {
     const categories:string[] = ["All", "Personal", "Work", "Todo", "Meeting", "Shopping"]
    
    return <ul className={css.menuList}>
    {categories.map(cat => 
        <li className={css.menuItem} key={cat}>
        <Link href={`/notes/filter/${cat}`} className={css.menuLink}>
          {cat}
        </Link>
      </li> )}
    </ul>

}

