import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center p-5  justify-between">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="md:flex hidden gap-8 ">
          {menu.map((item) => {
            return <HeaderItem name={item.name} icon={item.icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-8 ">
          {menu.map((item, index) => {
            return index < 3 && <HeaderItem name="" icon={item.icon} />;
          })}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
           <HeaderItem name={""} icon={HiDotsVertical} />
           {toggle ?  <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3">
            {menu.map((item, index) => {
            return index > 2 && <HeaderItem name={item.name} icon={item.icon} />;
          })}
            </div>:null}
          </div>
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
