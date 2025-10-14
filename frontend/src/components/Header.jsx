import LogoLight from "../assets/images/Logo/LogoLight.png";
import LogoDark from "../assets/images/Logo/LogoDark.png";
import Button from "../ui/Button";
import { Link, NavLink } from "react-router";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";
import { menuList } from "../constants/menuList";

function Header() {
  return (
    <div className="fixed w-full z-[9999]">
      <div className="con pt-6">
        <div className="bg-secondary-dark/90 text-textPrimary px-6 rounded-full max-w-3xl flex items-center justify-between shadow-header backdrop-blur-sm mx-auto">
          <Link to="/">
            <img src={LogoLight} alt="logo" className="w-[130px]" />
          </Link>

          <ul className=" flex gap-4 items-center ">
            {menuList.map((el) => {
              const { id, to, title } = el;
              return (
                <NavLink to={to} key={id}>
                  <li
                    className={`hover:cursor-pointer hover:text-textPrimary/50`}
                  >
                    {title}
                  </li>
                </NavLink>
              );
            })}
            <Button customStyle="w-[80px] py-1 bg-[#51271d]" text="Login" />
            <Button customStyle="w-[80px] py-1 bg-[#643b32]" text="Sign up" />

            <IconContext.Provider
              value={{ className: "text-lg hover:cursor-pointer" }}
            >
              <IoSunny />
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
