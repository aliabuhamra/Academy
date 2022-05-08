import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center sm:w-full justify-between px-32 mt-20 md:px-14 sm:px-12">
       <div className='w-2/4'>
           <img src="assets/images/person.svg" alt=""   
             className='pr-10 sm:pr-2 pt-8 w-fit mr-8 lg:w-3/4 md:w-3/4 md:mr-4 sm:-mr-2 md:pr-0 sm:w-11/12 sm:mb-5'
           />        
        </div>
        <div className="w-2/4 flex p-0 -mt-9 -ml-10 md:mt-9 lg:mb-9">
            <p className=" w-full flex-col justify-around lg:text-4xl lg:leading-[2] md:text-2xl sm:text-base sm:leading-8 font-black relative leading-loose md:leading-10 ">
                <span className='absolute lg:-right-10 md:-right-5 sm:-right-10' > تعلم تخصص</span> <br/>
                <span className='absolute lg:right-20 md:right-16 sm:-right-6' > بمستوى جامعي</span> <br/>
                <span className='absolute lg:right-40 md:right-24 sm:-right-4' >متاح للجميع بالمجان</span>
            </p>
        </div>
    </div>
  )
}

export default Hero;
