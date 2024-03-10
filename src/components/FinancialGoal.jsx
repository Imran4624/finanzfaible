import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FinancialGoal = () => {
  const [isActiveGoal, setIsActiveGoal] = useState(false);

  const handleClick = () => {
    setIsActiveGoal(!isActiveGoal);
  };
  return (
    <section className="financial-goal pt-5 pb-5 bg-light-green border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 col-xl-5">
            <h3 className="body-heading text-center">
              what's your biggest financial goal at the moment?
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mt-4 ">
          <div className="col-12 col-md-10 col-lg-7 col-xl-5 bg-white p-4 radius-18">
            <Form>
              <div className="mb-3">
                <div
                  className={
                    isActiveGoal
                      ? "active-goal checkbox-main d-flex align-items-center justify-content-between"
                      : "checkbox-main d-flex align-items-center justify-content-between"
                  }
                >
                  <Form.Check
                    label="get an overview of my budget "
                    name="group1"
                    type="radio"
                    id="1"
                    onClick={handleClick}
                  />
                  <div>
                    <span>88%</span>
                  </div>
                </div>
                <div className="checkbox-main d-flex align-items-center justify-content-between">
                  <Form.Check
                    label="find optimizations in my budget "
                    name="group1"
                    type="radio"
                    id="2"
                    onClick={handleClick}
                  />
                  <div>
                    <span>13%</span>
                  </div>
                </div>
                <div className="checkbox-main d-flex align-items-center justify-content-between">
                  <Form.Check
                    label="find ways to save more money"
                    name="group1"
                    type="radio"
                    id="3"
                    onClick={handleClick}
                  />
                  <div>
                    <span>0%</span>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialGoal;
