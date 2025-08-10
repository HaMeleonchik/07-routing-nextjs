"use client"
import { useState } from "react"
import css from "./TagsMenu.module.css"
import Link from "next/link"

export default function TagsMenu() {

  const categories:string[] = ["All", "Personal", "Work", "Todo", "Meeting", "Shopping"]
  const [toggle, setToggle] = useState(false)

    return <div className={css.menuContainer}>
  <button className={css.menuButton} onClick={()=> setToggle(!toggle)}>
    Notes ▾
      </button>
      <ul className={css.menuList} id="menuList" style={{display: toggle ? "block": "none"}}>
              
        {toggle && categories.map(cat => 
        <li className={css.menuItem} key={cat} onClick={()=> setToggle(false)}>
        <Link href={`/notes/filter/${cat}`} className={css.menuLink}>
          {cat}
        </Link>
      </li> )}
         </ul>
</div>

}