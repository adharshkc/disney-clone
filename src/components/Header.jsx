import logo from "../assets/images/logo.png"
import {HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
const Header = ()=>{
    return (
        <div>
            <img src={logo} alt="logo" className="w-[80px] md:w-[115px] object-cover"/>
        </div>
    )
}

export default Header;