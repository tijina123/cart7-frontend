import { useEffect, useRef, useState } from 'react';
import $ from "jquery";  // Import jQuery
import "owl.carousel/dist/assets/owl.carousel.css";  // Owl Carousel CSS
import "owl.carousel";  // Owl Carousel JS
import ProductCarousel from './ProductCarousel';
import UserService from "../../services/user-api-services/UserService";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; 



const Home = () => {
  const { getHomeProductsByCategory, getHomeProducts } = UserService()

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [bannerImage, setBannerImage] = useState([]);


  useEffect(() => {
    getProductsByCategory();
    getProducts();
    const ref = scrollRef.current;
    ref.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => ref.removeEventListener('scroll', checkScroll);
  }, []);

  const getProductsByCategory = async () => {
    try {
      const response = await getHomeProductsByCategory();
      console.log(response, "============response?.productsByCategory 1");
      console.log(response?.productsByCategory, "============response?.productsByCategory 2");

      setAllProducts(response?.productsByCategory);

    } catch (error) {

    }

  }
  const getProducts = async () => {
    try {
      const response = await getHomeProducts();
      response?.products?.reverse()
      setProducts(response?.products);

    } catch (error) {

    }
  }

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };
  
  
    const categories = [
      { name: 'Computer & Laptop', icon: 'bi-laptop', image: 'laptop.jpg' },
      { name: 'Lighting', icon: 'bi-lightbulb', image: 'lighting.jpg' },
      { name: 'Smart Phones', icon: 'bi-phone', image: 'smartphone.jpg' },
      { name: 'Televisions', icon: 'bi-tv', image: 'television.jpg' },
      { name: 'Cooking', icon: 'bi-egg-fried', image: 'cooking.jpg' },
      { name: 'Furniture', icon: 'bi-house', image: 'furniture.jpg' },
      { name: 'Speakers', icon: 'bi-speaker', image: 'speakers.jpg' },
      { name: 'Watches', icon: 'bi-watch', image: 'watch.jpg' },
      { name: 'Accessories', icon: 'bi-gem', image: 'accessories.jpg' },
      { name: 'Gaming', icon: 'bi-controller', image: 'gaming.jpg' },
      { name: 'Cameras', icon: 'bi-camera', image: 'camera.jpg' },
      { name: 'Home Appliances', icon: 'bi-house-gear', image: 'appliances.jpg' },
      { name: 'Fitness', icon: 'bi-heart-pulse', image: 'fitness.jpg' },
      { name: 'Printers', icon: 'bi-printer', image: 'printer.jpg' },
      { name: 'Drones', icon: 'bi-airplane', image: 'drone.jpg' },
    ];


  return (
    <div className="page-wrapper">
      <main className="main">
        <div className="intro-slider-container" >
          <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options="{
                  &quot;nav&quot;: false,
                  &quot;responsive&quot;: {
                      &quot;992&quot;: {
                          &quot;nav&quot;: true
                      }
                  }
              }">
            <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-13/slider/slider-1.png)'}}>
              <div className="container intro-content">
                <div className="row">
                  <div className="col-auto offset-lg-3 intro-col">
                    {/* <h3 className="intro-subtitle">Trade-In Offer</h3>
                    <h1 className="intro-title">MacBook Air <br />Latest Model
                      <span>
                        <sup className="font-weight-light">from</sup>
                        <span className="text-primary">$999<sup>,99</sup></span>
                      </span>
                    </h1> */}
                    {/* <a href="category.html" className="btn btn-outline-primary-2">
                      <span>Shop Now</span>
                      <i className="icon-long-arrow-right" />
                    </a> */}
                  </div>{/* End .col-auto offset-lg-3 */}
                </div>{/* End .row */}
              </div>{/* End .container intro-content */}
            </div>{/* End .intro-slide */}
            <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-13/slider/slider-2.png)', objectFit: 'contain' }}>
              <div className="container intro-content">
                <div className="row">
                  <div className="col-auto offset-lg-3 intro-col">
                   
                  </div>{/* End .col-auto offset-lg-3 */}
                </div>{/* End .row */}
              </div>{/* End .container intro-content */}
            </div>{/* End .intro-slide */}
            <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-13/slider/slider-3.png)', objectFit: 'contain' }}>
              <div className="container intro-content">
                <div className="row">
                  <div className="col-auto offset-lg-3 intro-col">
                   
                  </div>{/* End .col-auto offset-lg-3 */}
                </div>{/* End .row */}
              </div>{/* End .container intro-content */}
            </div>{/* End .intro-slide */}
          </div>{/* End .owl-carousel owl-simple */}
          <span className="slider-loader" />{/* End .slider-loader */}
        </div>{/* End .intro-slider-container */}
        <div className="mb-4" />{/* End .mb-2 */}
        <div className="container">
          <h2 className="title text-center mb-2">Explore Popular Categories</h2>{/* End .title */}
          <div className="container-fluid py-3 position-relative">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        onKeyDown={(e) => e.key === 'Enter' && scrollLeft()}
        tabIndex="0"
        aria-label="Scroll left"
        disabled={!canScrollLeft}
        style={{
          position: 'absolute',
          left: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
          cursor: canScrollLeft ? 'pointer' : 'not-allowed',
          opacity: canScrollLeft ? 1 : 0.5,
          transition: 'all 0.3s ease',
          zIndex: 9999,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        <i className="bi bi-chevron-left" style={{ fontSize: '18px' }}></i>
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        onKeyDown={(e) => e.key === 'Enter' && scrollRight()}
        tabIndex="0"
        aria-label="Scroll right"
        disabled={!canScrollRight}
        style={{
          position: 'absolute',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
          cursor: canScrollRight ? 'pointer' : 'not-allowed',
          opacity: canScrollRight ? 1 : 0.5,
          transition: 'all 0.3s ease',
          zIndex: 9999,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        <i className="bi bi-chevron-right" style={{ fontSize: '18px' }}></i>
      </button>

      {/* Scrollable Category Row */}
      <div
        className="d-flex overflow-auto"
        ref={scrollRef}
        style={{
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
        }}
      >
        {categories.map((category, index) => (
          <div
            className="flex-shrink-0 text-center px-2"
            style={{ width: '180px' }}
            key={index}
          >
            <Link to="/" className="d-block text-decoration-none text-dark">
              {/* <figure className="mb-2">
                <img
                  src={`assets/images/demos/demo-13/cats/${category.image}`}
                  alt={category.name}
                  className="img-fluid rounded"
                />
              </figure> */}
              <h6 className="mb-0 d-flex align-items-center justify-content-center" style={{ fontSize: '14px' }}>
        <i className={`bi ${category.icon} me-1`} style={{ fontSize: '24px' }}></i> 
        {category.name}
      </h6>
            </Link>
          </div>
        ))}
      </div>
    </div>


          {/* End .cat-blocks-container */}
        </div>{/* End .container */}
        <div className="mb-2" />{/* End .mb-2 */}
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="banner banner-overlay">
                <a >
                  <img src="assets/images/demos/demo-13/banners/banner-1.png" alt="Banner" />
                </a>
                <div className="banner-content">
                  {/* <h4 className="banner-subtitle text-white"><a >Weekend Sale</a></h4> */}
                  {/* <h3 className="banner-title text-white"><a >Lighting <br />&amp; Accessories <br /><span>25% off</span></a></h3>End .banner-title */}
                  {/* <a  className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a> */}
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-lg-3 */}
            <div className="col-sm-6 col-lg-3 order-lg-last">
              <div className="banner banner-overlay">
                <a >
                  <img src="assets/images/demos/demo-13/banners/banner-3.png" alt="Banner" />
                </a>
                <div className="banner-content">
                  {/* <h4 className="banner-subtitle text-white"><a >Smart Offer</a></h4> */}
                  {/* <h3 className="banner-title text-white"><a >Anniversary <br />Special <br /><span>15% off</span></a></h3>End .banner-title */}
                  {/* <a  className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a> */}
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-lg-3 */}
            <div className="col-lg-6">
              <div className="banner banner-overlay">
                <a >
                  <img src="assets/images/demos/demo-13/banners/banner-2.png" alt="Banner" />
                </a>
                <div className="banner-content">
                  {/* <h4 className="banner-subtitle text-white d-none d-sm-block"><a >Amazing Value</a></h4> */}
                  {/* <h3 className="banner-title text-white"><a >Clothes Trending <br />Spring Collection 2019 <br /><span>from ₹12,99</span></a></h3> */}
                  {/* <a  className="banner-link">Discover Now <i className="icon-long-arrow-right" /></a> */}
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .container */}
        <div className="mb-3 filter-products" />{/* End .mb-3 */}
        <div className="bg-light pt-3 pb-5 " >

          {/* ****************** show products ****************** */}
          <div className="container" >
            <div className="heading heading-flex heading-border mb-3">
              <div className="heading-left">
                <h2 className="title">All products</h2>{/* End .title */}
              </div>{/* End .heading-left */}
              <div className="heading-right">
                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="hot-all-link" data-toggle="tab" href="#hot-all-tab" role="tab" aria-controls="hot-all-tab" aria-selected="true">All</a>
                  </li>
                </ul>
              </div>{/* End .heading-right */}
            </div>{/* End .heading */}
            <div className="tab-content tab-content-carousel">
              <div className="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-all-link">
                <ProductCarousel products={products} />
              </div>{/* .End .tab-pane */}

            </div>{/* End .tab-content */}
          </div>

          {/* ****************** show products by category ****************** */}

          {allProducts?.map((products) => {

          if(products.products.length > 0){

           return <div className={`container ${products.name}`} key={products._id}>
              <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                  <h2 className="title">{products.name}</h2>{/* End .title */}
                </div>{/* End .heading-left */}
                <div className="heading-right">
                  <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="hot-all-link" data-toggle="tab" href="#hot-all-tab" role="tab" aria-controls="hot-all-tab" aria-selected="true">All</a>
                    </li>
                  </ul>
                </div>{/* End .heading-right */}
              </div>{/* End .heading */}
              <div className="tab-content tab-content-carousel">
                <div className="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-all-link">
                  <ProductCarousel products={products.products} />
                </div>{/* .End .tab-pane */}

              </div>{/* End .tab-content */}
            </div>

}})}





        </div>{/* End .bg-light pt-5 pb-5 */}
        <div className="mb-3" />{/* End .mb-3 */}

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner banner-overlay banner-overlay-light">
                <a >
                  <img src="assets/images/demos/demo-13/banners/banner-4.png" alt="Banner" />
                </a>
                <div className="banner-content">
                  {/* <h4 className="banner-subtitle d-none d-sm-block"><a >Spring Sale is Coming</a></h4> */}
                  {/* <h3 className="banner-title"><a >All Smart Watches <br />Discount  <br /><span className="text-primary">15% off</span></a></h3> */}
                  {/* <a  className="banner-link banner-link-dark">Discover Now <i className="icon-long-arrow-right" /></a> */}
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-lg-6 */}
            <div className="col-lg-6">
              <div className="banner banner-overlay">
                <a >
                  <img src="assets/images/demos/demo-13/banners/banner-5.png" alt="Banner" />
                </a>
                <div className="banner-content">
                  {/* <h4 className="banner-subtitle text-white  d-none d-sm-block"><a >Amazing Value</a></h4> */}
                  {/* <h3 className="banner-title text-white"><a >Headphones Trending <br />JBL Harman <br /><span>from ₹59,99</span></a></h3> */}
                  {/* <a  className="banner-link">Discover Now <i className="icon-long-arrow-right" /></a> */}
                </div>{/* End .banner-content */}
              </div>{/* End .banner */}
            </div>{/* End .col-lg-6 */}
          </div>{/* End .row */}
        </div>{/* End .container */}

        <div className="mb-1" />{/* End .mb-1 */}

        <div className="mb-3" />{/* End .mb-3 */}
        {/* *********************** */}

        <div className="mb-3" />{/* End .mb-3 */}
       

        
      </main>
    </div>
  )
}

export default Home