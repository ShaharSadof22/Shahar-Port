import React from 'react'
import Tilt from 'react-tilt';


export function ProjectPreview({ project }) {
    return (
        <div className="project-preview">
            <div>
                <a
                    href={project.lineLink}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                >
                    <Tilt
                        options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                    >
                        <div data-tilt className="thumbnail rounded">
                            <img src={project.imgUrl} alt="img" className="img-project-preview" />
                        </div>
                    </Tilt>
                </a>
                <div className="text-wrapper">
                    <h5 className="project-title-in-small-project">{project.name}</h5>
                    <p className="project-description">{project.description}</p>
                </div>
            </div>
            <div className="project-btn-container">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn live-links small-project-btn"
                    href={project.lineLink}
                >Live</a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main small-project-btn"
                    href={project.codeLink}
                >Source</a>
            </div>
        </div>
    )
}
