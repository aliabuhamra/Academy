import React from 'react'

const Features = () => {
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
                  w-11/12 flex justify-between items-center my-20 mx-auto
                rounded-3xl border-2 border-lightBlack border-t-[25px]
                border-t-orange gap-5 py-20 px-7 shadow-lg">

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
