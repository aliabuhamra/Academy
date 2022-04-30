import React from 'react'

const Features = () => {
  return (
    <div className="features  w-full sm:px-0 absolute">
        <div className="section bg-gray ">
            <div className="section-container mx-auto sm:p-0 ">
                <div className="mx-auto text-center relative flex justify-center">
                    <h2 className="text-4xl sm:text-3xl py-8 mb-8 text-center font-black">المسارات</h2>
                    <span className="bg-orange w-28 sm:w-20 h-1 absolute rounded mt-24"></span>
                </div>
           
                <div className="design-box  
                  w-11/12 flex justify-between items-center my-20 mx-auto
                rounded-3xl border-2 border-lightBlack border-t-[25px]
                border-t-orange gap-5 sm:gap-2 sm:w-11/12 py-20
                 md:py-14 md:px-2 px-7 sm:p-0 shadow-lg">

                    <div className="img-box w-2/4 md:w-[45%] sm:w-[40%] mr-5 md:mr-3
                     rounded-3xl border-2 
                    border-lightBlack flex justify-center items-center">
                        <img className='w-full rounded-3xl' src="assets/images/paths/ui.svg" alt="" />
                    </div>
                    
                    <div className="content-box w-2/4 md:w-[55%] sm:w-[60%] mr-10 md:mr-3 mb-5">
                        <h2 className='text-2xl sm:text-base py-8 mb-2 md:py-4 md:mb-2 font-black'>تصميم الواجهات Ui/Ux</h2>
                        <p className="desc-text font-black pl-16 leading-loose md:leading-8 
                         text-lg md:text-sm sm:text-sm -mt-4 md:pl-8 sm:pl-3">في هذه الدورة ندعوك لدخول عالم تصميم الواجهات لتطبيقات الهاتف 
                            وأيضا الويب في مسار نادر وعملي بنسبة 80% مقارنة بالنظري لهذا 
                            لا تفوت حجز مكانك بالمجان
                        </p>
                        <div className="info flex justify-evenly items-center ml-8 mt-4 md:-ml-1 md:pl-3 md:mr-0 sm:-mr-6 sm:w-full">
                            <div className='border-l-4 md:border-l-3 px-4 md:pl-3 sm:pl-6 leading-8
                             md:leading-5 text-center md:text-sm sm:text-sm sm:w-4/12'>
                                <i className="fas fa-graduation-cap"></i>
                                <p>الفوج القادم </p>
                                <p> حزيران - تموز</p>
                            </div>
                            <div className='border-l-4 md:border-l-3 px-4 md:px-2 leading-8 
                            md:leading-5 text-center md:text-sm sm:text-sm sm:w-4/12'>
                                <i className="fas fa-hourglass-half"></i>
                                <p>مدة التخصص</p>
                                <p>4-5 أشهر</p>
                            </div>
                            <div className='px-2 md:px-2 leading-8 md:leading-5 text-center md:text-sm sm:text-sm sm:w-4/12' >
                                <i className="far fa-clock"></i>
                                <p>مواعيد الافتتاح </p>
                                <p>كل 3 أشهر</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="section-text  font-black py-16 leading-loose  
                text-4xl sm:text-3xl -mt-4 text-center"> قريبا ...</p>
            </div>
        </div>
  </div>
  )
}

export default Features;
