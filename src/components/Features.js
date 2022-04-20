import React from 'react'

const Features = () => {
  return (
    <div class="features  w-full">
     <div class="container mx-auto">
        <div class="section">
            <div class="section-container w-11/12 mx-auto">
                <div class="mx-auto text-center relative flex justify-center">
                    <h2 class="text-4xl py-8 mb-8 text-center font-black">المسارات</h2>
                    <span class="bg-orange w-28 h-1 absolute rounded mt-24"></span>
                </div>
           
                <div className="design-box 
                 bg-gray w-11/12 flex justify-between items-center my-20 mx-auto
                rounded-3xl border-2 border-lightBlack border-t-[25px]
                border-t-orange gap-5 py-20 px-7">

                    <div className="img-box w-2/4 mr-5 rounded-3xl border-2 border-lightBlack flex justify-center items-center">
                        <img className='w-full rounded-3xl' src="assets/images/paths/ui.svg" alt="" />
                    </div>
                    
                    <div className="content-box w-2/4 mr-10">
                        <h2 className='text-2xl py-8 mb-0 font-black'>تصميم الواجهات Ui/Ux</h2>
                        <p className="desc-text font-black pl-16 leading-loose  text-lg -mt-4">في هذه الدورة ندعوك لدخول عالم تصميم الواجهات لتطبيقات الهاتف 
                            وأيضا الويب في مسار نادر وعملي بنسبة 80% مقارنة بالنظري لهذا 
                            لا تفوت حجز مكانك بالمجان
                        </p>
                        <div className="info flex justify-evenly items-center ml-8 mt-4">
                            <div className='border-l-4 pl-8 leading-8 text-center'>
                                <i className="fas fa-graduation-cap"></i>
                                <p>الفوج القادم </p>
                                <p> حزيران - تموز</p>
                            </div>
                            <div className='border-l-4 px-6 leading-8 text-center'>
                                <i className="fas fa-hourglass-half"></i>
                                <p>مدة التخصص</p>
                                <p>4-5 أشهر</p>
                            </div>
                            <div className='pr-6 leading-8 text-center'>
                                <i className="far fa-clock"></i>
                                <p>مواعيد الافتتاح </p>
                                <p>كل 3 أشهر</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="section-text  font-black py-16 leading-loose  text-4xl -mt-4 text-center"> قريبا ...</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Features;
