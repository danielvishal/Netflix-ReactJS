import React, { Component } from "react";
import M from 'materialize-css'

export default class Faq extends Component {
  constructor(props) {
    super(props)
    this.faqs = props.faq;
    this.faqList = this.faqs.map(faq => {
      return (
        <li key={faq.sec}>
          <div id='faq' className="collapsible-header white-text grey darken-4">
            <h5>{faq.head}</h5>
          </div>
          <div id='faq-text' className="collapsible-body white-text grey darken-4">
            <span>{faq.text}</span>
          </div>
        </li>
      );
    });
  }
componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems);
      });
}

  render() {
    return (
      <div className="Faq black">
        <h3 className="white-text center">Frequently Asked Questions</h3>
        <div id='faq-head'className="container">
          <ul className="collapsible">{this.faqList}</ul>
        </div>
      </div>
    );
  }
}
