import React from "react";

const Details = props => {
  const details = props.details;

  const detailsList = details.map(detail => {
    return (
      <div className="row black" key={detail.sec}>
        <div id="info" className="col s12 m6 l6 white-text left-align">
          <h3>{detail.h1}</h3>
          <h5>{detail.h3}</h5>
          <a id="try-it-now" className="waves-effect black btn" onClick={() => {this.scroll(this.myRef)}}>Try it Now</a>
        </div>
        <div className="col s12 m6 l6">
          <img className="responsive-img" src={detail.i} />
        </div>
      </div>
    );
  });

  return <div className="Details center">{detailsList}</div>;
};

export default Details;
