


import { useEffect, useState } from "react";
import axios from "axios";



export const CategorySinglePage = () => (



  
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
    

  </>
);

export default CategorySinglePage;
