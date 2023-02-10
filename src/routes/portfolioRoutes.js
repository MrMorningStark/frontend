import { PORTFOLIO_ROUTES } from "../constant/constant";
import {Home} from "../modules/project-portfolio/Home";
import {Myself} from "../modules/project-portfolio/Myself";
import {Projects} from "../modules/project-portfolio/projects/Projects";
import { NotFound404 } from "../modules/notFound404/NotFound404";

export const portfolioRoutes = {
    path: PORTFOLIO_ROUTES.home,
    element: <Home />,
    children: [
        {
            path: PORTFOLIO_ROUTES.home,
            element: <Myself />,
        },
        {
            path: PORTFOLIO_ROUTES.resume,
            element: <div>Resume</div>,
        },
        {
            path: PORTFOLIO_ROUTES.projects,
            element: <Projects />,
        },
        {
            path: PORTFOLIO_ROUTES.notFound,
            element: <NotFound404 />,
        },
    ]
};