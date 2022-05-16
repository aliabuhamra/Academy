import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] px-32 py-5 text-[18px] font-medium">
      <div className="flex items-center justify-between ">
        <div className="flex">
          <div className="">تواصــل معنــا</div>
          <div className="flex">
            <img src="assets/images/mail.svg" className='mr-9'/>
            <img src="assets/images/telegram.svg" className='mr-4'/>
            <img src="assets/images/instagram.svg" className='mr-4'/>
            <img src="assets/images/facebook.svg"  className='mr-4'/> 
          </div>
        </div>
        <div dir="ltr">
         <span>&copy;</span> 2022 TG Developers
        </div>
      </div>
    </div> 
  )
}

export default Footer;


// font-semibold text-slate-800