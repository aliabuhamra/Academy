import React, { useState } from 'react';
import Button from './Button';
import './Header.css';

import { Link } from 'react-router-dom';

export default function Header() {

    const [click , setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return (
        <header className="flex  items-center justify-between xl:px-32 md:px-12 sm:px-8 mx-auto">

            {/* List */}
            <div className={click ? "flex xl:flex items-center lg:justify-between md:justify-between w-full relative menu" 
            : "flex xl:flex items-center lg:justify-between md:justify-between w-full relative menu open" }
                  >
                <Link to="/">
                    <img src="/assets/icons/tg_logo.svg" alt="" 
                       className={click ? "sm:absolute sm:right-10 sm:top-11 md:right-12 md:top-12 logo"
                    : "sm:absolute sm:right-10 sm:top-11 md:right-12 md:top-12  sm:hidden md:hidden lg:block logo" } />
                </Link>
                <div 
                className='xl:hidden lg:hidden text-5xl flex  sm:absolute sm:left-10 sm:top-11 md:left-11 md:top-12 z-30 text-gray'
                  onClick={handleClick}   >
                    <i className={click ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
                </div>
                <ul className={click ? "flex xl:flex lg:flex justify-between w-3/4 text-lg md:text-sm listItems sm:hidden md:hidden lg:pl-16 lg:pr-8" 
                : "flex xl:flex justify-between w-3/4 text-lg md:text-lg listItems lg:pl-16 lg:pr-8" }>
                    <li><Link to="/"  className='link link-underline link-underline-black hover:cursor-pointer '>الصفحة الرئيسية</Link></li>
                    <li><Link to="/about-us"  className='link link-underline link-underline-black hover:cursor-pointer'>من نحـن</Link></li>
                    <li><Link to="/services"  className='link link-underline link-underline-black hover:cursor-pointer'>ماذا نقـدم</Link></li>
                   <li><Link to="/features"  className='link link-underline link-underline-black hover:cursor-pointer'>المسـارات</Link></li>
                    <li><Link to="/"  className='link link-underline link-underline-black hover:cursor-pointer'>أعمالنـا</Link></li>
                    <li><Link to="/"  className='link link-underline link-underline-black hover:cursor-pointer'>فريقنـا</Link></li>
                </ul>
             {/* Join us Button */}
             <Button text="انضم لنـا" click={click}/>
            </div>

        </header>
    )
}