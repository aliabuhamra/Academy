import React from 'react'

const Services = () => {
  return (
     <div className="px-32 py-10">
            <div className="section mx-auto p-10 ">
                <div className=" m-auto p-11 basis-4/5">
                    <div className=" mx-auto text-center relative flex justify-center">
                        <h2 className="text-4xl py-8 mb-8 text-center font-black">ماذا تقدم أكاديميتنا ؟</h2>
                        <span className="bg-orange w-40 h-1 absolute rounded mt-24"></span>                    
                    </div>
            
                    <p className="font-black text-center leading-loose  text-2xl px-40 mb-8 mt-8">أكاديميتنا تقدم أكثر من 14 تخصصا في مهارات متنوعة,
                    تبدأ من التصميم والبرمجة البسيطة حتى بناء الميتافيرس القادمة
                    وتعلم الذكاء الاصطناعي والتعمق في الامن السيبراني</p>
                    <p className="font-black text-center leading-loose  text-2xl px-40 mb-8">كل هذه تخصصات نقدمها في قالب تعليمي تفاعلي طورناه
                     بانفسنا ليتناسب مع التعلم الذاتي عن بعد الذي يملك نسب انسحاب
                     عالية, لهذا معنا ستجد نظاما يساعدك على الاستمرار ويحمل جدية الجامعات بنظام 
                     اختبارات نظرية وعملية صارم.
                    </p>
                    <span className="font-black text-center text-2xl px-40 block text-lightBlue"><a href="app.js">المزيد ...</a></span>
                </div>
            </div>
    </div>
  )
}

export default Services;
