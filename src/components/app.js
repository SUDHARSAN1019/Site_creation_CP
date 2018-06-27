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
  <div className="w3-display-left w3-text-green " >
    <span className="w3-jumbo w3-hide-small">Have the courage to follow your heart and intution</span><br />
    <span className="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br />
    <span className="w3-large">They somehow know what you truley want to become</span>
    <p>
    <a href="#about" 
    className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
    Decide Commit Succeed
    </a>
    </p>
  </div> 
  <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding: "24px 48px"}}>
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</header>
</div>
    );
  }
}
