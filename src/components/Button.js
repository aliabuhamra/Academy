import { Link } from "react-router-dom";
export default function Button({text}){
    return (
        <button className="bg-orange font-bold py-2 px-10 rounded-md xl:block sm:hidden">
            <Link to='/join-us'>{text}</Link>
        </button>
    );
}