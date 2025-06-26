import Link from "next/link";
import { getLatestProjects } from "../lib/projectApi";
import RichText from "./RichText";
const Projects = async ({ modules }) => {

  const projects_data = await getLatestProjects();
  if (!modules?.project) return null;
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>

              </h2>
            </div>
          </div>
        </div>
        {projects_data?.map((project, index) => (
          <div className="row align-items-center pb-25" key={index}>
            {/* Conditionally change image column order */}
            <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src={project.image || 'assets/images/projects/default.jpg'} alt="Project"
                  style={{
                    maxWidth: '100%',
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    aspectRatio: '1.26', // 630/500 = 1.26 for standard ratio
                  }}
                />
              </div>
            </div>

            {/* Conditionally add ms-auto to content column */}
            <div className={`col-xl-5 col-lg-6 ${index % 2 !== 0 ? 'ms-auto' : ''}`}>
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">{project?.category || 'Product Design'}</span>
                <h2>
                  <Link legacyBehavior href={`/projects/${project?.slug || '1'}`}>
                    {project?.title || 'Untitled Project'}
                  </Link>
                </h2>
                {/* <p>{project?.short_description || 'Default description...'}</p> */}
                {project?.short_description ? (
                  <RichText text={project?.short_description || 'Default description...'} />
                ) : null}

                <Link legacyBehavior href={`/projects/${project?.slug}`}>
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}



        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/projects">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
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
    </section>
  );
};
export default Projects;

// export const Projects2 = () => {
//   return (
//     <section
//       id="projects"
//       className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
//     >
//       <div className="container container-1200">
//         <div className="row justify-content-center">
//           <div className="col-xl-12">
//             <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
//               <span className="sub-title mb-15">
//                 <i className="flaticon-asterisk-1" /> Explore my projects
//               </span>
//               <h2>Explore My Projects</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row gap-50">
//           <div className="col-md-6">
//             <div className="project-item style-four wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img
//                   src="assets/images/projects/project-two1.jpg"
//                   alt="Project"
//                 />
//                 <Link legacyBehavior href="/project-details">
//                   <a className="hover-box">
//                     <span>View More</span>
//                     <i className="far fa-arrow-up" />
//                   </a>
//                 </Link>
//               </div>
//               <div className="content">
//                 <h5 className="title">
//                   <Link legacyBehavior href="/project-details">
//                     <a>Digital Marketing</a>
//                   </Link>
//                 </h5>
//                 <span className="sub-title">Art , Direction</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="project-item style-four wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img
//                   src="assets/images/projects/project-two2.jpg"
//                   alt="Project"
//                 />
//                 <Link legacyBehavior href="/project-details">
//                   <a className="hover-box">
//                     <span>View More</span>
//                     <i className="far fa-arrow-up" />
//                   </a>
//                 </Link>
//               </div>
//               <div className="content">
//                 <h5 className="title">
//                   <Link legacyBehavior href="/project-details">
//                     <a>Digital Marketing</a>
//                   </Link>
//                 </h5>
//                 <span className="sub-title">Art , Direction</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="project-item style-four wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img
//                   src="assets/images/projects/project-two3.jpg"
//                   alt="Project"
//                 />
//                 <Link legacyBehavior href="/project-details">
//                   <a className="hover-box">
//                     <span>View More</span>
//                     <i className="far fa-arrow-up" />
//                   </a>
//                 </Link>
//               </div>
//               <div className="content">
//                 <h5 className="title">
//                   <Link legacyBehavior href="/project-details">
//                     <a>Digital Marketing</a>
//                   </Link>
//                 </h5>
//                 <span className="sub-title">Art , Direction</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="project-item style-four wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img
//                   src="assets/images/projects/project-two4.jpg"
//                   alt="Project"
//                 />
//                 <Link legacyBehavior href="/project-details">
//                   <a className="hover-box">
//                     <span>View More</span>
//                     <i className="far fa-arrow-up" />
//                   </a>
//                 </Link>
//               </div>
//               <div className="content">
//                 <h5 className="title">
//                   <Link legacyBehavior href="/project-details">
//                     <a>Digital Marketing</a>
//                   </Link>
//                 </h5>
//                 <span className="sub-title">Art , Direction</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 order-md-3">
//             <div className="project-item style-four wow fadeInUp delay-0-2s">
//               <div className="image">
//                 <img
//                   src="assets/images/projects/project-two5.jpg"
//                   alt="Project"
//                 />
//                 <Link legacyBehavior href="/project-details">
//                   <a className="hover-box">
//                     <span>View More</span>
//                     <i className="far fa-arrow-up" />
//                   </a>
//                 </Link>
//               </div>
//               <div className="content">
//                 <h5 className="title">
//                   <Link legacyBehavior href="/project-details">
//                     <a>Digital Marketing</a>
//                   </Link>
//                 </h5>
//                 <span className="sub-title">Art , Direction</span>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 align-self-center">
//             <div className="project-details-btn mb-50">
//               <Link legacyBehavior href="/project-details">
//                 <a className="more-btn wow zoomIn delay-0-2s">
//                   <span>More</span>
//                   <i className="fal fa-arrow-up" />
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
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
