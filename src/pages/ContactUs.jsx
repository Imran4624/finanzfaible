import React from "react";
import { Button, Card, Form, NavLink, Tab, Tabs } from "react-bootstrap";
import { IoIosArrowForward, IoMdCall } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Blog1 from "../assets/images/blog-img.png";
import Blog2 from "../assets/images/blog-img2.png";
import ClockIcon from "../assets/images/clock-icon.svg";
import CalendarIcon from "../assets/images/calendar-icon.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import StayInformed from "../components/StayInformed";
import Cookies from "../components/Cookies";

const ConatctUs = () => {
  return (
    <>
      <section className="banner-sec ">
        <div className="container">
          <h1 className="text-white text-center banner-text-dot">Contact Us</h1>
          <div className="d-flex align-items-center justify-content-center">
            <NavLink className="fs-5 text-white fw-600" to="#">
              Home
            </NavLink>
            <IoIosArrowForward fill="#fff" className="mx-1 mt-1" />
            <NavLink className="fs-5 text-white fw-600" to="#">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
      <section className="contact-us-sec py-4 py-md-5 mt-md-5 mb-md-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 col-lg-4">
              <h6 className="sub-heading fw-normal">Contact Info</h6>
              <ul class="list-unstyled ">
                <li className="text-white mb-3 d-flex">
                  <HiLocationMarker fill="#000" className="fs-4 me-2" />
                  <NavLink to="/">
                    <span className="text-black pe-md-5 d-block me-md-5 fs-14">
                      Urhan Energy sole proprietorship Diefenbacher Strasse 10
                      75433 Maulbronn
                    </span>
                  </NavLink>
                </li>
                <li className="text-white mb-3 d-flex">
                  <IoMdCall fill="#000" className="fs-4 me-2" />
                  <NavLink to="/">
                    <span className="text-black text-decoration-underline fs-14">
                      +49 (0) 1575 2235967
                    </span>
                  </NavLink>
                </li>
                <li className="text-white mb-3  d-flex">
                  <MdEmail fill="#000" className="fs-4 me-2" />
                  <NavLink to="/">
                    <span className="text-black text-decoration-underline fs-14">
                      mailto:mo@finanzfaible.de
                    </span>
                  </NavLink>
                </li>
              </ul>
              <h6 className="sub-heading fw-normal my-4">On The Map</h6>
              <div className="map-box">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      class="gmap_iframe"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 mt-md-0 mt-5">
              <h6 className="sub-heading fw-normal">Contact Us</h6>
              <Form>
                <div className="row ">
                  <div className="col-md-6 mb-3">
                    <Form.Group md="4">
                      <Form.Label className="text-black fw-500 text-capitalize">
                        NAME
                      </Form.Label>
                      <Form.Control required type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Form.Group md="4">
                      <Form.Label className="text-black fw-500 text-capitalize">
                        EMAIL
                      </Form.Label>
                      <Form.Control required type="email" />
                    </Form.Group>
                  </div>
                  <div className="col-md-12 mb-3">
                    <Form.Group md="4">
                      <Form.Label className="text-black fw-500 text-capitalize">
                        Subject
                      </Form.Label>
                      <Form.Control required type="text" />
                    </Form.Group>
                  </div>
                  <div className="col-md-12 mb-4">
                    <Form.Group md="4">
                      <Form.Label className="text-black fw-500 text-capitalize">
                        Message
                      </Form.Label>
                      <div class="form-floating">
                        <textarea rows={10} class="form-control"></textarea>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="col-md-3 mb-5">
                    <Button className="get-started-btn bg-green rounded-pill text-white px-5 border-0 py-2 fw-600 w-100">
                      Send
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <StayInformed />
      <Cookies />
    </>
  );
};

export default ConatctUs;
