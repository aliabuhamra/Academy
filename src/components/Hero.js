import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-32 mt-20 ">
       <div className='w-2/4'>
           <img src="assets/images/person.svg" alt=""   
             className='pr-10 pt-8 w-fit ml-8'
           />               
        </div>
        <div className="w-2/4 flex p-0 -mt-9 -ml-10">
            <p className="heading w-full flex-col justify-around text-4xl font-black relative leading-loose">
                <span className='absolute -right-10' > تعلم تخصص</span> <br/>
                <span className='absolute right-20' > بمستوى جامعي</span> <br/>
                <span className='absolute right-40' >متاح للجميع بالمجان</span>
            </p>
        </div>
    </div>
  )
}

export default Hero;
