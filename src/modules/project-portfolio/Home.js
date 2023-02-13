import { Outlet } from "react-router-dom"
import { NewsFooter } from "../Project_news/news_footer/NewsFooter"
import { Navbar } from "./navbar/Navbar"

export const Home = () => {
    return <>
        <Navbar />
        <Outlet />
        <NewsFooter />
    </>
}