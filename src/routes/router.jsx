import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home layout</h1>,
    },
    {
        path: "/",
        element: <h1>Hospital Management System</h1>,
    },
    {
        path: "auth",
        element: <h1>Login dashboard</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    }
])

export default router;