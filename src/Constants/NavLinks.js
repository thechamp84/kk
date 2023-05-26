import Aboutus from "../Pages/About-Us/Aboutus";
import ContactUs from "../Pages/Contact-Us/ContactUs";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";

export const navLinks = [

    {
        title: 'Home',
        path: "/kk",
        exact: true,
        element: <Home />
    },
    {
        title: 'About Us',
        path: "/aboutUs",
        exact: true,
        element:<Aboutus/>
    },
   {
        title: 'Products',
        path: '/products',
        exact: true,
        element: <Products/>
    },
    {
        title: 'Contact Us',
        path:'/contactUs',
        exact: true,
        element: <ContactUs/>
    }
   
   
]
