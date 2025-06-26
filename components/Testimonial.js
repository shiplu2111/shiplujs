"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
import HighlightKeyword from "./HighlightKeyword";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const { testimonials, modules, module_text } = this.props;
    if (!modules?.project) return null;
    console.log(module_text);
    return (
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      Clients Testimonials
                    </span>
                    <h2>
                      <HighlightKeyword text={module_text.testimonial_title} keyword={module_text.testimonial_keyword} />

                    </h2>
                    <p>
                      {module_text?.testimonial_sub_title}
                    </p>
                  </div>
                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  {testimonials?.map((testimonial, index) => (
                    <div className="testimonial-item wow fadeInUp delay-0-3s" key={index}>
                      <div
                        className="author"

                      >
                        <img
                          src={testimonial?.image || '/assets/images/testimonials/author1.png'}
                          alt="testimonial"
                          style={{
                            height: "80px",
                            width: "80px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        />

                    </div>
                    <div className="text">
                        {testimonial?.testimonial}
                    </div>
                    <div className="testi-des">
                        <h5>{testimonial?.name}</h5>
                        <span>{testimonial?.designation}</span>
                        <br />

                        <span style={{ fontSize: "18px" }}>{testimonial?.company}</span>

                    </div>
                  </div>
                  ))}

                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    );
  }
}
