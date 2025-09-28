import Link from "next/link";
import HighlightKeyword from "./HighlightKeyword";
import { getClients } from "@/lib/clientApi";
import Image from "next/image";


const Clients = async ({ extraClass, module_text, modules }) => {
  const clients = await getClients();
  if (!modules?.client) return <div style={{ marginBottom: "100px" }}></div>;
  return (
    <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h2 >
                <HighlightKeyword text={module_text.client_title} keyword={module_text.client_keyword} />
                {/* My <span>Special Service</span> For your Business Development */}
              </h2>
            </div>
          </div>
        </div>
        <div className="client-logo-wrap">
          {clients?.map((client, index) => (
            <Link
              key={client.id}
              href="/contact"
              className="client-logo-item wow fadeInUp"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <Image
                src={client.image}
                alt={`Client Logo ${index + 1}`}
                width={150}
                height={80}
                className="object-contain" />
            </Link>
          ))}


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
    </div>
  );
};
export default Clients;

export const Clients2 = () => {
  return (
    <div className="client-logo-area bgc-black rel z-1 pt-25 pb-60">
      <div className="container">
        <div className="client-logo-wrap style-two">
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-2s"
            href="contact"
          >
            <img
              src="assets/images/client-logos/client-logo-two1.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-3s"
            href="contact"
          >
            <img
              src="assets/images/client-logos/client-logo-two2.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-4s"
            href="contact"
          >
            <img
              src="assets/images/client-logos/client-logo-two3.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-5s"
            href="contact"
          >
            <img
              src="assets/images/client-logos/client-logo-two4.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-6s"
            href="contact"
          >
            <img
              src="assets/images/client-logos/client-logo-two5.png"
              alt="Client Logo"
            />
          </Link>
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
    </div>
  );
};
