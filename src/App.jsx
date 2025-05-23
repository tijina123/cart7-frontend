import "./App.css";
import "./assets/styles/globals.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";


import UserProtectedRoute from "./components/protected-route/UserProtectedRoute";
import DefaultProtectedRoute from "./components/protected-route/DefaultProtectedRoute";

import NotFound from "./pages/not-found/NotFound";
import Cart from "./pages/user/Cart";
import Wishlist from "./pages/user/Wishlist";
import Checkout from "./pages/user/Checkout";
import Profile from "./pages/user/Profile";
import OrderSuccess from "./pages/user/OrderSuccess";
import PrivacyPolicy from "./pages/user/PrivacyPolicy";
import TermsandConditions from "./pages/user/TermsandConditions";
import ReturnPolicy from "./pages/user/ReturnPolicy";
import Contact from "./pages/user/Contact";
import FAQ from "./pages/user/Faq";
import About from "./pages/user/About";
import CategorySinglePage from "./pages/user/CategorySinglePage";
import ProductPage from "./pages/user/ProductPage";



function App() {

    return (
        <Routes>

            
            <Route element={<UserProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/order-success" element={<OrderSuccess />} />
               
            </Route>
            <Route element={<DefaultProtectedRoute />}>



                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsandConditions />} />
                <Route path="/return-refund" element={<ReturnPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/category/:category/:id" element={<CategorySinglePage />} /> */}
                <Route path="/category" element={<CategorySinglePage />} />
     

                <Route path="/about" element={<About />} /> 
                <Route path="/product" element={<ProductPage />} /> 



            <Route path="*" element={<NotFound />} />
            </Route>
           
        </Routes>
    );
}

export default App;
