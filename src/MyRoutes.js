import { useRoutes } from "react-router-dom"
import { portfolioRoutes } from "./routes/portfolioRoutes"
import { newsRoutes } from "./routes/newsRoutes";
import { NotFound404 } from "./modules/notFound404/NotFound404";


export const MyRoutes = () => {

    return useRoutes([
        portfolioRoutes,
        newsRoutes,
        {
            path:'',
            element: <NotFound404 />,
        }
    ]);

}