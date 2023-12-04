import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Men from "./pages/MenProducts/Men";
import Women from "./pages/WomenProducts/Women";
import Accessories from "./pages/Accessories/Accessories";
import User from "./pages/User/User";
import Cart from "./pages/Cart/Cart";
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import PaymentPage from "./pages/Payment/PaymentPage";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/menProducts',
        element: <Men/>
    },
    {
        path: '/womenProducts',
        element: <Women/>
    },
    {
        path: '/accessories',
        element: <Accessories/>
    },
    {
        path: '/user',
        element: <User/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/product/:id',
        element: <SingleProductPage/>
    },
    {
        path: '/payment',
        element: <PaymentPage/>
    }
])

export default router;