import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../services.json')
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('../services.json')
            },
            {
                path: '/services/:detailsId',
                element: <PrivateRoute><ServicesDetails /></PrivateRoute>,
                loader: () => fetch('../services.json')
            },                
            {
                path: '/about',
                element: <About />
            },          
           
          
        ]
    }
])

export default router;