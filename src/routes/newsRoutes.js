import { NEWS_ROUTES } from "../constant/constant";
import { NotFound404 } from "../modules/notFound404/NotFound404";
import { NewsHome } from "../modules/Project_news/modules/newsHome/NewsHome";
import { Main } from "../modules/Project_news/Main";

export const newsRoutes = {
    path: NEWS_ROUTES.home,
    element: <Main />,
    children: [
        {
            path: NEWS_ROUTES.home,
            element: <NewsHome />,
        },
        {
            path: NEWS_ROUTES.notFound,
            element: <NotFound404 />,
        },
    ]
};