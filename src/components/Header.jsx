import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
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
        {menu.map((item) => {
          return <HeaderItem name={item.name} icon={item.icon} />;
        })}
      </div>

        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className="w-[40px] rounded-full" />
     
    </div>
  );
};

export default Header;
