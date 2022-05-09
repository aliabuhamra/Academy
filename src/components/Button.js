import { Link } from "react-router-dom";
export default function Button({text , click}){
    return (
        <button 
        className={click ? "bg-orange font-aljazeera font-bold py-2 px-10 sm:font-aljazeera rounded-md btn sm:hidden md:hidden lg:block" 
        : "bg-orange font-bold py-2 px-10 rounded-md md:btn lg:block font-aljazeera sm:font-aljazeera" }>
            <Link to='/join-us'>{text}</Link>
        </button>
    );
}

