import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p id="white-text">
                     Full-Stack / Front-End Web Developer with knowledge and experience writing single-page-
                     applications using the latest WEB technologies such as Node.js, React.js, Vue.js, Vuex and

                     Angular.
                  </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address padding-for-address">
                           <span>Shahar Sadof</span><br />
                           <span>Yigael Yadin 38, Herzlia<br />
                           </span>
                           <span>0546595954</span><br />
                           <span>shaharsadof22@gmail.com</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href="https://drive.google.com/file/d/1hpLG61ID7-ZU77MT4iYFFH9twOowKn-L/view?usp=sharing" target="_blank" rel="noopener noreferrer" id="resume-btn">Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
