import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./components/LandingPage";
import GameDetailPage from "./pages/GameDetailPage";
import TopBanner from "./components/TopBanner";
import LandingLayout from "./pages/LandingLayout";
import ErrorPage from "./pages/ErrorPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import LayoutTerms from "./pages/LayoutTerms";

const router = createBrowserRouter([
    { path: '', element: <LandingLayout /> ,
        children: [
            { path: '', element: <LandingPage /> }
        ]
    },

    { path: '/terms-and-conditions', element: <LayoutTerms />,
        children: [
            { path: '', element: <TermsAndConditions /> }
        ]
      },

    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/games' , element: <HomePage /> },
            { path: '/games/:slug' , element: <GameDetailPage /> },
        ]
    }
]);

export default router;