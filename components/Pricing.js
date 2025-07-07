
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import HighlightKeyword from "./HighlightKeyword";
import { getPackages } from "@/lib/serviceApi";
import RichText from "./RichText";

const Pricing = async ({ extraClass, module_text, modules }) => {
  const packages = await getPackages();
  if (!modules?.priceing) return null;
  return (
    <section className={`pricing-area pt-130 rpt-100 rel z-1 ${extraClass}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Pricing Package</span>
              <h2>
                <HighlightKeyword text={module_text?.price_title} keyword={module_text?.price_keyword} />
              </h2>
              <p>
                {module_text?.price_sub_title}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {packages?.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
            <div className="pricing-item wow fadeInUp delay-0-2s">
              <div className="pricing-header">
                  <h4 className="title">{item?.title}</h4>
                <p className="save-percent">
                    {item?.sub_title}
                </p>
                  <span className="price"> {item?.price}</span> / {item?.duration}
              </div>
              <div className="pricing-details">
                  <RichText text={item?.description} />
                <ul>
                    {item?.service_include?.map((module, index) => (
                      <li key={index}>{module?.service}</li>
                    ))}
                    {item?.service_not_include && (<>
                      {item?.service_not_include?.map((module, index) => (
                        <li className="unable" key={index}>{module?.service}</li>
                      ))
                      }
                    </>)}
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Choose Package <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
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
    </section>
  );
};
export default Pricing;

// export const Pricing2 = () => {
//   return (
//     <section
//       id="pricing"
//       className="pricing-area-two bgc-black pt-140 rpt-100 rel z-1"
//     >
//       <div className="container">
//         <Tab.Container defaultActiveKey={"monthly"}>
//           <div className="row justify-content-center">
//             <div className="col-xl-12">
//               <div className="section-title text-center mb-25 wow fadeInUp delay-0-2s">
//                 <span className="sub-title mb-15">
//                   <i className="flaticon-asterisk-1" /> explore pricing plan
//                 </span>
//                 <h2>
//                   amazing <span>pricing</span> plan
//                 </h2>
//               </div>
//               <Nav as={"ul"} className="nav pricing-tab mb-60" role="tablist">
//                 <Nav.Item as={"li"}>
//                   <Nav.Link as={"button"} eventKey="monthly">
//                     Monthly
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item as={"li"}>
//                   <Nav.Link as={"button"} eventKey="yearly">
//                     Yearly
//                   </Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </div>
//           </div>
//           <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
//             <Tab.Pane className="tab-pane fade" eventKey="monthly">
//               <div className="row">
//                 <div className="col-xl-6">
//                   <div className="pricing-item style-two">
//                     <div className="row justify-content-between">
//                       <div className="col-sm-6">
//                         <div className="title">
//                           <div className="icon">
//                             <i className="far fa-check" />
//                           </div>
//                           <div className="content">
//                             <h4>Private plan</h4>
//                             <span className="save">Save 20%</span>
//                           </div>
//                         </div>
//                         <span className="price">29.</span>
//                         <div className="arrow">
//                           <img
//                             src="assets/images/icons/price-arrow.png"
//                             alt="Arrow"
//                           />
//                         </div>
//                         <Link legacyBehavior href="/contact">
//                           <a className="theme-btn">Get started</a>
//                         </Link>
//                       </div>
//                       <div className="col-sm-6">
//                         <ul className="list">
//                           <li>
//                             All Financial Tasks <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Economic Market Survey{" "}
//                             <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Sales Operations <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Auto Intelligence <i className="far fa-check" />
//                           </li>
//                           <li>
//                             24/7 Support <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Financila Technology Se{" "}
//                             <i className="far fa-check" />
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-6">
//                   <div className="pricing-item style-two">
//                     <div className="row justify-content-between">
//                       <div className="col-sm-6">
//                         <div className="title">
//                           <div className="icon">
//                             <i className="far fa-check" />
//                           </div>
//                           <div className="content">
//                             <h4>Private plan</h4>
//                             <span className="save">Save 20%</span>
//                           </div>
//                         </div>
//                         <span className="price">29.</span>
//                         <div className="arrow">
//                           <img
//                             src="assets/images/icons/price-arrow.png"
//                             alt="Arrow"
//                           />
//                         </div>
//                         <Link legacyBehavior href="/contact">
//                           <a className="theme-btn">Get started</a>
//                         </Link>
//                       </div>
//                       <div className="col-sm-6">
//                         <ul className="list">
//                           <li>
//                             All Financial Tasks <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Economic Market Survey{" "}
//                             <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Sales Operations <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Auto Intelligence <i className="far fa-check" />
//                           </li>
//                           <li>
//                             24/7 Support <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Financila Technology Se{" "}
//                             <i className="far fa-check" />
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Tab.Pane>
//             <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
//               <div className="row">
//                 <div className="col-xl-6">
//                   <div className="pricing-item style-two wow fadeInUp delay-0-2s">
//                     <div className="row justify-content-between">
//                       <div className="col-sm-6">
//                         <div className="title">
//                           <div className="icon">
//                             <i className="far fa-check" />
//                           </div>
//                           <div className="content">
//                             <h4>Private plan</h4>
//                             <span className="save">Save 20%</span>
//                           </div>
//                         </div>
//                         <span className="price">29.</span>
//                         <div className="arrow">
//                           <img
//                             src="assets/images/icons/price-arrow.png"
//                             alt="Arrow"
//                           />
//                         </div>
//                         <Link legacyBehavior href="/contact">
//                           <a className="theme-btn">Get started</a>
//                         </Link>
//                       </div>
//                       <div className="col-sm-6">
//                         <ul className="list">
//                           <li>
//                             All Financial Tasks <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Economic Market Survey{" "}
//                             <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Sales Operations <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Auto Intelligence <i className="far fa-check" />
//                           </li>
//                           <li>
//                             24/7 Support <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Financila Technology Se{" "}
//                             <i className="far fa-check" />
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-6">
//                   <div className="pricing-item style-two wow fadeInUp delay-0-4s">
//                     <div className="row justify-content-between">
//                       <div className="col-sm-6">
//                         <div className="title">
//                           <div className="icon">
//                             <i className="far fa-check" />
//                           </div>
//                           <div className="content">
//                             <h4>Private plan</h4>
//                             <span className="save">Save 20%</span>
//                           </div>
//                         </div>
//                         <span className="price">29.</span>
//                         <div className="arrow">
//                           <img
//                             src="assets/images/icons/price-arrow.png"
//                             alt="Arrow"
//                           />
//                         </div>
//                         <Link legacyBehavior href="/contact">
//                           <a className="theme-btn">Get started</a>
//                         </Link>
//                       </div>
//                       <div className="col-sm-6">
//                         <ul className="list">
//                           <li>
//                             All Financial Tasks <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Economic Market Survey{" "}
//                             <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Sales Operations <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Auto Intelligence <i className="far fa-check" />
//                           </li>
//                           <li>
//                             24/7 Support <i className="far fa-check" />
//                           </li>
//                           <li>
//                             Financila Technology Se{" "}
//                             <i className="far fa-check" />
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Tab.Pane>
//           </Tab.Content>
//         </Tab.Container>
//       </div>
//       <div className="bg-lines">
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//       </div>
//     </section>
//   );
// };
