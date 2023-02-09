import { Outlet } from "react-router-dom";
import { NewsNavbar } from "./news_navbar/NewsNavbar";

export const Main = () => {

    return <>
        <NewsNavbar />
        <div className="newsMainBody">
            <Outlet />
        </div>
    </>
}