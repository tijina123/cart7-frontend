import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../../services/user-api-services/UserService';
import useAuth from '../../hooks/useAuth'

const SubFooter = () => {
  const { postLogin , postRegister } = UserService()
  const { setAuth } = useAuth()


  const [singinFormData, setSinginFormData] = useState({
    email: "",
    password: "",
    role:"user"
  });
  const [registerFormData, setRegisterFormData] = useState({
    name:"",
    email: "",
    password: "",
    role:"user"
  });

  const handleChangeSingin = (e) => {

    setSinginFormData((prev)=>({
       ...prev,
         [e.target.name]: e.target.value 
    }))
  };

  const handleChangeRegister = (e) => {

    // setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
    setRegisterFormData((prev)=>({
       ...prev,
         [e.target.name]: e.target.value 
    }))
  };

  const handleSubmitSingin =async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted singinFormData:", singinFormData);
    try {

      const response = await postLogin(singinFormData)
      console.log("Form Data Submitted singinFormData:", response);

      if (response?.data?.success) {

                const accessToken = response?.data?.accessToken;
                const role = response?.data?.userData?.role;
                const image = response?.data?.userData?.image || "";
                const name = response?.data?.userData?.name || "";

              //localStorage.setItem("password", password)
              
                localStorage.setItem("accessToken", accessToken)
                localStorage.setItem("role", role)
                localStorage.setItem("profileImage", image)
                localStorage.setItem("name", name)

              setAuth({ accessToken, role, image, name })

              //   switch(role){
              //       case 'Super Admin':
              //           navigate("/super-admin")
              //           break
              //       case 'admin':
              //           navigate("/admin")
              //           break
              //       case 'Manager':
              //           navigate("/manager")
              //           break
              //       case 'user':
              //           navigate("/")
              //           break
              //   }
      }
    } catch (error) {
      
    }

  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:",registerFormData);
    try {
      const response = await postRegister(registerFormData)
      console.log(response);
      
      // if (response?.success) {
      // }
      
    } catch (error) {
      
    }
  };

  return (
    <>
      <div>
        <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
        {/* Mobile Menu */}
        <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
        <div className="mobile-menu-container mobile-menu-light">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close"><i className="icon-close" /></span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
              <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
            </form>
            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false"></a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">

                <nav className="mobile-cats-nav">
                  <ul className="mobile-cats-menu">
                    <li><Link className="mobile-cats-lead" to="/">Home</Link></li>
                    <li><Link className="mobile-cats-lead" to="/cart">Cart</Link></li>
                    <li><Link className="mobile-cats-lead" to="/wishlist">Wishlist</Link></li>

                  </ul>{/* End .mobile-cats-menu */}
                </nav>{/* End .mobile-cats-nav */}

                <nav className="mobile-nav">
                  <ul className="mobile-menu">
                    <li className="active">
                      <a href="index.html">Categories</a>
                      <ul>
                        <li><a href="index-1.html">01 - furniture store</a></li>
                        <li><a href="index-2.html">02 - furniture store</a></li>
                        <li><a href="index-3.html">03 - electronic store</a></li>
                        <li><a href="index-4.html">04 - electronic store</a></li>
                        <li><a href="index-5.html">05 - fashion store</a></li>
                        <li><a href="index-6.html">06 - fashion store</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="category.html">Shop</a>
                      <ul>
                        <li><a href="cart.html">Cart</a></li>
                        {/* <li><a href="checkout.html">Checkout</a></li> */}
                        <li><a href="wishlist.html">Wishlist</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="product.html" className="sf-with-ul">Best sellers</a>
                      <ul>
                        <li><a href="product.html">Default</a></li>
                        <li><a href="product-centered.html">Centered</a></li>
                        <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                        <li><a href="product-gallery.html">Gallery</a></li>
                        <li><a href="product-sticky.html">Sticky Info</a></li>
                        <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                        <li><a href="product-fullwidth.html">Full Width</a></li>
                        <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                      </ul>
                    </li>

                  </ul>
                </nav>{/* End .mobile-nav */}
              </div>{/* .End .tab-pane */}

            </div>{/* End .tab-content */}
            <div className="social-icons">
              <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
              <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
              <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
              <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
            </div>{/* End .social-icons */}
          </div>{/* End .mobile-menu-wrapper */}
        </div>{/* End .mobile-menu-container */}
        {/* Sign in / Register Modal */}
        <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"><i className="icon-close" /></span>
                </button>
                <div className="form-box">
                  <div className="form-tab">
                    <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="tab-content-5">
                      <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                        <form onSubmit={handleSubmitSingin} >
                          <div className="form-group">
                            <label htmlFor="singin-email">Your email address *</label>
                            <input type="email" className="form-control" onChange={handleChangeSingin} value={singinFormData.email} id="singin-email" name="email" required />
                          </div>{/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="singin-password">Password *</label>
                            <input type="password" className="form-control" onChange={handleChangeSingin} value={singinFormData.password} id="singin-password" name="password" required />
                          </div>{/* End .form-group */}
                          <div className="form-footer">
                            <button type="submit" className="btn btn-outline-primary-2">
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="signin-remember" />
                              <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                            </div>{/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">Forgot Your Password?</a>
                          </div>{/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          
                        </div>{/* End .form-choice */}
                      </div>{/* .End .tab-pane */}
                      <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <form onSubmit={handleSubmitRegister}>
                        <div className="form-group">
                            <label htmlFor="register-phone">Name *</label>
                            <input type="text" className="form-control" onChange={handleChangeRegister} value={registerFormData?.name} id="register-name" name="name" required />
                          </div>{/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-email">Your email address *</label>
                            <input type="email" className="form-control" onChange={handleChangeRegister} value={registerFormData?.email} id="register-email" name="email" required />
                          </div>{/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password">Password *</label>
                            <input type="password" className="form-control" onChange={handleChangeRegister} value={registerFormData?.password} id="register-password" name="password" required />
                          </div>{/* End .form-group */}
                          <div className="form-footer">
                            <button type="submit" className="btn btn-outline-primary-2">
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="register-policy" required />
                              {/* <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label> */}
                              <label className="custom-control-label" htmlFor="register-policy">I agree to the privacy policy *</label>
                            </div>{/* End .custom-checkbox */}
                          </div>{/* End .form-footer */}
                        </form>
                        
                      </div>{/* .End .tab-pane */}
                    </div>{/* End .tab-content */}
                  </div>{/* End .form-tab */}
                </div>{/* End .form-box */}
              </div>{/* End .modal-body */}
            </div>{/* End .modal-content */}
          </div>{/* End .modal-dialog */}
        </div>{/* End .modal */}

        {/* Plugins JS File */}
        {/* Main JS File */}
      </div>

    </>
  )
}

export default SubFooter