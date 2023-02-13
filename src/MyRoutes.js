import { Navigate, useRoutes } from "react-router-dom"
import { portfolioRoutes } from "./routes/portfolioRoutes"
import { newsRoutes } from "./routes/newsRoutes";


export const MyRoutes = () => {

    return useRoutes([
        portfolioRoutes,
        newsRoutes,
        {
            path:'/',
            element: <Navigate to={'/my-portfolio'} />,
        }
    ]);

}