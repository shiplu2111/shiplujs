'use client'
import Link from 'next/link';
import RichText from './RichText';

const ProjectsClient = ({ projects }) => {
    return (
        <>
            {projects?.map((project, index) => (
                <div className="row align-items-center pb-25" key={index}>
                    <div className={`col-lg-6 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                        <div className="project-image wow fadeInLeft delay-0-2s">
                            <img
                                src={project.image || 'assets/images/projects/default.jpg'}
                                alt="Project"
                                className="img-fluid"
                                style={{
                                    width: '100%',
                                    maxHeight: '500px',
                                    objectFit: 'cover',
                                    aspectRatio: '1.26',
                                }}
                            />
                        </div>
                    </div>
                    <div className={`col-xl-5 col-lg-6 ${index % 2 !== 0 ? 'ms-auto' : ''}`}>
                        <div className="project-content wow fadeInRight delay-0-2s">
                            <span className="sub-title">{project.category || 'Product Design'}</span>
                            <h2>
                                <Link legacyBehavior href={`/project-details/${project.slug || '1'}`}>
                                    {project.title || 'Untitled Project'}
                                </Link>
                            </h2>
                            {project?.short_description && (
                                <RichText text={project.short_description} />
                            )}
                            <Link legacyBehavior href={`/project-details/${project.slug || '1'}`}>
                                <a className="details-btn">
                                    <i className="far fa-arrow-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectsClient;
