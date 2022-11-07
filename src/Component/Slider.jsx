import React from "react";
import "../Component/slider.css";

const Slider = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage:
          "url(https://templates.hibootstrap.com/fafo/default/assets/images/bg-1.jpg)",
        height: "auto",
      }}
    >
      <div
        style={{
          backgroundImage:
            "url(https://templates.hibootstrap.com/fafo/default/assets/images/header-leaf-bg.png)",
          height: "auto",
        }}
      >
        <div className="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row " style={{ height: "auto" }}>
                  <div className="col slider-col">
                    <div className="spacer ">
                      <p
                        className="tracking-in-expand-fwd"
                        style={{ fontSize: "59px", color: "white" }}
                      >
                        <strong>The Best Plcae to Satisfy Your Tummy</strong>
                      </p>
                      <h4
                        className="tracking-in-expand-fwd"
                        style={{ fontSize: "20px", color: "#fc0" }}
                      >
                        Special Mashroom Fry Pizza Only At
                      </h4>
                      <p style={{ fontSize: "20px", color: "white" }}>
                        <span>$10.99</span>
                      </p>
                      <button type="button" class="btn btn-danger">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="https://templates.hibootstrap.com/fafo/default/assets/images/header-carousel-3.png"
                      class="img-fluid shake-bl "
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row " style={{ height: "100vh" }}>
                  <div className="col slider-col">
                    <div className="spacer ">
                      <p
                        className="tracking-in-expand-fwd"
                        style={{ fontSize: "59px", color: "white" }}
                      >
                        <strong>We Ensure that You Will Be Satisfied</strong>
                      </p>
                      <h4
                        className="tracking-in-expand-fwd"
                        style={{ fontSize: "20px", color: "#fc0" }}
                      >
                        Double layer Garlic Burger
                      </h4>
                      <p style={{ fontSize: "20px", color: "white" }}>
                        <span>$10.99</span>
                      </p>
                      <button type="button" class="btn btn-danger">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="https://templates.hibootstrap.com/fafo/default/assets/images/header-carousel-1.png"
                      class="img-fluid shake-bl "
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row " style={{ height: "auto" }}>
                  <div className="col slider-col">
                    <div className="spacer ">
                      <p
                        className="tracking-in-expand-fwd"
                        style={{ fontSize: "59px", color: "white" }}
                      >
                        <strong>Our Pizza Never Disappointed You</strong>
                      </p>
                      <h4
                        className="tracking-in-expand-fwd"
                        style={{ fontSize: "20px", color: "#fc0" }}
                      >
                        Special Mashroom Fry Pizza Only At
                      </h4>
                      <p style={{ fontSize: "20px", color: "white" }}>
                        <span>$10.99</span>
                      </p>
                      <button type="button" class="btn btn-danger">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src="https://templates.hibootstrap.com/fafo/default/assets/images/header-carousel-2.png"
                      class="img-fluid shake-bl "
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              {/* <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span> */}
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              {/* <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span> */}
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
