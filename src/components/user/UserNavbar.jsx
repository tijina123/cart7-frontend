import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import UserService from "../../services/user-api-services/UserService";
import RegisterModal from "./RegisterModal";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "bootstrap";


const UserNavbar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { getHomeCategory, putFilterProducts,  } = UserService();

  const [category, setCategory] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [query, setQuery] = useState(""); 
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await getHomeCategory();
      // response?.product?.reverse()
      setCategory(response?.categories);
    } catch (error) {}
  };

  const onClose = async () => {
    setIsOpen(false);
  };
  const onHandleLogout = async () => {
    // Clear local storage
    localStorage.clear();

    // Optional: redirect to login page or homepage
    window.location.href = "/"; // Change the path based on your route
  };

  const handleCategoryClick = async (data) => {
    console.log(data, "===handleCategoryClick");

    document.querySelector(`.${data}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCart = () => {
    if (auth?.name) {
      navigate("/cart");
    } else {
      // toast.error("Please login to view cart");
      // Show Bootstrap modal programmatically
      const modalEl = document.getElementById("signin-modal");
      if (modalEl) {
        const modal = new Modal(modalEl);
        modal.show();
      }
    }
  };
  const handleWishlist = () => {
    if (auth?.name) {
      navigate("/wishlist");
    } else {
      // toast.error("Please login to view wishlist");
      // Show Bootstrap modal programmatically
      const modalEl = document.getElementById("signin-modal");
      if (modalEl) {
        const modal = new Modal(modalEl);
        modal.show();
      }
    }
  };

   const handleSearch = (e) => {
    e.preventDefault();
  
    // Replace with your actual search logic
    console.log("input value",inputValue);
    // navigate(`/search?name=${inputValue}`);
    navigate(`/category?query=${inputValue}`);


    
    // Example: navigate to a results page or call API
    // fetch(`/api/products?search=${query}&category=${category}`)
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header className="header header-10 header-intro-clearance">
        <div className="header-top mt-1">
          <div className="container">
            <div className="header-left">
              <a href="#">
                <i className="icon-phone" />
                Call: +91 7034 133 111
              </a>
            </div>
            {/* End .header-left */}
            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Sign in / Sign up</a>
                  <ul>
                    <li>
                      <div className="header-dropdown">
                        <button>Sell Your Product</button>
                        <div className="header-menu">
                          <ul>
                            <li>
                              <button onClick={() => setIsOpen(true)}>
                                <a>Register now</a>
                              </button>
                            </li>
                            {/* <li><a href="#">French</a></li>
                          <li><a href="#">Spanish</a></li> */}
                          </ul>
                        </div>
                      </div>
                    </li>
                    {!auth?.name && (
                      <li className="">
                        {/* <li className="login"> */}
                        <a
                          href="#signin-modal"
                          data-toggle="modal"
                          id="openModalButton"
                        >
                          Sign in/Sign up
                        </a>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
              {/* End .top-menu */}
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-top */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              {/* <a href="index.html" className="logo">
  <img 
    src="assets/images/demos/demo-13/logo (3).png" 
    alt="cart7 Logo" 
    width={150} 
    height={150} 
  
  />
</a> */}
              <Link to={"/"} className="logo">
                <img
                  src="assets/images/demos/demo-13/logo (3).png"
                  alt="cart7 Logo"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            {/* End .header-left */}
            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search" />
                </a>
                <form onSubmit={handleSearch} method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <div className="select-custom">
                      <select id="cat" name="cat">
                        <option value>Best sellers</option>
                        <option value={1}>Fashion</option>
                      </select>
                    </div>
                    {/* End .select-custom */}
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input onChange={(e) => setInputValue(e.target.value)}
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search" />
                    </button>
                  </div>
                  {/* End .header-search-wrapper */}
                </form>
              </div>
              {/* End .header-search */}
            </div>
            <div className="header-right">
              <div className="header-dropdown-link">
                <button className="wishlist-link" onClick={handleWishlist}>
                  {/* <a href="wishlist.html" className="wishlist-link"> */}
                  <i className="icon-heart-o" />
                  {/* <span className="wishlist-count">3</span> */}
                  <span className="wishlist-txt">Wishlist</span>
                  {/* </a> */}
                </button>

                <div className="dropdown cart-dropdown">
                  <button
                    className="dropdown-toggle"
                    role="button"
                    onClick={handleCart}
                  >
                    {/* <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"> */}
                    <i className="icon-shopping-cart" />
                    {/* <span className="cart-count">2</span> */}
                    <span className="cart-txt">Cart</span>
                    {/* </a> */}
                  </button>
                </div>
                {/* End .cart-dropdown */}
                {auth?.name && (
                  <div className="dropdown cart-dropdown">
                    <Link
                      to="/profile"
                      className="dropdown-toggle"
                      role="button"
                    >
                      {/* <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"> */}
                      {/* <i className="icon-shopping-cart" /> */}
                      {/* <span className="cart-count">2</span> */}
                      <CgProfile size={24} />
                      <span className="cart-txt">Profile</span>
                      {/* </a> */}
                    </Link>
                  </div>
                )}
                {/* End .cart-dropdown */}

                {auth?.name && (
                  <Link
                    to="/"
                    onClick={onHandleLogout}
                    className="wishlist-link"
                  >
                    {/* <a href="wishlist.html" className="wishlist-link"> */}
                    {/* <FiLogOut style={{ fontSize: "18px", marginRight: "5px" }} /> */}
                    <FiLogOut size={24} />
                    <span className="cart-txt">Logout</span>

                    {/* </a> */}
                  </Link>
                )}
              </div>
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container */}
        </div>
        {/* End .header-middle */}
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <div
                className="dropdown category-dropdown show is-on"
                data-visible="true"
              >
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="Browse Categories"
                >
                  Categories
                </a>
                <div className="dropdown-menu show">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                      <li>
                        <a>
                          <Link
                            to={`/category`}
                            // onClick={() =>
                            //   document
                            //     .querySelector(".filter-products")
                            //     ?.scrollIntoView({ behavior: "smooth" })
                            // }
                          >
                            All products
                          </Link>{" "}
                        </a>
                      </li>
                      {category?.map((data) => (
                        <li>
                          <a>
                            <Link to={`/category?name=${data?.name}&id=${data?._id}`}
                              // onClick={() => handleCategoryClick(data?.name)}
                            >
                              {data?.name}
                            </Link>{" "}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {/* End .menu-vertical */}
                  </nav>
                  {/* End .side-nav */}
                </div>
                {/* End .dropdown-menu */}
              </div>
              {/* End .category-dropdown */}
            </div>
            {/* End .col-lg-3 */}
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container active">
                    <Link
                      to="/"
                      className="text-white hover:text-blue-500 no-underline transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  {category?.map((data) => (
                  <li className="megamenu-container active">
                    <Link
                      to={`/category?name=${data?.name}&id=${data?._id}`}
                      className="text-white hover:text-blue-500 no-underline transition-colors duration-300"
                    >
                     {data?.name}
                    </Link>
                  </li>
                  ))} 
                  
                   
               
                </ul>
                {/* End .menu */}
              </nav>
              {/* End .main-nav */}
            </div>
            {/* End .col-lg-9 */}
            <div className="header-right">
              <i className="la la-lightbulb-o" />
              <p>Buy and Save Big</p>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* End .header-bottom */}
      </header>

      {isOpen && <RegisterModal onClose={onClose} />}
    </>
  );
};

export default UserNavbar;

