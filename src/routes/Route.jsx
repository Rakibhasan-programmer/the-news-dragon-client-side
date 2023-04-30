import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
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
            element: <Category />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.id}`),
          },
        ],
      },
      {
        path: "/news/:id",
        element: <NewsLayout />,
      },
      {
        path: "/login",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Home />,
      },
    ],
  },
]);

export default router;
