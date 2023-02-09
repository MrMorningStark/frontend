import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar/Navbar"

export const Home = () => {
    return <>
        <Navbar />
        <Outlet />
    </>
}