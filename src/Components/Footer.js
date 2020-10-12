import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer >
        <div className="contact-details-footer">

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">

              <h4>Contact Details</h4>
              <p className="address">
                Shahar Sadof<br />
                  igael Yadin 38 <br />
                  Herzlia<br />
                  0546595954<br />
                <span>shaharsadof22@gmail.com</span>
              </p>
            </div>
          </aside>
        </div>

        <div className="icons-details-footer">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Shahar Sadof Web Developer</li>
              <li>Design by <a title="Styleshout" href="#home">Shahar Sadof</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
