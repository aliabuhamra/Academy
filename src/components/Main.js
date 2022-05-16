import React from 'react';
import AboutUs from "./AboutUs";
import Features from "./Features";
import Message from "./Message";
import Quote from "./Quote";
import Services from "./Services";
import Home from './Home';
import Slider from './Slider';
import OurWork from './ourWork';
import TheName from './theName';
import OurTeam  from './ourTeam ';
import ThirdQuote from './thirdQuote';
import StoreIcon from './storeIcon';


const Main = () => {
  return (
    <div className='mb-[32]'>
        <Home />
       <Message />
        <AboutUs />
        <Quote text={`                معا لنبني جيل يعمل باقبال على الحياة, متمسك بمبادئه
                ويملك أساس لمستقبل أفضل لعالمنا العربي والاسلامي.`}/>
                
        <Services />
        <Features />
        <Slider />
        <Quote text={`نحو عالم يتفوق فيه شبابنا بمهاراتهم ولا يكون أبعد طموحهم
          وظيفة لا تعيلهم اذا مرضوا`}/>
         <OurWork />  
        <TheName />
        <OurTeam />
        <ThirdQuote />
        <StoreIcon />
    </div>

  )
}

export default Main;


