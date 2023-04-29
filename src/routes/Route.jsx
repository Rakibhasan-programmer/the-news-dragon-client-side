import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NewsLayout from "../layouts/NewsLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/category/:id",
                        element: <Category />
                    }
                ]
            },
            {
                path: "/news",
                element: <NewsLayout />
            },
            {
                path: "/login",
                element: <Home />
            },
            {
                path: "/register",
                element: <Home />
            },
        ]
    }
])

export default router;