import React from 'react';

const UserFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-sm-12 col-lg-4">
              <div className="widget widget-about">
                <img
                  src="assets/images/logo (3).png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width={120}
                  height={30}
                />
                <p>
                  Your go-to destination for quality products and amazing deals. 
                  Shop with confidence and ease.
                </p>
                <p><strong>Call Us:</strong> <a href="tel:+123456789">+1 234 567 89</a></p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Quick Links</h4>
                <ul className="widget-list">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Customer Service */}
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-list">
                  <li><a href="/shipping">Shipping Info</a></li>
                  <li><a href="/returns">Returns</a></li>
                  <li><a href="/support">Support</a></li>
                </ul>
              </div>
            </div>

            {/* My Account */}
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="widget-list">
                  <li><a href="/login">Sign In</a></li>
                  <li><a href="/cart">My Cart</a></li>
                  <li><a href="/orders">Order History</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0">© {new Date().getFullYear()} Cart7. All rights reserved.</p>
          <ul className="footer-menu d-flex gap-3 list-unstyled mb-0">
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
          <div className="social-icons">
            <a href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f" /></a>
            <a href="#" className="social-icon" title="Instagram"><i className="icon-instagram" /></a>
            <a href="#" className="social-icon" title="Twitter"><i className="icon-twitter" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
