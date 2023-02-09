import { Link } from "react-router-dom"
import { NEWS_ROUTES } from "../../../constant/constant"

export const Projects=()=>{
    return <div>
        <h1>Projects</h1>
        <Link to={NEWS_ROUTES.home}>Project-News</Link>
    </div>
}