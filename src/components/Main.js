import React from 'react';
// import Hero from "./../components/Hero";
import AboutUs from "./../components/AboutUs";
import Features from "./../components/Features";
import Message from "./../components/Message";
import Quote from "./../components/Quote";
import Services from "./../components/Services";
import Hero from './Hero';

const Main = () => {
  return (
    <div>
        <Hero />
       <Message />
        <AboutUs />
        <Quote text={`                معا لنبني جيل يعمل باقبال على الحياة, متمسك بمبادئه
                ويملك أساس لمستقبل أفضل لعالمنا العربي والاسلامي.`}/>
        <Services />
        <Features />
       
    </div>
  )
}

export default Main;
