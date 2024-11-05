import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./components/LandingPage";
import GameDetailPage from "./pages/GameDetailPage";
import TopBanner from "./components/TopBanner";
import LandingLayout from "./pages/LandingLayout";

const router = createBrowserRouter([
    { path: '', element: <LandingLayout /> ,
        children: [
            { path: '', element: <LandingPage /> }
        ]
    },

    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/games' , element: <HomePage /> },
            { path: 'games/:id' , element: <GameDetailPage /> }

            

        ]
    }
]);

export default router;