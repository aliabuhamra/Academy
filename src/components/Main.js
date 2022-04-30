import React from 'react';
import Hero from "./../components/Hero";
import AboutUs from "./../components/AboutUs";
import Features from "./../components/Features";
import Message from "./../components/Message";
import Quote from "./../components/Quote";
import Services from "./../components/Services";
import Slider from "./../components/Slider";

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
        <Slider />
        {/* <Quote text={`نحو عالم يتفوق فيه شبابنا بمهاراتهم ولا يكون أبعد طموحهم
          وظيفة لا تعيلهم اذا مرضوا`}/> */}
    </div>
  )
}

export default Main;
