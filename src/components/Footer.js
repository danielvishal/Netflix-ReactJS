import React from "react";

const Footer = props => {
  const links = props.links;
  const linksList = links.map(link => {
    return (
      <div id='links' className="col s7 m5 l3">
        <a href="#">{link}</a>
      </div>
    );
  });
  return (
    <div className="Footer black">
      <div className="container">
        <h6 className="left-align white-text">Questions? Call 000-800-040-1843</h6>
        <div className="row left-align">{linksList}</div>
      </div>
    </div>
  );
};

export default Footer;
