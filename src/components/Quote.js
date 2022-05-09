import React from 'react';

const Quote = ({text}) => {
  return (
     <div className="py-32">
        <div className="quote lg:w-1/2 md:w-11/12 sm:w-11/12 mx-auto bg-lightgray rounded-3xl relative p-2 sm:p-2">
            <img className="absolute -top-4 lg:-top-5 lg:left-6 left-8 lg:w-14 w-12 sm:w-10" src="assets/images/quoteiconleft.svg" alt="" />
            <p className="font-black text-center lg:px-9 leading-loose lg:leading-10 lg:text-2xl sm:text-lg px-14 sm:px-6 py-6">
                  {text}
            </p>
            <img className="quote-right absolute -bottom-4 lg:-bottom-5 right-8 lg:right-6 lg:w-14 w-12 sm:w-10" src="assets/images/quoticonright.svg" alt="" />
        </div>
    </div>
  )
}

export default Quote;
