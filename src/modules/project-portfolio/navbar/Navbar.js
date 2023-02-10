import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PORTFOLIO_ROUTES } from "../../../constant/constant";
import { Circle } from "../../helper/Circle";
import { Hamburger } from '../../helper/Hamburger';
 
export const Navbar = () => {

    const navigate = useNavigate();

    const [open,setOpen]=useState(false);

    return <div className="navbar">
        <ul className="nav-title">
            <Circle size="20px" backgroundColor="#ff9d72" margin="0 5px 0 0" />

            <li className="title pointer" onClick={() => navigate(PORTFOLIO_ROUTES.home)}>
                Rajat Khatri
            </li>
            <li className="subTitle pointer" onClick={() => navigate(PORTFOLIO_ROUTES.home)}>
                Web Developer
            </li>
        </ul>
        <ul className="nav-link">
            <Hamburger setOpen={setOpen} open={open}/>
            <li className="subTitle pointer" onClick={() => navigate(PORTFOLIO_ROUTES.resume)} >
                Resume
            </li>
            <li>
                |
            </li>
            <li className="subTitle pointer" onClick={() => navigate(PORTFOLIO_ROUTES.projects)}>
                Projects
            </li>
            <li>
                |
            </li>
            <li className="subTitle pointer" onClick={() => navigate(PORTFOLIO_ROUTES.contact)}>
                Contact
            </li>
        </ul>

    </div>
}