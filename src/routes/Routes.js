import HomeContainer from '../containers/home/HomeContainer';
import ContactContainer from '../containers/contact/ContactContainer';
import AboutContainer from '../containers/about/AboutContainer';
import ProductContainer from '../containers/product/ProductContainer';
import CheckoutContainer from '../containers/checkout/CheckoutContainer';
import SingleProductContainer from '../containers/singleproduct/SingleProductContainer';
const routes=[
    {
        path: "/",
        component: HomeContainer,
        title: "Home page",

    },
    {
         path: "/contact",
         component: ContactContainer,
         title: "contact page",
    },
    {
         path: "/about",
         component: AboutContainer,
         title: "about page",

    },
    {
         path: "/product",
         component:ProductContainer,
         title: "product page",

    },
    {
         path: "/singleproduct",
         component:SingleProductContainer,
         title: "product page",

    },
    {
         path: "/checkout",
         component:CheckoutContainer,
         title: "checkout page",

    },
];

export default routes;