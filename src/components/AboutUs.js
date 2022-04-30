import React from 'react'

const AboutUs = () => {
  return (
    <div className="px-32 py-2 md:px-16 sm:px-10">
            <div className="section mx-auto p-10 sm:p-0">
                <div className=" m-auto p-11 sm:p-3 basis-4/5 md:basis-11/12">
                    <div className=" mx-auto text-center relative flex justify-center">
                        <h2 className="text-4xl sm:text-3xl py-8 mb-8 text-center font-black">من نحن</h2>
                        <span className="bg-orange w-16 h-1 absolute rounded mt-24"></span>                    
                    </div>
            
                    <p className="font-black text-center leading-loose text-2xl sm:text-xl px-40 md:px-12 mb-8 mt-8 sm:px-8">نحن مؤسسة غير ربحية أسسها الشاب الأردني ثائر أبوغوش
                        في أواخر عام 2019</p>
                    <p className="font-black text-center leading-loose text-2xl sm:text-xl px-40 mb-8 md:px-10 sm:px-8">تركيزنا موجه تحديدا نحو الشباب في الشرق الأوسط وشمال
                        افريقيا,ونهدف الى توجيه الشباب نحو
                        تحقيق نظام شخصي فعال واحتراف مهني وحرية اقتصادية.
                    </p>
                    <span className="font-black text-center text-2xl px-40 block text-lightBlue sm:text-xl sm:px-16"><a href="app.js">المزيد ...</a></span>
                </div>
            </div>
    </div>
  )
}

export default AboutUs;
