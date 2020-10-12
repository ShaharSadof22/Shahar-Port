import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import {ProjectList} from './ProjectList'

const Portfolio = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <h2 className="project-title">Projects</h2>
        <div className={isDesktop ? "project-wrapper" : "project-wrapper-mobile"}>


          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <div className={isDesktop ? "project-details" : "project-details-mobile"}>
              <h3 className="project-details-title">Taskit</h3>
              <div>
                <p>
                  Taskit is a collaboration tool that organizes your projects into boards. In one glance, Taskit tells you what's being worked on, who's working on what, and where something is in a process.
                </p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn live-links"
                href="https://taskit-app2020.herokuapp.com/#/"
              >See Live</a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href='https://github.com/ShaharSadof22/Taskit'
              >Source Code</a>

            </div>
          </Fade>

          <Fade
            right={isDesktop}
            bottom={isMobile}
            duration={900}
            delay={700}
            distance="30px"
          >
            <div className={isDesktop ? "project-image" : "project-image-mobile"}>
              <a
                href="https://taskit-app2020.herokuapp.com/#/"
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
                    <img alt="img" src="https://res.cloudinary.com/cloudinary-img/image/upload/v1602249553/Shahar%20Sadof%20Dev%20-%20Portfolio/taskit_djdqth.png" />
                  </div>
                </Tilt>
              </a>
            </div>
          </Fade>
        </div>
        <h2 className="project-details-title more-proj">More Projects</h2>
        <ProjectList />
      </Container>
    </section>
  );
};

export default Portfolio;
