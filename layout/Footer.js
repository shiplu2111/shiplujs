'use client';
import Link from "next/link";

const Footer = ({ setting, social }) => {

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src={setting?.logo} alt="Logo" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link legacyBehavior href="services">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services#pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="about#faqs">
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                <form action="#">
                  <label htmlFor="email-address">
                    <i className="far fa-envelope" />
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button>
                    Sign Up <i className="far fa-angle-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" /> {setting?.address} ,{setting?.district}-{setting?.postal_code} 
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <a href={`mailto:${setting?.email}`}>{setting?.email}</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <a href={`tel:${setting?.phone}`}>{setting?.phone}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  {/* Copyright @{date},{" "} */}
                  @ {" "}
                  <Link legacyBehavior href="/">
                    {setting?.site_name}
                  </Link>{" "}
                  {setting?.copyright}
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav  justify-content-center">
                {social?.map((item, index) => (

                    <li key={index}>
                      <a href={item?.link || "#"}>
                        {item?.name}
                      </a>
                    </li>


                ))}

              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <a href="#" className="scroll-top scroll-to-target d-inline-block">
            <span className="fas fa-angle-double-up" />
          </a>
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
      </div>
    </footer>
  );
};
export default Footer;
