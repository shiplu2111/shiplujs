
import React from "react";
import Link from "next/link";
import Counter from "./Counter";
import Image from "next/image";
import { getWebsiteSetting, getAllModules } from "@/lib/settingApi";
import { getHero, getCounter } from "@/lib/aboutApi";
const Hero = async () => {
  const setting = await getWebsiteSetting();
  const heroData = await getHero();
  const counterData = await getCounter();
  const module_data = await getAllModules();

  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">
                {heroData ? heroData.title : "Hello, i’m "}
              </span>
              <h1>
                <b>
                  {heroData?.name ? heroData.name : "Shiplu JS"}
                </b>
                <br />
                {heroData ? heroData.designation : "A Full Stack Developer"}
              </h1>
              <p>
                {heroData ? heroData.description : "I am a full stack developer with 13 years of experience in web development. I specialize in creating dynamic and responsive web applications using the latest technologies."}

              </p>
              <div className="hero-btns">
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    {heroData ? heroData.button_text : "Hire Mes"} <i className="far fa-angle-right" />
                  </a>
                </Link>
                {setting?.resume && module_data?.resume_download ? (
                  <a
                    href={setting.resume}
                    download
                    className="read-more text-blue-600 hover:underline"
                    target="_blank" // optional, opens in new tab if needed
                    rel="noopener noreferrer"
                  >
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                ) : null}

              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-lg-3">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData?.map((count, index) => (
                <div className="counter-item counter-text-wrap" key={index}>
                  <Counter end={count.value} extraClass={count.valueType} /> <span className="count-text">{count.value_type}</span>
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              {/* <img src="assets/images/hero/me.png" alt="Author" /> */}
              {heroData?.image && (
                <Image
                  src={heroData.image}
                  alt="Author"
                  width={500}
                  height={500}
                  loading="lazy"
                />

              )}

              {/* <img src={heroData?.image || "assets/images/hero/me.jpg"} alt="Author" /> */}

              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"
                />
              </div>
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
};
export default Hero;
