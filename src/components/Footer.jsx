import React from "react";
import { NavLink } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import FooterLogo from "../assets/images/footer-logo.svg";

function Footer() {
  return (
    <footer className="bg-green pt-5">
      <div className="container">
        <div className="row justify-content-between pb-5">
          <div className="col-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-white fw-bold text-capitalize mb-4">
              About finanzfaible
            </h5>
            <p className="p-heading text-white">
              We are in the business of transformation, known for our focus on
              and commitment to achieving results. We combine strategy.
            </p>
          </div>
          <div className="col-6 col-md-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-white fw-bold text-capitalize mb-4">
              Quick Links
            </h5>
            <ul class="list-unstyled">
              <li className="text-white mb-2">
                <NavLink to="/">counsellor</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">calculator</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">Financial Services</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">News & Press</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-white fw-bold text-capitalize mb-4">
              Services
            </h5>
            <ul class="list-unstyled">
              <li className="text-white mb-2">
                <NavLink to="/">Saving & investing</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">Account and Cards</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">Credit & Financing</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">Insurance</NavLink>
              </li>
              <li className="text-white mb-2">
                <NavLink to="/">Real Estate & Property</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-3 mb-4 mb-lg-0">
            <h5 className="text-white fw-bold text-capitalize mb-4">
              Find us at
            </h5>
            <ul class="list-unstyled footer-list">
              <li className="text-white mb-3 d-flex">
                <HiLocationMarker />
                <NavLink to="/">
                  <span>
                    {" "}
                    Urhan Energy sole proprietorship Diefenbacher Strasse 10
                    75433 Maulbronn
                  </span>
                </NavLink>
              </li>
              <li className="text-white mb-3 text-decoration-underline d-flex">
                <IoMdCall />
                <NavLink to="/">+49 (0) 1575 2235967</NavLink>
              </li>
              <li className="text-white mb-3 text-decoration-underline d-flex">
                <MdEmail />
                <NavLink to="/">mailto:mo@finanzfaible.de</NavLink>
              </li>
            </ul>
            <div className="social-icon mt-4 d-flex">
              <NavLink to="#">
                <AiOutlineWhatsApp />
              </NavLink>
              <NavLink to="#">
                <AiFillInstagram />
              </NavLink>
              <NavLink to="#">
                <FaFacebookF />
              </NavLink>
              <NavLink to="#">
                <AiOutlineTwitter />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bottom-footer d-flex align-items-center justify-content-between flex-wrap">
          <div>
            <img src={FooterLogo} alt="logo" />
          </div>
          <div>
            <p className="mb-0">@ Copyright Finanzfaible 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
