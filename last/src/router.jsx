// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // Or your root layout

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

export default router;
