import React from 'react';

const Quote = () => {
  return (
     <div className="py-6">
        <div className="quote w-1/2 mx-auto bg-lightgray rounded-3xl relative p-2">
            <img className="absolute -top-4 left-8 w-12" src="assets/images/quoteiconleft.svg" alt="" />
            <p className="font-black text-center leading-loose text-2xl px-14 py-6">
                معا لنبني جيل يعمل باقبال على الحياة, متمسك بمبادئه
                ويملك أساس لمستقبل أفضل لعالمنا العربي والاسلامي.
            </p>
            <img className="quote-right absolute -bottom-4 right-8 w-12" src="assets/images/quoticonright.svg" alt="" />
        </div>
    </div>
  )
}

export default Quote;
