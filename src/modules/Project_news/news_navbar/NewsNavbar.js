import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { NEWS_ROUTES, PORTFOLIO_ROUTES } from "../../../constant/constant";
import { Hamburger } from "../../helper/Hamburger";

export const NewsNavbar = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return <div className={open ? "navbar news-navbar open" : "navbar news-navbar"}>
        <ul className="nav-title">

            <li className="news-title pointer" onClick={() => navigate(NEWS_ROUTES.home)}>
                The News📰
            </li>


        </ul>
        <ul className="nav-link">
            <Hamburger margin="10px 0 0 auto" color={'white'} size={'2px'} setOpen={setOpen} open={open} />
            <div className="nav-link-box">
                <li className="news-subTitle pointer list" onClick={() => navigate(NEWS_ROUTES.home)} >
                    Home
                </li>
                <li>
                    |
                </li>
                <li className="news-subTitle pointer list" onClick={() => navigate(PORTFOLIO_ROUTES.portFolio)}>
                    About
                </li>
                <li>
                    |
                </li>
                <li className="news-subTitle pointer list" onClick={() => navigate(NEWS_ROUTES.contact)}>
                    Contact
                </li>
            </div>

        </ul>

    </div>
}