import React, { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { NavLink } from "react-router-dom";
const NavLinks = [

  { id: "1", title: "General", link: "/" },
  { id: "2", title: "Business", link: "/business" },
  { id: "3", title: "Entertainment", link: "/entertainment" },
  { id: "4", title: "Health", link: "/health" },
  { id: "5", title: "Science", link: "/science" },
  { id: "6", title: "Sports", link: "/sports" },
  { id: "7", title: "Technology", link: "/technology" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className=" bg-black-gradient w-full py-[10px] sticky top-0 z-[10]">
        <nav className=" h-[5rem]  text-white flex px-1 s items-center justify-between sm:justify-start ">
          {/* <img src="/#" alt="Newsify" /> */}
          <NavLink to='/' className={`px-2 text-[24px] sm:text-[30px] sm:ml-[25px] `}>
            News<span className="text-[lightblue]">ify</span>
          </NavLink>
          <ul className="sm:flex items-center ml-[2rem] hidden justify-center ">
            {NavLinks.map((item, index) => (
              <li
                key={index}
                className="font-poppins mr-4 text-[18px] flex items-center"
              >
                <NavLink
                  className={({ isActive }) => isActive ? "selected text-dimWhite hover:text-white  no-underline" : 'text-dimWhite text-[1.4rem] hover:text-white  no-underline'}
                  to={item.link}

                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          
          

          <div className="flex z-50 sm:hidden  justify-center">
            <img
              src={`${toggle ? close : menu}`}
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className={`p-[7px]`}
              alt="cros"
            />
            <div
              className={`${toggle ? "block" : "hidden"
                } sm:hidden bg-black-gradient absolute top-20 right-2 min-w-[150px] rounded-md sidebar-ani`}
            >
              <ul className=" text-white p-5 flex flex-col items-center justify-center  ">

                {NavLinks.map((item) => (
                  <li
                    key={item.id}
                    className="py-1 text-center text-[18px] justify-center"
                  >
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
