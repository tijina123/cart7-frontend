import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "bootstrap";
import UserService from "../../services/user-api-services/UserService";
import useAuth from "../../hooks/useAuth";
import { useParams, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const { getSingleProduct, addToCart } = UserService();
  const [searchParams] = useSearchParams();
  // const { id } = useParams();
const id = searchParams.get('id');
  const { auth } = useAuth();

  const [singleProduct, setSingleProduct] = useState(null);
  const [singleImage, setSingleImage] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await getSingleProduct(id);
      const product = response?.product;

      if (product) {
        setSingleProduct(product);
        setSingleImage(product.images?.[0] || "");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    try {
      if (auth?.name) {
        const data = { productId, quantity };
        const response = await addToCart(data);
        response?.success ? toast.success(response.message) : toast.error(response.message);
      } else {
        showLoginModal();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  const handleAddToWishlist = async (productId, quantity) => {
    try {
      if (auth?.name) {
        const data = { productId, quantity };
        const response = await addToWihlist(data);
        response?.success ? toast.success(response.message) : toast.error(response.message);
      } else {
        showLoginModal();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    }
  };

  const showLoginModal = () => {
    const modalEl = document.getElementById("signin-modal");
    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  };

  if (!singleProduct) return <div className="text-center py-20 text-lg font-medium">Loading product...</div>;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="page-wrapper bg-light">
        <main className="main pt-5">
          <div className="container py-4">
            <div className="row align-items-start g-5">
              {/* Left Image Column */}
              <div className="col-md-6">
                <div className="border p-3 rounded shadow-sm bg-white">
                {/* Main Image Centered */}
<div
  className="d-flex align-items-center justify-content-center mb-3"
  style={{ height: "430px", backgroundColor: "#f9f9f9", borderRadius: "6px" }}
>
  <img
    src={singleImage}
    alt="Product"
    className="img-fluid"
    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
  />
</div>


                  {/* Thumbnail Images */}
                  <div className="d-flex justify-content-center gap-2 flex-wrap">
                    {singleProduct.images?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => setSingleImage(img)}
                        alt={`product-thumbnail-${index}`}
                        className="img-thumbnail"
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
  <div className="bg-white p-4 rounded shadow-sm">

    {/* Product Title */}
    <h1
      className="fw-bold text-dark mb-3"
      style={{
        fontSize: "3.2rem",
        lineHeight: "1.3",
        letterSpacing: "-0.3px",
        textTransform: "capitalize",
      }}
    >
      {singleProduct.name}
    </h1>

    {/* Price Section */}
    <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
      <span className="fs-2 fw-bold text-success">
        ₹{singleProduct.sale_price}
      </span>
      {singleProduct.original_price && singleProduct.original_price > singleProduct.sale_price && (
        <>
          <span className="fs-5 text-muted text-decoration-line-through">
            ₹{singleProduct.original_price}
          </span>
          <span className="badge bg-danger fs-6">
            Save ₹{singleProduct.original_price - singleProduct.sale_price}
          </span>
        </>
      )}
    </div>

    {/* Category */}
    <div className="mb-3">
      <span className="badge  text-muted px-3 py-2">
        Category: {singleProduct?.category?.name}
      </span>
    </div>

    {/* Description */}
    <p className="text-muted mb-4" style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
      {singleProduct.description}
    </p>

    {/* Action Buttons */}
    <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
    <button
  type="button"
  className="btn btn-outline-primary w-100 shadow-sm"
  onMouseEnter={(e) => {
    e.currentTarget.classList.add("shadow", "border-primary");
  }}
  onMouseLeave={(e) => {
    e.currentTarget.classList.remove("shadow", "border-primary");
  }}
  onClick={() => handleAddToWishlist(singleProduct._id, 1)}
>
  ❤️ Add to Wishlist
</button>

<button
  type="button"
  className="btn btn-primary w-100 shadow-sm"
  onMouseEnter={(e) => {
    e.currentTarget.classList.add("shadow");
  }}
  onMouseLeave={(e) => {
    e.currentTarget.classList.remove("shadow");
  }}
  onClick={() => handleAddToCart(singleProduct._id, 1)}
>
  🛒 Add to Cart
</button>



    </div>

    {/* Delivery Info */}
    <div className="text-muted small">
      <i className="bi bi-truck me-2" />
      Fast delivery within 2–4 days
    </div>

  </div>
</div>

            </div>
          </div>
        </main>
      </div>

      {/* Scroll to top */}
      <button id="scroll-top" title="Back to Top" className="btn btn-light position-fixed bottom-0 end-0 m-4 shadow">
        <i className="icon-arrow-up" />
      </button>

      {/* Overlay (if used) */}
      <div className="mobile-menu-overlay" />
    </>
  );
};

export default ProductPage;