'use client'

import css from "../../../components/loaderErrorCss/loaderErrorCss.module.css"
interface Props{
  error:Error
}
export default function Error({error}:Props){
return <p className={css.errorText}>Could not fetch note details. {error.message}</p>
}