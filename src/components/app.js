import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	<div>
      <div className="w3-top">
  <div className="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" className="w3-bar-item w3-button w3-wide">AKA</a>
    <div className="w3-right w3-hide-small">
      <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
      <a href="#team" className="w3-bar-item w3-button"><i className="fa fa-user"></i> TEAM</a>
      <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
      <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> PRICING</a>
      <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
    </div>
    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
      <i className="fa fa-bars"></i>
    </a>
  </div>
</div>
<nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display: "none"}} id="mySidebar">
  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="#about"  className="w3-bar-item w3-button">ABOUT</a>
  <a href="#team"  className="w3-bar-item w3-button">TEAM</a>
  <a href="#work"  className="w3-bar-item w3-button">WORK</a>
  <a href="#pricing"  className="w3-bar-item w3-button">PRICING</a>
  <a href="#contact"  className="w3-bar-item w3-button">CONTACT</a>
</nav>
<header className="header_section w3-display-container w3-grayscale-min " id="home">
<div class="w3-container">

<h2>Special Effects</h2>

<div class="w3-panel w3-text-brown">
  <h1 class="w3-opacity">
  <b>BE SIMPLE BE AN EXAMPLE</b></h1>
</div>
    <p>
    <a href="#about" 
    className="w3-button w3-text-brown w3-padding-medium w3-large w3-margin-top w3-opacity">
    Decide Commit Succeed
    </a>
    </p>
  </div> 
  <div className="w3-display-bottomleft w3-text-brown w3-large" style={{padding: "34px 48px"}}>
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
  </div>
</header>

<div className="w3-container w3-light-grey" style={{padding:"128px 16px"}} id="contact">
  <h3 className="w3-center">CONTACT</h3>
  <p className="w3-center w3-large">Lets get in touch. Send us a message:</p>
  <div className="w3-row-padding" style={{marginTop:"64px"}}>
    <div className="w3-half">
      <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Sivakasi, TN</p>
      <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: 9876543210</p>
      <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email:contact@aka.com</p>
      <br />
         

<div className="container">
  <form action="/action_page.php">
    <div className="row">
      <div className="col-25">
        <label htmlFor="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="lname">Last Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="fname">Mail Id</label>
      </div>
      <div className="col-75">
        <input type="Emailmail" id="fname" name="firstname" placeholder="Your Email.." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="fname">Mobile No</label>
      </div>
      <div className="col-75">
        <input type="tel" id="fname" name="firstname" placeholder="Your contact No.." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="country">Country</label>
      </div>
      <div className="col-75">
        <select id="country" name="country">
          <option value="India">India</option>
          <option value="Singapore">Singapore</option>
          <option value="usa">USA</option>
          <option value="Malaysia">Malaysia</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="subject">Subject</label>
      </div>
      <div className="col-75">
        <textArea id="subject" name="subject"
         placeholder="Write something.." style={{height: "200px"}} />
      </div>
    </div>
    <div className="row">
      <input type="submit" value="Submit" />
    </div>
  </form>
</div>
    </div>
    <div className="w3-half">
      <div id="googleMap" className="w3-greyscale-max" style={{width:"100%",height:"510px"}}></div>
    </div>
  </div>
</div>
<footer className="w3-center w3-black w3-padding-64">
  <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div className="w3-xlarge w3-section">
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</footer>
</div>
 );
}
}