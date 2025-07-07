import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { getAllModules, getModulesText, getWebsiteSetting } from "@/lib/settingApi";
import { getHero } from "@/lib/aboutApi";
import { getTestimonials } from "@/lib/projectApi"
export default async function Home() {
  const modules = await getAllModules();
  const module_text = await getModulesText();
  const setting = await getWebsiteSetting();
  const hero = await getHero();
  const testimonials = await getTestimonials();

  console.log(modules)

  return (
    <NoxfolioLayout>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}
      <About module_text={module_text} setting={setting} hero={hero} />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume module_text={module_text} />
      {/* Resume Area end */}
      {/* Services Area start */}
      <Services module_text={module_text} modules={modules} />
      {/* Services Area end */}
      {/* Skill Area start */}
      <Skill module_text={module_text} modules={modules} />
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects modules={modules} />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial testimonials={testimonials} module_text={module_text} modules={modules} />
      {/* Testimonial Area end */}
      {/* Pricing Area start */}
      <Pricing module_text={module_text} modules={modules} />
      {/* Pricing Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}
      {/* Client Log start */}
      <Clients />
      {/* Client Log end */}
    </NoxfolioLayout>
  );
}
