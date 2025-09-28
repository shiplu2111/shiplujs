import Link from "next/link";
import HighlightKeyword from "./HighlightKeyword";
import { getContacts } from "@/lib/contactApi";
import ContactFormArea from "./ContactFormArea";
const Contact = async ({ module_text }) => {

  const contacts = await getContacts();

  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  <HighlightKeyword text={module_text.contact_title} keyword={module_text.contact_keyword} />

                </h2>
                <p>
                  {module_text?.contact_sub_title}
                </p>
              </div>

              <div className="info-box-item ">
                <i className="far fa-phone" />
                <div className="content">

                  <a href={`tel:${contacts?.phone}`}>{contacts?.phone}</a>
                </div>
              </div>

              <div className="info-box-item mt-2">
                <i className="far fa-envelope" />
                <div className="content">

                  <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
                </div>
              </div>

              <div className="info-box-item mt-2">
                <i className="far fa-map-marker" />
                <div className="content">

                  <a href="#">{contacts?.address} <br />
                    {contacts?.city}, {contacts?.district}-{contacts?.postal_code} <br />
                    {contacts?.country}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
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
  );
};
export default Contact;


