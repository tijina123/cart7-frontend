import { useEffect, useState } from "react";
import UserService from "../../services/user-api-services/UserService";
import { useParams } from "react-router-dom";
import { Modal } from "bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

export const CategorySinglePage = () => {
  const { auth } = useAuth();
  const { id } = useParams();
  console.log(id, "id");
  const [product, setProduct] = useState([]);
  const { getProductByCategoryId, getHomeProducts, addToWihlist, addToCart } =
    UserService();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    try {
      if (id) {
        const response = await getProductByCategoryId(id);

        setProduct(response?.products);
      } else {
        const response = await getHomeProducts();

        setProduct(response?.products);
      }
    } catch (error) {}
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      if (auth?.name) {
        const data = { productId, quantity };
        const response = await addToCart(data);
        if (response?.success) {
          toast.success(response?.message);
        } else {
          console.log(response, "response from add to cart");
          toast.error(response?.message);
        }
      } else {
        // Show Bootstrap modal programmatically
        const modalEl = document.getElementById("signin-modal");
        if (modalEl) {
          const modal = new Modal(modalEl);
          modal.show();
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      // toast.error("Please login to add product to cart");
    }
  };

  const handleAddToWishlist = async (productId, quantity) => {
    try {
      if (auth?.name) {
        const data = { productId, quantity };
        const response = await addToWihlist(data);

        if (response?.success) {
          toast.success(response?.message);
        } else {
          console.log(response, "response from add to wishlist");
          toast.error(response?.message);
        }
      } else {
        // Show Bootstrap modal programmatically
        const modalEl = document.getElementById("signin-modal");
        if (modalEl) {
          const modal = new Modal(modalEl);
          modal.show();
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      // toast.error("Please login to add product to wishlist");
    }
  };
  return (
    <>
      <div className="page-wrapper">
        {/* End .header */}
        <main className="main">
          {/* End .breadcrumb-nav */}
          <div className="page-content">
            <div className="container">
              {/* End .toolbox */}
              <div className="products">
                <div className="row">
                  {product?.map((products, index) => (
                    <div
                      className="col-6 col-md-4 col-lg-4 col-xl-3"
                      key={index}
                    >
                      <div className="product">
                        <figure className="product-media">
                          <span className="product-label label-new">New</span>
                          <a href="product.html">
                            <img
                              src={products?.images[0]}
                              alt="Product"
                              className="product-image"
                              style={{
                                objectFit: "contain",
                                height: "300px",
                                width: "150",
                                mixBlendMode: "multiply",
                              }}
                            />
                          </a>
                          <div className="product-action-vertical">
                            <button
                              className="btn-product-icon btn-wishlist btn-expandable"
                              onClick={() =>
                                handleAddToWishlist(products._id, 1)
                              }
                            >
                              <span>add to wishlist</span>
                            </button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <div style={{ width: "50%", cursor: "pointer" }}>
                              <a
                                className="btn-product btn-cart"
                                onClick={() => handleAddToCart(products._id, 1)}
                              >
                                <span>add to cart</span>
                              </a>
                            </div>
                          </div>
                        </figure>

                        <div className="product-body">
                          <h3 className="product-title">
                            <a href="product.html">{products.name}</a>
                          </h3>
                          <div className="product-price">
                            ₹{products.product_price}
                          </div>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "0%" }}
                              />
                            </div>
                            <span className="ratings-text">( 3 Reviews )</span>
                          </div>
                          <div className="product-nav product-nav-dots">
                            {/* <a href="#" style={{ background: "#cc9966" }}>
                              <span className="sr-only">Color name</span>
                            </a> */}
                            {/* <a
                              href="#"
                              className="active"
                              style={{ background: "#ebebeb" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End .row */}
              </div>
              {/* End .products */}

              {/* End .sidebar-filter */}
            </div>
            {/* End .container */}
          </div>
          {/* End .page-content */}
        </main>
        {/* End .main */}
      </div>
    </>
  );
};

export default CategorySinglePage;
