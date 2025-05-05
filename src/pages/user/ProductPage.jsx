// import React, {useEffect, useState} from "react";
// import UserService from "../../services/user-api-services/UserService";

// const productPage = () =>{
// const {getSingleProduct} = UserService();

//   const [singleProduct, setSingleProduct] = useState({});
//   const [singleImage, setSingleImage] = useState("");
  
// console.log(singleProduct, "============singleProduct 1");


//     useEffect(() => {
//       getProduct();
//     }, []);
  

//     const getProduct = async () => {
//       console.log("============singleProduct 2");
      
//       try {
//         const response = await getSingleProduct("68120921a7aaa9063a1b3052");
//         console.log(response, "============response?.productsByCategory 1");
//         console.log(response?.product, "============response?.productsByCategory 2");
  
//         setSingleProduct(response?.product);
//         setSingleImage(response?.product?.images[0]);
  
//       } catch (error) {
  
//       }
  
//     }

//   return (
//     <>
 
//       <div className="page-wrapper">

//         <main className="main">

//           {/* End .breadcrumb-nav */}
//           <div className="page-content">
//             <div className="container">
//               <div className="product-details-top mb-2">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="product-gallery product-gallery-vertical">
//                       <div className="row">
//                         <figure className="product-main-image">
//                           <img
//                             id="product-zoom"
//                             src={singleImage}
//                             style={{ width: "50%", height: "80%" }}
//                             data-zoom-image="assets/images/products/single/centered/1-big.jpg"
//                             alt="product image"
//                           />
//                           <a
//                             href="#"
//                             id="btn-product-gallery"
//                             className="btn-product-gallery"
//                           >
//                             <i className="icon-arrows" />
//                           </a>
//                         </figure>
//                         {/* End .product-main-image */}
//                         <div
//                           id="product-zoom-gallery"
//                           className="product-image-gallery"
//                         >
                     

//                           {singleProduct?.images?.map((img, index) => (
//      <a
//      className="product-gallery-item active"
//      href="#"
//      data-image="assets/images/products/single/centered/1.jpg"
//      data-zoom-image="assets/images/products/single/centered/1-big.jpg"
//    >
//      <img
//        src={img}
//        alt="product side"
//        style={{ width: "50%", height: "25%" }}
//      />
//    </a>
// ))}

                          
                         
                          
//                         </div>
//                         {/* End .product-image-gallery */}
//                       </div>
//                       {/* End .row */}
//                     </div>
//                     {/* End .product-gallery */}
//                   </div>
//                   {/* End .col-md-6 */}
//                   <div className="col-md-6">
//                     <div className="product-details product-details-centered">
//                       <h1 className="product-title">
//                         {singleProduct?.name}
//                       </h1>
//                       {/* <div className="ratings-container">
//                         <div className="ratings">
//                           <div
//                             className="ratings-val"
//                             style={{ width: "80%" }}
//                           />
//                         </div>
                      
//                         <a
//                           className="ratings-text"
//                           href="#product-review-link"
//                           id="review-link"
//                         >
//                           ( 2 Reviews )
//                         </a>
//                       </div> */}
//                       {/* End .rating-container */}
//                       <div className="product-price">₹{singleProduct.sale_price}</div>
//                       {/* End .product-price */}
//                       <div className="product-content">
//                         <p>
//                           {singleProduct?.description}
//                         </p>
//                       </div>
                      
//                       {/* End .details-filter-row */}
//                       <div className="product-details-action">
//                         <div className="details-action-col">
                          
//                           {/* End .product-details-quantity */}
//                           <a href="#" className="btn-product btn-cart">
//                             <span>add to cart</span>
//                           </a>
//                         </div>
//                         {/* End .details-action-col */}
//                         <div className="details-action-wrapper">
//                           <a
//                             href="#"
//                             className="btn-product btn-wishlist"
//                             title="Wishlist"
//                           >
//                             <span>Add to Wishlist</span>
//                           </a>
                          
//                         </div>
//                         {/* End .details-action-wrapper */}
//                       </div>
//                       {/* End .product-details-action */}
//                       <div className="product-details-footer">
//                         <div className="product-cat">
//                           <span>Category:</span>
//                           {singleProduct?.category}
//                         </div>
//                         {/* End .product-cat */}
                       
//                       </div>
//                       {/* End .product-details-footer */}
//                     </div>
//                     {/* End .product-details */}
//                   </div>
//                   {/* End .col-md-6 */}
//                 </div>
//                 {/* End .row */}
//               </div>
//               {/* End .product-details-top */}
            

//               {/* End .owl-carousel */}
//             </div>
//             {/* End .container */}
//           </div>
//           {/* End .page-content */}
//         </main>
//         {/* End .main */}
        
//         {/* End .footer */}
//       </div>
//       {/* End .page-wrapper */}
//       <button id="scroll-top" title="Back to Top">
//         <i className="icon-arrow-up" />
//       </button>
//       {/* Mobile Menu */}
//       <div className="mobile-menu-overlay" />
//       {/* End .mobil-menu-overlay */}

//       {/* End .mobile-menu-container */}
      
//       {/* molla/product-centered.html  22 Nov 2019 10:03:20 GMT */}
//     </>
//   );
// }

// export default productPage;








import React, { useEffect, useState } from "react";
import UserService from "../../services/user-api-services/UserService";

const ProductPage = () => {
  const { getSingleProduct } = UserService();

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

  return (
    <>
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
                              maxHeight: "420px",
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
                          <a href="#" className="btn-product btn-cart">
                            <span>Add to Cart</span>
                          </a>
                        </div>
                        <div className="details-action-wrapper">
                          <a
                            href="#"
                            className="btn-product btn-wishlist"
                            title="Wishlist"
                          >
                            <span>Add to Wishlist</span>
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
