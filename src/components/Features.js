import React from 'react';
// import Slider from "./Slider";
// import Quote from './Quote';


const Features = () => {
<<<<<<< HEAD
    return (
        <div className="features  w-full">
            <div className="container mx-auto">
                <div className="section">
                    <div className="section-container w-11/12 mx-auto">
                        <div className="mx-auto text-center relative flex justify-center">
                            <h2 id="paths" className="text-4xl py-8 mb-8 text-center font-black">المسارات</h2>
                            <span className="bg-orange w-28 h-1 absolute rounded mt-24"></span>
                        </div>

                        <div className="design-box 
=======
  return (

    <div className="features lg:px-16  w-full sm:px-0 " id='features'>
        <div className="section ">
            <div className="section-container mx-auto sm:p-0 absolute">
                <div className="mx-auto text-center relative flex justify-center">
                    <h2 className="lg:text-4xl sm:text-3xl py-8 mb-8 text-center font-black">المسارات</h2>
                    <span className="bg-orange w-28 sm:w-20 h-1 absolute rounded mt-24"></span>
                </div>
           
                <div className="design-box  
>>>>>>> dc5070c9696d0b6211bf9f8ca5cfc6338a02ec46
                  w-11/12 flex justify-between items-center my-20 mx-auto
                rounded-3xl border-2 border-lightBlack border-t-[25px]
                border-t-orange gap-5 sm:gap-0 sm:w-11/12 py-20
                 md:py-14 md:px-2 px-7 sm:p-0 shadow-lg lg:py-28 lg:px-8 ">

<<<<<<< HEAD
                            <div className="img-box w-2/4 mr-5 rounded-3xl border-2 border-lightBlack flex justify-center items-center">
                                <img className='w-full rounded-3xl' src="assets/images/paths/ui.svg" alt="" />
                            </div>

                            <div className="content-box w-2/4 mr-10 mb-5">
                                <h2 className='text-2xl py-8 mb-2 font-black'>تصميم الواجهات Ui/Ux</h2>
                                <p className="desc-text font-black pl-16 leading-loose  text-lg -mt-4">في هذه الدورة ندعوك لدخول عالم تصميم الواجهات لتطبيقات الهاتف
                                    وأيضا الويب في مسار نادر وعملي بنسبة 80% مقارنة بالنظري لهذا
                                    لا تفوت حجز مكانك بالمجان
                                </p>
                                <div className="info flex justify-evenly items-center ml-8 mt-4">
                                    <div className='border-l-4 px-4 leading-8 text-center'>
                                        <i className="fas fa-graduation-cap"></i>
                                        <p>الفوج القادم </p>
                                        <p> حزيران - تموز</p>
                                    </div>
                                    <div className='border-l-4 px-4 leading-8 text-center'>
                                        <i className="fas fa-hourglass-half"></i>
                                        <p>مدة التخصص</p>
                                        <p>4-5 أشهر</p>
                                    </div>
                                    <div className='px-2 leading-8 text-center'>
                                        <i className="far fa-clock"></i>
                                        <p>مواعيد الافتتاح </p>
                                        <p>كل 3 أشهر</p>
                                    </div>
                                </div>
=======
                    <div className="img-box w-2/4 md:w-[45%] sm:w-[50%] mr-5 md:mr-3
                     sm:mr-3  rounded-3xl sm:rounded-2xl border-2 
                    border-lightBlack flex justify-center items-center">
                        <img className='w-full rounded-3xl sm:rounded-2xl' src="assets/images/paths/ui.svg" alt="" />
                    </div>
                    
                    <div className="content-box lg:w-2/4 md:w-[55%] sm:w-[50%] mr-10 md:mr-3 sm:mr-3 mb-5">
                        <h2 className='lg:text-4xl sm:text-sm py-8 mb-2 lg:py-10 lg:mb-4 md:py-4 md:mb-2 sm:-mb-1 font-black'>تصميم الواجهات Ui/Ux</h2>
                        <p className="desc-text lg:font-black font-black lg:pl-16 lg:leading-loose md:leading-8 
                         lg:text-2xl md:text-sm sm:text-[10px] sm:font-normal -mt-4 md:pl-8 sm:pl-3">في هذه الدورة ندعوك لدخول عالم تصميم الواجهات لتطبيقات الهاتف 
                            وأيضا الويب في مسار نادر وعملي بنسبة 80% مقارنة بالنظري لهذا 
                            لا تفوت حجز مكانك بالمجان
                        </p>
                        <div className="info flex justify-evenly sm:justify-around sm:w-full items-center ml-8 mt-4 md:-ml-1 md:pl-3 md:mr-0 sm:-mr-6">
                            <div className='border-l-4 lg:text-xl lg:font-black lg:leading-8 lg:border-l-4 lg:px-5  md:border-l-3  sm:border-l-2 px-4 md:pl-3 sm:pl-4 leading-8
                             md:leading-5 text-center md:text-sm sm:text-[8px] sm:font-normal sm:leading-4 '>
                                <i className="fas fa-graduation-cap"></i>
                                <p>الفوج القادم </p>
                                <p> حزيران - تموز</p>
                            </div>
                            <div className='border-l-4 lg:border-l-4  lg:text-xl lg:font-black lg:leading-8  md:border-l-3 sm:border-l-2 lg:px-5 md:px-2 sm:px-2 sm:-ml-1 leading-8 
                            md:leading-5 text-center md:text-sm sm:text-[8px] sm:leading-4  sm:font-normal'>
                                <i className="fas fa-hourglass-half"></i>
                                <p>مدة التخصص</p>
                                <p>4-5 أشهر</p>
                            </div>
                            <div className='lg:px-3 lg:text-xl lg:font-black lg:leading-8 md:px-2 sm:pl-1 sm:pr-2 md:leading-5 sm:leading-4 
                            text-center md:text-sm sm:text-[8px] sm:font-normal'>
                                <i className="far fa-clock"></i>
                                <p>مواعيد الافتتاح </p>
                                <p>كل 3 أشهر</p>
>>>>>>> dc5070c9696d0b6211bf9f8ca5cfc6338a02ec46
                            </div>
                        </div>
                        <p className="section-text  font-black py-16 leading-loose  text-4xl -mt-4 text-center"> قريبا ...</p>
                    </div>
                </div>
<<<<<<< HEAD
=======
                <p className="section-text  font-black py-16 leading-loose  
                text-4xl sm:text-3xl -mt-4 text-center"> قريبا ...</p>
>>>>>>> dc5070c9696d0b6211bf9f8ca5cfc6338a02ec46
            </div>
             {/* <Slider /> */}
        </div>
<<<<<<< HEAD
    )
=======
{/*         
        <Quote text={`نحو عالم يتفوق فيه شبابنا بمهاراتهم ولا يكون أبعد طموحهم
          وظيفة لا تعيلهم اذا مرضوا`}/> */}
  </div>
  )
>>>>>>> dc5070c9696d0b6211bf9f8ca5cfc6338a02ec46
}

export default Features;
