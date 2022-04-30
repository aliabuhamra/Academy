import React from 'react';
import Button from './Button';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-32 md:px-12 sm:px-8 bg-gray mx-auto">
            {/* List */}
            <div className="flex items-center justify-between w-3/4 sm:w-1/4">
                <Link to="/">
                    <img src="/assets/icons/tg_logo.svg" alt="" />
                </Link>
                <ul className="flex justify-between w-3/4 text-lg md:text-sm sm:hidden">
                    <li><Link to="/"  className='link link-underline link-underline-black hover:cursor-pointer'>الصفحة الرئيسية</Link></li>
                    <li><Link to="/about-us"  className='link link-underline link-underline-black hover:cursor-pointer'>من نحـن</Link></li>
                    <li><Link to="/services"  className='link link-underline link-underline-black hover:cursor-pointer'>ماذا نقـدم</Link></li>
                   <li><Link to="/features"  className='link link-underline link-underline-black hover:cursor-pointer'>المسـارات</Link></li>
                    <li><Link to="/"  className='link link-underline link-underline-black hover:cursor-pointer'>أعمالنـا</Link></li>
                    <li><Link to="/"  className='link link-underline link-underline-black hover:cursor-pointer'>فريقنـا</Link></li>
                </ul>
            </div>
            {/* Join us Button */}
            <Button text="انضم لنـا" />
            
        </header>
    )
}