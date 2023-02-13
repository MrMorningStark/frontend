import { Outlet } from "react-router-dom";
import { NewsFooter } from "./news_footer/NewsFooter";
import { NewsNavbar } from "./news_navbar/NewsNavbar";

export const Main = () => {

    return <>
        <NewsNavbar />
        <div className="newsMainBody">
            <Outlet />
        </div>
        <NewsFooter />
    </>
}