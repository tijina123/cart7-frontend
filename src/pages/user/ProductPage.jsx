

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "bootstrap"; // Bootstrap 5
import UserService from "../../services/user-api-services/UserService";
import useAuth from "../../hooks/useAuth";  

const ProductPage = () => {
  const { getSingleProduct, addToCart } = UserService();
  const { auth } = useAuth();
  const [singleProduct, setSingleProduct] = useState(null);
  const [singleImage, setSingleImage] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await getSingleProduct("68120921a7aaa9063a1b3052");
      const product = response?.product;

      if (product) {
        setSingleProduct(product);
        setSingleImage(product.images?.[0] || "");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!singleProduct) return <div>Loading...</div>;

  const handleAddToCart = async (productId, quantity) => {
    console.log("productId", productId);
    
    try {
      if (auth?.name) {
      const data = { productId, quantity };
      const response = await addToCart(data);
      if (response?.success) {
        toast.success(response?.message);
      }else {
        
        console.log(response, "response from add to cart");
        toast.error(response?.message);
      }
    } else {
      console.log("Please login to add product to cart");
      
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
      }else {
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
  }
  catch (error) {
    toast.error(error?.response?.data?.message);
      // toast.error("Please login to add product to wishlist");

    }}

  return (
    <>
          <Toaster position="top-center" reverseOrder={false} />
    
      <div className="page-wrapper">
        <main className="main" style={{ marginTop: "30px" }}>
          <div className="page-content">
            <div className="container">
              <div className="product-details-top mb-2">
                <div className="row">
                  {/* Image Section */}
                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <div className="product-gallery product-gallery-vertical w-100">
                      <div className="row">
                        {/* Main Image */}
                        <figure className="product-main-image text-center">
                          <img
                            id="product-zoom"
                            src={singleImage}
                            className="img-fluid"
                            style={{
                              maxHeight: "430px",
                              objectFit: "contain",
                              width: "100%",
                            }}
                            alt="product"
                          />
                          <a
                            href="#"
                            id="btn-product-gallery"
                            className="btn-product-gallery"
                          >
                            <i className="icon-arrows" />
                          </a>
                        </figure>

                        {/* Thumbnail Gallery */}
                        <div
                          id="product-zoom-gallery"
                          className="product-image-gallery d-flex justify-content-center flex-wrap gap-2"
                        >
                          {singleProduct.images?.map((img, index) => (
                            <a
                              key={index}
                              className="product-gallery-item"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setSingleImage(img);
                              }}
                              data-image={img}
                              data-zoom-image={img}
                            >
                              <img
                                src={img}
                                alt={`product ${index}`}
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "contain",
                                  border: "none",
                                  borderRadius: "4px",
                                }}
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Section */}
                  <div className="col-md-6">
                    <div className="product-details product-details-centered">
                      <h1 className="product-title">{singleProduct?.name}</h1>

                      <div className="product-price">
                        ₹{singleProduct?.sale_price}
                      </div>

                      <div className="product-content">
                        <p>{singleProduct?.description}</p>
                      </div>

                      <div className="product-details-action">
                        <div className="details-action-col">
                          <a href="#" className="btn-product btn-wishlist"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToWishlist(singleProduct._id, 1);
                          }}
                          >
                            
                            <span>Add to wishlish </span>
                          </a>
                        </div>
                        <div className="details-action-wrapper">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(singleProduct._id, 1);
                            }}
                          >
                            <span>Add to Cart</span>
                          </a>
                        </div>
                      </div>

                      <div className="product-details-footer">
                        <div className="product-cat">
                          <span>Category:</span> {singleProduct?.category?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End row */}
              </div>
              {/* End product-details-top */}
            </div>
          </div>
        </main>
      </div>

      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>

      <div className="mobile-menu-overlay" />
    </>
  );
};

export default ProductPage;
