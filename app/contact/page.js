import ContactFormArea from "@/components/ContactFormArea";
import HighlightKeyword from "@/components/HighlightKeyword";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { getContacts } from "@/lib/contactApi";
import { getAllModules, getModulesText, getWebsiteSetting, getSocialLinks } from "@/lib/settingApi";

export const metadata = {
  title: "Contact",
};

const page = async () => {
  const contacts = await getContacts();
  const modules = await getAllModules();
  const module_text = await getModulesText();
  const setting = await getWebsiteSetting();
  const socialLinks = await getSocialLinks();

  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Contact Us"} />
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    <HighlightKeyword text={module_text.contact_title} keyword={module_text.contact_keyword} />

                  </h2>
                  <p>
                    {module_text?.contact_sub_title}
                  </p>
                </div>
                <h6>Contact Information</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt" /> {contacts?.address},
                      <br /> {contacts?.city}, {contacts?.district}-{contacts?.postal_code},
                      <br /> {contacts?.country}
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href={`callto:${contacts?.phone}`}>{contacts?.phone}</a>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  {socialLinks?.map((link) => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={`${link.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <ContactFormArea />
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
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
            {contacts?.map && (
            <iframe
                src={contacts?.map}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            )}

          </div>
        </div>
      </div>
    </NoxfolioLayout>
  );
};
export default page;
