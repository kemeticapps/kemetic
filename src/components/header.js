import React from "react";
import Button from "./button";
import { Link } from "react-scroll";
import Logo from "../images/logos/logo.svg";

const Header = () => {
  const navigation = [
    { name: "Portfolio", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];
  return (
    <header>
      <div className="container mx-auto navbar">
        <div className="flex py-6 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
         
              <img
          alt="Logo"
          src={Logo}
          className="logo"
        />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-6 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 px-4">
                  {item.name}
                </Link>
              ))}
            </div>
            <Button label="CONTACT" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
