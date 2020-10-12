import React, { Component } from 'react';
import Typed from "react-typed";

class Header extends Component {
   render() {


      return (
         <header id="home" className="intro route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />

            <div className="intro-content display-table">
               <div className="table-cell">
                  <div className="container">
                     <h1 className="intro-title mb-4">Hello, I am Shahar Sadof</h1>
                     <p className="intro-subtitle">
                        <span className="text-slider-items"></span>
                        <strong className="text-slider">
                           <Typed
                              strings={[
                                 "Full Stack Developer",
                                 "Front End Developer"
                              ]}
                              typeSpeed={80}
                              backDelay={1100}
                              backSpeed={30}
                              loop
                           />
                        </strong>
                     </p>
                     <p className="pt-3">
                        <a
                           className="btn btn-primary btn js-scroll px-4"
                           href="#work"
                           role="button"
                        >
                           View My Work
                </a>
                     </p>
                  </div>
               </div>
            </div>

         </header>
      );
   }
}

export default Header;
