"use client"

import Image from "next/image";
import logo from "../../assets/icons/global/resizedv2.png";
import Link from "next/link";
import navigationLinks from "@/libs/constants/navigation-links";

import { RiShoppingBasket2Fill,RiShoppingBagFill } from "@remixicon/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition,setScrollPosition] = useState<number>(0);

  useEffect(()=>{
    const { scrollY } = window;
    setScrollPosition(scrollY);

    window.addEventListener('scroll' , function(){
       const { scrollY } = this.window;
       setScrollPosition(scrollY);
    });

    return () => {
      window.addEventListener('scroll' , function(){
       const { scrollY } = this.window;
       setScrollPosition(scrollY);
    });
    }
  },[]);

  return (
    <nav className={`navigation w-full @container  fixed z-[99999] top-0 left-0 p-4 ${scrollPosition > 100 ? 'active' : ''}`}>
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Jeelcious"
            style={{ height: 40, objectFit: "cover" }}
            loading="lazy"
          />
        </Link>
        <div className="flex items-center gap-x-10">
          {/* <ul className={`flex items-center gap-x-5 ${scrollPosition > 100 ? 'text-dark-primary' : 'text-white'}`}>
            {navigationLinks.map((item, idx: number) => (
              <li key={idx}>
                <a
                  className="text-[0.87rem] font-semibold"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul> */}
          <div className="nav-action-icon flex items-center gap-x-5">
           <Link href="/shop/cart">
            <button className={`${scrollPosition > 100 ? 'text-primary-clr' : 'text-white'} relative flex gap-x-2 items-center text-[0.87rem]`}>
              <RiShoppingBasket2Fill size={20} />
              <span className={`absolute -top-2 left-3 flex justify-center items-center ${scrollPosition > 100 ? 'text-white' : ''} w-[16px] h-[16px] rounded-full bg-primary-clr`}>
                0
              </span>
            </button>
            </Link>
               <Link href="/shop/cart">
            <button className={`${scrollPosition > 100 ? 'text-primary-clr' : 'text-white'} relative flex gap-x-2 items-center text-[0.87rem]`}>
              <RiShoppingBagFill size={20} />
            </button>
            </Link>
            <div className="flex items-center gap-x-2">
             <Link href="/login">
              <button className="bg-primary-clr text-white py-1 rounded-full px-3 text-[0.75rem] font-bold">
                Sign In
              </button>
              </Link>
              <Link href="/register">
              <button className="text-primary-clr font-bold border-2 border-primary-clr text-[0.75rem] rounded-full py-1 px-3">
                Sign Up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
