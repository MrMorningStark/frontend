import { Navigate, useRoutes } from "react-router-dom"
import { portfolioRoutes } from "./routes/portfolioRoutes"
import { newsRoutes } from "./routes/newsRoutes";
import { PORTFOLIO_ROUTES } from "./constant/constant";

export const MyRoutes = () => {

    const redirectRoute = {
        path: '/',
        element: <Navigate to={PORTFOLIO_ROUTES.portFolio} />,
    }

    return useRoutes([
        redirectRoute,
        portfolioRoutes,
        newsRoutes

    ]);

}