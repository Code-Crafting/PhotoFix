import LogoLight from "../assets/images/Logo/LogoLight.png";
import LogoDark from "../assets/images/Logo/LogoDark.png";
import Button from "../ui/Button";
import { Link, NavLink } from "react-router";
import { IoSunny } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { menuList } from "../constants/menuList";

function Header() {
  const commonBtnStyle = "885px:w-20 w-28 885px:py-1 py-2";
  return (
    <div className="fixed w-full z-[9999]">
      <div className="885px:con 885px:pt-6">
        <div className="bg-secondary-dark/90 text-textPrimary px-6 885px:rounded-full 885px:w-3xl w-full flex items-center justify-between shadow-header backdrop-blur-sm mx-auto">
          {/* left */}
          <div className="flex gap-4 items-center">
            <HiOutlineMenuAlt2 className="md:hidden text-3xl" />
            <Link to="/">
              <img
                src={LogoLight}
                alt="logo"
                className="885px:w-[130px] 500px:w-50 w-42"
              />
            </Link>
          </div>

          {/* right */}
          <div className="flex gap-4 items-center">
            <ul className=" md:flex hidden gap-4 items-center">
              {menuList.map((el) => {
                const { id, to, title } = el;
                return (
                  <NavLink to={to} key={id}>
                    <li
                      className={`cursor-pointer hover:text-textPrimary/50 text-xl 885px:text-[16px] `}
                    >
                      {title}
                    </li>
                  </NavLink>
                );
              })}
              <Button
                customStyle={`${commonBtnStyle} bg-[#51271d]`}
                text="Login"
              />
              <Button
                customStyle={`${commonBtnStyle} bg-[#643b32]`}
                text="Sign up"
              />
            </ul>
            <IoSunny className="885px:text-lg text-2xl hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
