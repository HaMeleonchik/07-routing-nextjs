import css from "./SidebarNotes.module.css"
import Link from "next/link"

interface CatProps{
  categories: string[];
}
export default async function SidebarNotes({categories}: CatProps) {
    
    return <ul className={css.menuList}>
    {categories.map(cat => 
        <li className={css.menuItem} key={cat}>
        <Link href={`/notes/filter/${cat}`} className={css.menuLink}>
          {cat}
        </Link>
      </li> )}
    </ul>

}

