import css from "../components/loaderErrorCss/loaderErrorCss.module.css"

export default function loader() {
    return <p className={css.loadingText}>Loading, please wait...</p>
}
