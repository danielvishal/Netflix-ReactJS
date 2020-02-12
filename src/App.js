import React, { Component } from "react";
import Land from "./components/Land";
import Details from "./components/Details";
import Faq from "./components/Faq";
import Footer from "./components/Footer";


export default class App extends Component {
  state = {
      details :[
          {sec:1,h1:'Enjoy on your TV.',h3:'Watch on smart TVs.',i:require("./components/device.png")},
          {sec:2,h1:'Download your shows to watch on the go.',h3:'Watch on smart TVs.',i:require("./components/mobile.jpg")},
          {sec:3,h1:'Watch everywhere.',h3:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',i:require("./components/tv.png")}
      ],

      faq :[
        {sec:1,head:'What is Netflix',text:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'},
        {sec:2,head:'How much does Netflix cost?',text:'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from ₹ 199 a month. No extra costs or contracts.'},
        {sec:3,head:'What is Netflix',text:'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'},
        {sec:4,head:'How do I cancel?',text:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'},
        {sec:5,head:'What can I watch on  Netflix?',text:'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'},
      ],

      links:[
        "FAQHelp","CentreAccountMedia","CentreInvestor","RelationsJobsWays" , "WatchTerms","UsePrivacyCookie","PreferencesCorporate","InformationContact","UsSpeed","TestLegal","NoticesNetflix","Originals"
      ]

  }
  
  render() {
    return (
      <div className="App">
        <Land />
        <Details details={this.state.details}/>
        <Faq faq={this.state.faq}/>
        <Footer links={this.state.links}/>
      </div>
    );
  }
}
