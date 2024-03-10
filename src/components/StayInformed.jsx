import React from "react";
import { Button, Form } from "react-bootstrap";

const StayInformed = () => {
  return (
    <section className="news-letter bg-light-green">
      <div className="container">
        <div className="row align-items-center justify-content-center py-5">
          <div className="col-lg-10">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4">
                <h2 className="sub-heading text-green">
                  <span className="text-dark-green d-md-block">
                    free newsletter-
                  </span>
                  stay informed!
                </h2>
              </div>
              <div className="col-md-8 col-lg-6 d-flex align-items-center budget-reminder">
                <div className="row w-100">
                  <div className="col-md-8 mt-md-0 mt-4">
                    <Form.Control type="email" placeholder="Email address" />
                  </div>
                  <div className="col-md-4">
                    <Button className="btn-100 mt-3 mt-md-0 bg-green px-5 text-white border-0 fw-bold news-letter-btn">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayInformed;
