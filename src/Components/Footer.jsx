import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footerstart">
        <div className="footerPartOne">
          <div className="footerDetalis">
            <div className="footerDetalisOne">
              <div className="Aboutus">About Us</div>
              <div className="AboutusDetalis">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </div>

              <div className="AboutusIcons">
                <div className="AboutusSubDetalis">
                  <FaLocationDot className="footerIcon" />
                  <span>1734 Stonecoal Road</span>
                </div>
                <div className="AboutusSubDetalis">
                  <FaPhone className="footerIcon" />
                  <span>+022-95-51-84</span>
                </div>
                <div className="AboutusSubDetalis">
                  <MdEmail className="footerIcon" />
                  <span>email@email.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footerDetalis">
            <div className="footerDetalisOnther">
              <div className="Aboutus">Categories</div>
              <div className="AboutusDetalis">
                <div className="AboutusSubDetalisSecound">Hot deals</div>
                <div className="AboutusSubDetalisSecound">New products</div>
                <div className="AboutusSubDetalisSecound">Laptops</div>
                <div className="AboutusSubDetalisSecound">Smartphones</div>
                <div className="AboutusSubDetalisSecound">Accessories</div>
              </div>
            </div>
          </div>

          <div className="footerDetalis">
            <div className="footerDetalisOnther">
              <div className="Aboutus">Information</div>
              <div className="AboutusDetalis">
                <div className="AboutusSubDetalisSecound">About Us</div>
                <div className="AboutusSubDetalisSecound">Contact Us</div>
                <div className="AboutusSubDetalisSecound">Privacy Policy</div>
                <div className="AboutusSubDetalisSecound">
                  Orders and Returns
                </div>
                <div className="AboutusSubDetalisSecound">
                  Terms & Conditions
                </div>
              </div>
            </div>
          </div>

          <div className="footerDetalis">
            <div className="footerDetalisOnther">
              <div className="Aboutus">Service</div>
              <div className="AboutusDetalis">
                <div className="AboutusSubDetalisSecound">My Account</div>
                <div className="AboutusSubDetalisSecound">View Cart</div>
                <div className="AboutusSubDetalisSecound">Wishlist</div>
                <div className="AboutusSubDetalisSecound">Track My Order</div>
                <div className="AboutusSubDetalisSecound">Help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerOnther">
        <div>
          <img src="https://themewagon.github.io/electro/img/logo.png" />
        </div>
        <div className="footerSubIcons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaGooglePlusG />
        </div>
        <div className="copyright">
          Copyright ©2024 All rights reserved | This template is made with by
          Electro...
        </div>
      </div>
    </>
  );
}

export default Footer;
