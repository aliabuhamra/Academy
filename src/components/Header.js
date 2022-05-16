import Button from './Button';
export default function Header() {
    return (
        <header className="flex items-center justify-between px-32">
            {/* List */}
            <div className="flex items-center justify-between w-3/4">
                <img src="/assets/icons/tg_logo.svg" alt="" />
                <ul className="flex justify-between w-3/4 text-lg">
                    <li><a className='link link-underline link-underline-black hover:cursor-pointer' href="#">الصفحة الرئيسية</a></li>
                    <li><a className='link link-underline link-underline-black hover:cursor-pointer' href="#whous">من نحـن</a></li>
                    <li><a className='link link-underline link-underline-black hover:cursor-pointer' href="#services">ماذا نقـدم</a></li>
                    <li><a className='link link-underline link-underline-black hover:cursor-pointer' href="#paths">المسـارات</a></li>
                    <li><a className='link link-underline link-underline-black hover:cursor-pointer' href="#works">أعمالنـا</a></li>
                    <li><a className='link link-underline link-underline-black hover:cursor-pointer' href="#teams">فريقنـا</a></li>
                </ul>
            </div>
            {/* Join us Button */}
            <Button text="انضم لنـا" />
        </header>
    )
}