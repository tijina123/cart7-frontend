export const CategorySinglePage = () => (
  <>
    {/* molla/category-boxed.html  22 Nov 2019 10:03:00 GMT */}
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
   
    {/* Favicon */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="assets/images/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="assets/images/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="assets/images/icons/favicon-16x16.png"
    />
    <link rel="manifest" href="assets/images/icons/site.html" />
    <link
      rel="mask-icon"
      href="assets/images/icons/safari-pinned-tab.svg"
      color="#666666"
    />
    <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
    <meta name="apple-mobile-web-app-title" content="Molla" />
    <meta name="application-name" content="Molla" />
    <meta name="msapplication-TileColor" content="#cc9966" />
    <meta
      name="msapplication-config"
      content="assets/images/icons/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    {/* Plugins CSS File */}
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    {/* Main CSS File */}
    <link rel="stylesheet" href="assets/css/style.css" />
    <link
      rel="stylesheet"
      href="assets/css/plugins/owl-carousel/owl.carousel.css"
    />
    <link
      rel="stylesheet"
      href="assets/css/plugins/magnific-popup/magnific-popup.css"
    />
    <link
      rel="stylesheet"
      href="assets/css/plugins/nouislider/nouislider.css"
    />
    <div className="page-wrapper">
      <header className="header">
        <div className="header-top">
          <div className="container">
            
      
            {/* End .header-right */}
          </div>
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
          style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
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
            <div className="toolbox">
              <div className="toolbox-left">
                <a href="#" className="sidebar-toggler">
                  <i className="icon-bars" />
                  Filters
                </a>
              </div>
              {/* End .toolbox-left */}
              <div className="toolbox-center">
                <div className="toolbox-info">
                  Showing <span>12 of 56</span> Products
                </div>
                {/* End .toolbox-info */}
              </div>
              {/* End .toolbox-center */}
              <div className="toolbox-right">
                <div className="toolbox-sort">
                  <label htmlFor="sortby">Sort by:</label>
                  <div className="select-custom">
                    <select name="sortby" id="sortby" className="form-control">
                      <option value="popularity" selected="selected">
                        Most Popular
                      </option>
                      <option value="rating">Most Rated</option>
                      <option value="date">Date</option>
                    </select>
                  </div>
                </div>
                {/* End .toolbox-sort */}
              </div>
              {/* End .toolbox-right */}
            </div>
            {/* End .toolbox */}
            <div className="products">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-1.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Women</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Nunc dignissim risus</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$50.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "0%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#cc9966" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#ebebeb" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-2.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Cras ornare tristique</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$32.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "80%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 11 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">30% off</span>
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-3.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Women</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Aliquam tincidunt mauris</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$50.00</span>
                        <span className="old-price">$84.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "40%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#cc9966" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#7fc5ed" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#e8c97a" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-4.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Dresses</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Brown paperbag waist pencil skirt
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$60.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "20%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#cc9966" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#7b5d36" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-5.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Dresses</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Dark yellow lace cut out swing dress
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$84.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "0%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" style={{ background: "#ebebeb" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#eabc4e" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-out">
                        Out of stock
                      </span>
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-6.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Jackets</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Khaki utility boiler jumpsuit</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="out-price">$120.00</span>
                      </div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "80%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-7.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Jeans</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$76.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "20%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-8.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$84.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "0%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#d8c5b0" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-9.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Orange saddle lock front chain cross body bag
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$52.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "60%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 1 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#e07a3d" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#7b5d36" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#dac1a7" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-10.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Jumpers</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Yellow button front tea top</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$56.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "0%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-top">Top</span>
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-11.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Light brown studded Wide fit wedges
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$110.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "20%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#cc9966" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#dac1a7" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/products/product-12.jpg"
                          alt="Product image"
                          className="product-image"
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
                      {/* End .product-action */}
                      <div className="product-action action-icon-top">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                        <a
                          href="popup/quickView.html"
                          className="btn-product btn-quickview"
                          title="Quick view"
                        >
                          <span>quick view</span>
                        </a>
                        <a
                          href="#"
                          className="btn-product btn-compare"
                          title="Compare"
                        >
                          <span>compare</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">
                          Black soft RI weekend travel bag
                        </a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$68.00</div>
                      {/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "0%" }}
                          />
                          {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 0 Reviews )</span>
                      </div>
                      {/* End .rating-container */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-lg-4 col-xl-3 */}
              </div>
              {/* End .row */}
              <div className="load-more-container text-center">
                <a href="#" className="btn btn-outline-darker btn-load-more">
                  More Products <i className="icon-refresh" />
                </a>
              </div>
              {/* End .load-more-container */}
            </div>
            {/* End .products */}
            <div className="sidebar-filter-overlay" />
            {/* End .sidebar-filter-overlay */}
            <aside className="sidebar-shop sidebar-filter">
              <div className="sidebar-filter-wrapper">
                <div className="widget widget-clean">
                  <label>
                    <i className="icon-close" />
                    Filters
                  </label>
                  <a href="#" className="sidebar-filter-clear">
                    Clean All
                  </a>
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-1"
                    >
                      Category
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-1">
                    <div className="widget-body">
                      <div className="filter-items filter-items-count">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-1"
                            >
                              Dresses
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">3</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-2"
                            >
                              T-shirts
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-3"
                            >
                              Bags
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">4</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-4"
                            >
                              Jackets
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">2</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-5"
                            >
                              Shoes
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">2</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-6"
                            >
                              Jumpers
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">1</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-7"
                            >
                              Jeans
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">1</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-8"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-8"
                            >
                              Sportwear
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .filter-items */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-2"
                    >
                      Size
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-2">
                    <div className="widget-body">
                      <div className="filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-1"
                            >
                              XS
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-2"
                            >
                              S
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              defaultChecked=""
                              id="size-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-3"
                            >
                              M
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              defaultChecked=""
                              id="size-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-4"
                            >
                              L
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-5"
                            >
                              XL
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-6"
                            >
                              XXL
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .filter-items */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-3"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-3"
                    >
                      Colour
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-3">
                    <div className="widget-body">
                      <div className="filter-colors">
                        <a href="#" style={{ background: "#b87145" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#f0c04a" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a
                          href="#"
                          className="selected"
                          style={{ background: "#cc3333" }}
                        >
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#3399cc" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#669933" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#f2719c" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#ebebeb" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                      </div>
                      {/* End .filter-colors */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-4"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-4"
                    >
                      Brand
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-4">
                    <div className="widget-body">
                      <div className="filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-1"
                            >
                              Next
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-2"
                            >
                              River Island
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-3"
                            >
                              Geox
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-4"
                            >
                              New Balance
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-5"
                            >
                              UGG
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-6"
                            >
                              F&amp;F
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-7"
                            >
                              Nike
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .filter-items */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-5"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-5"
                    >
                      Price
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-5">
                    <div className="widget-body">
                      <div className="filter-price">
                        <div className="filter-price-text">
                          Price Range:
                          <span id="filter-price-range" />
                        </div>
                        {/* End .filter-price-text */}
                        <div id="price-slider" />
                        {/* End #price-slider */}
                      </div>
                      {/* End .filter-price */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .sidebar-filter-wrapper */}
            </aside>
            {/* End .sidebar-filter */}
          </div>
          {/* End .container */}
        </div>
        {/* End .page-content */}
      </main>
      {/* End .main */}
    
   
    </div>
    {/* End .page-wrapper */}
    <button id="scroll-top" title="Back to Top">
      <i className="icon-arrow-up" />
    </button>
    {/* Mobile Menu */}
    <div className="mobile-menu-overlay" />
    {/* End .mobil-menu-overlay */}
    <div className="mobile-menu-container">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close">
          <i className="icon-close" />
        </span>
        <form action="#" method="get" className="mobile-search">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            name="mobile-search"
            id="mobile-search"
            placeholder="Search in..."
            required=""
          />
          <button className="btn btn-primary" type="submit">
            <i className="icon-search" />
          </button>
        </form>
        <nav className="mobile-nav">
          <ul className="mobile-menu">
         
         
        
    
          </ul>
        </nav>
        {/* End .mobile-nav */}
        <div className="social-icons">
          <a href="#" className="social-icon" target="_blank" title="Facebook">
            <i className="icon-facebook-f" />
          </a>
          <a href="#" className="social-icon" target="_blank" title="Twitter">
            <i className="icon-twitter" />
          </a>
          <a href="#" className="social-icon" target="_blank" title="Instagram">
            <i className="icon-instagram" />
          </a>
          <a href="#" className="social-icon" target="_blank" title="Youtube">
            <i className="icon-youtube" />
          </a>
        </div>
        {/* End .social-icons */}
      </div>
      {/* End .mobile-menu-wrapper */}
    </div>
    {/* End .mobile-menu-container */}
    {/* Sign in / Register Modal */}
    <div
      className="modal fade"
      id="signin-modal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="icon-close" />
              </span>
            </button>
            <div className="form-box">
              <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signin-tab"
                      data-toggle="tab"
                      href="#signin"
                      role="tab"
                      aria-controls="signin"
                      aria-selected="true"
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="register-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  <div
                    className="tab-pane fade show active"
                    id="signin"
                    role="tabpanel"
                    aria-labelledby="signin-tab"
                  >
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="singin-email">
                          Username or email address *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="singin-email"
                          name="singin-email"
                          required=""
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="form-group">
                        <label htmlFor="singin-password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="singin-password"
                          name="singin-password"
                          required=""
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>LOG IN</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="signin-remember"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="signin-remember"
                          >
                            Remember Me
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                        <a href="#" className="forgot-link">
                          Forgot Your Password?
                        </a>
                      </div>
                      {/* End .form-footer */}
                    </form>
                    <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                          </a>
                        </div>
                        {/* End .col-6 */}
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                          </a>
                        </div>
                        {/* End .col-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .form-choice */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane fade"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                  >
                    <form action="#">
                      <div className="form-group">
                        <label htmlFor="register-email">
                          Your email address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          name="register-email"
                          required=""
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="form-group">
                        <label htmlFor="register-password">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password"
                          name="register-password"
                          required=""
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SIGN UP</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy"
                            required=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy"
                          >
                            I agree to the <a href="#">privacy policy</a> *
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                      </div>
                      {/* End .form-footer */}
                    </form>
                    <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google" />
                            Login With Google
                          </a>
                        </div>
                        {/* End .col-6 */}
                        <div className="col-sm-6">
                          <a href="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f" />
                            Login With Facebook
                          </a>
                        </div>
                        {/* End .col-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .form-choice */}

                    
                  </div>
                  {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
              </div>
              {/* End .form-tab */}
            </div>
            {/* End .form-box */}
          </div>
          {/* End .modal-body */}
        </div>
        {/* End .modal-content */}
      </div>
      {/* End .modal-dialog */}
    </div>
    {/* End .modal */}
    {/* Plugins JS File */}
    {/* Main JS File */}
    {/* molla/category-boxed.html  22 Nov 2019 10:03:02 GMT */}
  </>
)

export default CategorySinglePage ; 
