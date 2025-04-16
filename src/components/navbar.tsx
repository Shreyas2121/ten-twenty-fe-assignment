import { Link } from "react-router";
import { navLinks } from "../constants";
import { Button } from "./ui/button";
import IconComponent from "./icon";

const Navbar = () => {
  return (
    <nav className="bg-white px-7 py-6 md:p-10 flex items-center justify-between">
      <div className="gap-5 hidden md:flex">
        {navLinks.map((link) => {
          return (
            <Link
              className="text-black text-[14px] leading-[140%]"
              to={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between w-full md:w-auto">
        <Button variant={"outline"}>
          Contact Us <IconComponent iconName="right-arrow" className="ml-4" />
        </Button>
        <Button className="flex md:hidden" variant={"primary"}>
          <IconComponent iconName="hamburger" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
