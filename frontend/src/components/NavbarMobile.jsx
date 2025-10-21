import { NavLink } from "react-router";
import { menuList } from "../constants/menuList";
import { TbXboxXFilled } from "react-icons/tb";
import { useContext } from "react";
import { Theme } from "../context/Theme";
import Button from "../ui/Button";

const NavbarMobile = ({ isOpen, setIsOpen }) => {
  const [isDark] = useContext(Theme);
  const commonBtnStyle = `w-1/2 py-2 400px:text-xl ${isDark && "text-white"}`;
  return (
    <div
      className={`absolute top-4 left-6 ${
        isDark ? "bg-editorCard" : "features-gradient"
      } rounded-xl 400px:w-72 w-64 aspect-square md:hidden p-4 ${
        !isOpen && "hidden"
      }`}
    >
      <div className="flex justify-end mb-4">
        <TbXboxXFilled
          className={`400px:text-4xl text-3xl ${
            isDark ? "text-logIn" : "i text-red-800"
          } cursor-pointer`}
          onClick={() => setIsOpen(false)}
        />
      </div>
      <ul className="flex flex-col gap-4">
        {menuList.map((el) => {
          const { id, to, title } = el;
          return (
            <NavLink
              to={to}
              key={id}
              className={({ isActive }) =>
                `cursor-pointer 400px:text-2xl text-xl ${
                  isDark
                    ? "bg-light text-textLight"
                    : "bg-primary-dark/60 text-textPrimary/80"
                }  rounded-md px-4  py-2`
              }
              onClick={() => setIsOpen(false)}
            >
              {title}
            </NavLink>
          );
        })}
      </ul>

      <div className="flex justify-between gap-2 mt-4">
        <Button
          customStyle={`${commonBtnStyle} ${
            isDark ? "bg-logIn" : "bg-[#51271d]"
          }`}
          text="Login"
          radius="rounded-md"
        />
        <Button
          customStyle={`${commonBtnStyle} ${
            isDark ? "bg-signUp" : "bg-[#643b32]"
          }`}
          text="Sign up"
          radius="rounded-md"
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
