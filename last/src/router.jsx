// src/router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App.jsx"; // Or your root layout
import Signup from "./views/Signup.jsx";
import Surveys from "./views/surveys.jsx";  // Import your views
import Login from "./views/Login.jsx";
import Dashboard from "./views/Dashboard.jsx"; // Import your Dashboard view
import GuestLayout from "./components/GuestLayout.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
const router = createBrowserRouter([


    {
        path: "",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />
            },
            {

                path: "/",
                element: <Dashboard />,
            },
            {

                path: "/Dashboard",
                element: <Dashboard />,
            },
            {
                path: "/Surveys",
                element: <Surveys />,
            },
        ]
    },
    {
        path: "",
        element: <GuestLayout />,
        children: [
            {
                path: "/Login",
                element: <Login />,
            }, {
                path: "/Signup",
                element: <Signup />,
            },
        ]
    },
]);

export default router;
