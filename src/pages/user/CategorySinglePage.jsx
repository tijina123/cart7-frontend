import { useEffect, useState } from "react";
import UserService from "../../services/user-api-services/UserService";
import { useParams } from "react-router-dom";

export const CategorySinglePage = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [product, setProduct] = useState([]);
  const { getProductByCategoryId, getHomeProducts } = UserService();

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

  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <div className="header-top">
            <div className="container">{/* End .header-right */}</div>
            {/* End .container */}
          </div>
          {/* End .header-top */}
          <div className="header-middle sticky-header">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars" />
                </button>

                {/* End .main-nav */}
              </div>

              {/* End .header-right */}
            </div>
            {/* End .container */}
          </div>
          {/* End .header-middle */}
        </header>
        {/* End .header */}
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage: 'url("assets/images/page-header-bg.jpg")',
            }}
          >
            {/* End .container */}
          </div>
          {/* End .page-header */}
          <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
            {/* End .container */}
          </nav>
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
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <div style={{ width: "50%" }}>
                              <a href="#" className="btn-product btn-cart">
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
