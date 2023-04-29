import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Home />
            },
            {
                path: "/register",
                element: <Home />
            }
        ]
    }
])

export default router;