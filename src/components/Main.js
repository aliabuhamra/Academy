import React from 'react';
import AboutUs from "./../components/AboutUs";
import Features from "./../components/Features";
import Message from "./../components/Message";
import Quote from "./../components/Quote";
import Services from "./../components/Services";
import Hero from './Hero';
import OurWork from './components/ourWork';
import TheName from './components/theName';
import OurTeam  from './components/ourTeam ';
import ThirdQuote from './components/thirdQuote';
import StoreIcon from './components/storeIcon';
import Footer from './components/footer';

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
        <OurWork /> 
        <TheName />
        <OurTeam />
        <ThirdQuote />
        <StoreIcon />
        <Footer />
       
    </div>
  )
}

export default Main;


