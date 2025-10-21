import LogoLight from "../assets/images/Logo/LogoLight.png";
import LogoDark from "../assets/images/Logo/LogoDark.png";
import Button from "../ui/Button";
import { Link, NavLink } from "react-router";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { menuList } from "../constants/menuList";
import { useContext, useState } from "react";
import { Theme } from "../context/Theme";
import NavbarMobile from "./NavbarMobile";

function Header() {
  const [isDark, setIsDark] = useContext(Theme);
  const [isOpen, setIsOpen] = useState(false);
  const commonStyle = {
    btn: `885px:w-20 w-28 885px:py-1 py-2 ${isDark && "text-white"}`,
    mode: `885px:text-lg text-2xl cursor-pointer ${
      isDark && "text-textLight/80"
    }`,
  };

  const getNavLinkClasses = (isActive) => {
    if (isDark) {
      return isActive
        ? "text-textSecondary"
        : "text-textLight hover:text-textSecondary";
    } else {
      return isActive
        ? "text-textPrimary/50"
        : "text-textPrimary hover:text-textPrimary/50";
    }
  };

  return (
    <div className="fixed w-full z-[9999]">
      <div className="885px:con 885px:pt-6">
        <div
          className={`relative ${
            isDark
              ? "text-textLight bg-nav/40"
              : "text-textPrimary bg-secondary-dark/90"
          } px-6 885px:rounded-full 885px:w-3xl w-full flex items-center justify-between shadow-header backdrop-blur-sm mx-auto`}
        >
          {/* left */}
          <NavbarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="flex gap-4 items-center">
            <HiOutlineMenuAlt2
              className={`md:hidden text-3xl ${isDark && "text-textLight/80"}`}
              onClick={() => setIsOpen(true)}
            />
            <Link to="/">
              <img
                src={isDark ? LogoDark : LogoLight}
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
                  <NavLink
                    to={to}
                    key={id}
                    className={({ isActive }) =>
                      `cursor-pointer ${getNavLinkClasses(
                        isActive
                      )} text-xl 885px:text-[16px]`
                    }
                  >
                    {title}
                  </NavLink>
                );
              })}
              <Button
                customStyle={`${commonStyle.btn} ${
                  isDark ? "bg-logIn" : "bg-[#51271d]"
                }`}
                text="Login"
              />
              <Button
                customStyle={`${commonStyle.btn} ${
                  isDark ? "bg-signUp" : "bg-[#643b32]"
                }`}
                text="Sign up"
              />
            </ul>

            {isDark ? (
              <IoMoonSharp
                className={commonStyle.mode}
                onClick={() => setIsDark(false)}
              />
            ) : (
              <IoSunny
                className={commonStyle.mode}
                onClick={() => setIsDark(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
