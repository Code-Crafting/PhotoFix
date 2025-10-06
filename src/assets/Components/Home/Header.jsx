import LogoLight from "../../images/LogoLight.png";
import LogoDark from "../../images/LogoDark.png";
import { FiUpload } from "react-icons/fi";
import { IconContext } from "react-icons";
import Button from "../Button";
import { Link } from "react-router";

function Header() {
  const menuList = [
    {
      id: 1,
      title: "Features",
      customStyle: "hover:text-textPrimary/50",
    },
    {
      id: 2,
      title: "Pricing",
      customStyle: "hover:text-textPrimary/50",
    },
  ];
  return (
    <div className="fixed w-full z-[9999]">
      <div className="con mt-6 grid place-items-center">
        <div className="bg-secondary-dark text-textPrimary px-6 rounded-full w-3xl flex items-center justify-between shadow-header ">
          <Link to="/">
            <img src={LogoLight} alt="logo" className="w-[130px]" />
          </Link>

          <ul className="text-textPrimary flex gap-4 items-center">
            {menuList.map((el) => (
              <li className={`${el.customStyle} hover:cursor-pointer`}>
                {el.title}
              </li>
            ))}
            <Button customStyle="w-[80px] py-1 bg-[#51271d]" text="Login" />
            <Button customStyle="w-[80px] py-1 bg-[#643b32]" text="Sign up" />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
