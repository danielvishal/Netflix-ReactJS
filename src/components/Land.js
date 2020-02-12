import React from "react";
import logo from "./logo.png";

const Land = () => {
  return (
    <div className="Land">
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s2">
            <img className="responsive-img" src={logo} />
          </div>
          {/* <div id='sign-in' className="col s1 offset-m8 offset-s8">
            <a className="waves-effect red btn">button</a>
          </div> */}
        </div>
        <div id="land-img" className="container">
          <div className="row center white-text">
            <div className="col l12 m8 s8">
              <h2>Unlimited movies, TV shows and more.</h2>
            </div>
          </div>
          <div className="row center white-text">
            <div className="col l12 m8 s8">
              <h5>Watch anywhere. Cancel anytime.</h5>
            </div>
          </div>
          <div id="try" className="row center">
          <div className="col l12 m8 s8">
          <a className="waves-effect red btn-large">Button</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
