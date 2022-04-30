import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] px-32 py-5 text-[18px] font-regu font-semibold text-slate-800">
      <div className="flex items-center justify-between ">
        <div className="">
          <span>&copy;</span> 2022 TG Developers
        </div>
        <div className="flex">
          <div className="flex">
            <img src="assets/images/facebook.svg"  className='mr-4'/>
            <img src="assets/images/instagram.svg" className='mr-4'/>
            <img src="assets/images/telegram.svg" className='mr-4'/>
            <img src="assets/images/mail.svg" className='mr-8'/>
          </div>
          <div className="">تواصــل معنــا</div>
        </div>
      </div>
    </div> 
  )
}

export default Footer;
