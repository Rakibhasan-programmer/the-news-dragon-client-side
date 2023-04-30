import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
        {
            path: "/",
            element: <Navigate to={"/category"}></Navigate>
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ]
  },
  {
    path: "/category",
    element: <Main />,
    children: [
      {
        path: "/category",
        element: <Category />,
        loader: () => fetch(`http://localhost:5000/news`),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
