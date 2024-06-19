import React from 'react';
import '../../resources/css/styleFooter.css'
import socialIcon1 from '../../resources/img/social-img1.png'
import socialIcon2 from '../../resources/img/social-img2.png'
import '../../resources/css/themify-icons.css'
import paymentIcon from'../../resources/img/1.png'

function Footer(props) {
  return (
    <div>
      {/* <footer classNameName="footer-area section_gap">
        <div classNameName="container">
          <div classNameName="row">
            <div classNameName="col-lg-2 col-md-6 single-footer-widget">
              <h4>Top Products</h4>
              <ul>
                <li><a href="#">Managed Website</a></li>
                <li><a href="#">Manage Reputation</a></li>
                <li><a href="#">Power Tools</a></li>
                <li><a href="#">Marketing Service</a></li>
              </ul>
            </div>
            <div classNameName="col-lg-2 col-md-6 single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Brand Assets</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div classNameName="col-lg-2 col-md-6 single-footer-widget">
              <h4>Features</h4>
              <ul>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Brand Assets</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div classNameName="col-lg-2 col-md-6 single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Experts</a></li>
                <li><a href="#">Agencies</a></li>
              </ul>
            </div>

          </div>
          
        </div>
      </footer> */}

      <footer className="off-white-bg2 pt-95 bdr-top pt-sm-55">
            <div className="footer-top">
                <div className="container">
                    <div className="row mb-60">
                         <div className="col-xl-7 col-lg-7 ml-auto mr-auto col-md-8">
                            <div className="news-desc text-center mb-30">
                                 <h3>Sign Up For Newsletters</h3>
                                 <p>Be the First to Know. Sign up for newsletter today</p>
                             </div>
                             <div className="newsletter-box">
                                 <form action="#">
                                      <input className="subscribe" placeholder="your email address" name="email" id="subscribe" type="text" />
                                      <button type="submit" className="submit">subscribe!</button>
                                 </form>
                             </div>
                         </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer mb-sm-40">
                                <h3 className="footer-title">Information</h3>
                                <div className="footer-content">
                                    <ul className="footer-list">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="contact.html">Terms & Conditions</a></li>
                                        <li><a href="login.html">FAQs</a></li>
                                        <li><a href="login.html">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer mb-sm-40">
                                <h3 className="footer-title">Customer Service</h3>
                                <div className="footer-content">
                                    <ul className="footer-list">
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Order History</a></li>
                                        <li><a href="wishlist.html">Wish List</a></li>
                                        <li><a href="#">Site Map</a></li>
                                        <li><a href="#">Gift Certificates</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer mb-sm-40">
                                <h3 className="footer-title">Extras</h3>
                                <div className="footer-content">
                                    <ul className="footer-list">
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">Gift Certificates</a></li>
                                        <li><a href="#">Affiliate</a></li>
                                        <li><a href="#">Specials</a></li>
                                        <li><a href="#">Site Map</a></li>      
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer mb-sm-40">
                                <h3 className="footer-title">My Account</h3>
                                <div className="footer-content">
                                    <ul className="footer-list">
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Order History</a></li>
                                        <li><a href="wishlist.html">Wish List</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer mb-sm-40">
                                <h3 className="footer-title">My Account</h3>
                                <div className="footer-content">
                                    <ul className="footer-list address-content">
                                        <li><i className="lnr lnr-map-marker"></i> Address: 169-C, Technohub, Dubai Silicon Oasis.</li>
                                        <li><i className="lnr lnr-envelope"></i><a href="#"> mail Us: Support@truemart.com </a></li>
                                        <li>
                                            <i className="lnr lnr-phone-handset"></i> Phone: (+800) 123 456 789)
                                        </li>
                                    </ul>
                                    <div className="payment mt-25 bdr-top pt-30">
                                        <a href="#"><img className="img" src={ paymentIcon } alt="payment-image" /></a>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle text-center">
                <div className="container">
                    <div className="footer-middle-content pt-20 pb-30">
                            <ul className="social-footer">
                                <li><a href="https://www.facebook.com/"><i className="ti-facebook"></i></a></li>
                                <li><a href="https://twitter.com/"><i className="ti-twitter-alt"></i></a></li>
                                <li><a href="https://github.com/"><i className="ti-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="ti-linkedin"></i></a></li>
                                <li><a href="#"><img src={socialIcon1 } alt="google play" /></a></li>
                                <li><a><img src={ socialIcon2 } alt="app store" /></a></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom pb-30">
                <div className="container">

                     <div className="copyright-text text-center">                    
                        <p>Copyright © 2018 <a target="_blank" href="#">Truemart</a> All Rights Reserved.</p>
                     </div>
                </div>
            </div>
        </footer>

    </div>
  );
}

export default Footer;