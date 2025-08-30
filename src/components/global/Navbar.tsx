"use client";

import Image from "next/image";
import logo from "../../assets/icons/global/resizedv2.png";
import Link from "next/link";

import { RiShoppingBasket2Fill, RiShoppingBagFill } from "@remixicon/react";
import { useEffect, useState } from "react";
import ButtonCn from "./Form/ButtonCn";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const { scrollY } = window;
    setScrollPosition(scrollY);

    window.addEventListener("scroll", function () {
      const { scrollY } = this.window;
      setScrollPosition(scrollY);
    });

    return () => {
      window.addEventListener("scroll", function () {
        const { scrollY } = this.window;
        setScrollPosition(scrollY);
      });
    };
  }, []);

  return (
    <nav
      className={`navigation w-full @container  fixed z-[99999] top-0 left-0 p-4 ${scrollPosition > 100 ? "active" : ""}`}
    >
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
          <div className="nav-action-icon flex items-center gap-x-5">
            <Link href="/shop/cart">
              <button
                className={`${scrollPosition > 100 ? "text-primary-clr" : "text-white"} relative flex gap-x-2 items-center text-[0.87rem]`}
              >
                <RiShoppingBasket2Fill size={20} />
                <span
                  className={`absolute -top-2 left-3 flex justify-center items-center ${scrollPosition > 100 ? "text-white" : ""} w-[16px] h-[16px] rounded-full bg-primary-clr`}
                >
                  0
                </span>
              </button>
            </Link>
            <Link href="/shop/cart">
              <button
                className={`${scrollPosition > 100 ? "text-primary-clr" : "text-white"} relative flex gap-x-2 items-center text-[0.87rem]`}
              >
                <RiShoppingBagFill size={20} />
              </button>
            </Link>
            <div className="flex items-center gap-x-2">
              <Link href="/auth/login">
                <ButtonCn
                  size="sm"
                  title="Sign In"
                  loading={false}
                  type="button"
                  isPrimary={true}
                  variant="outline"
                  mode="dark"
                />
              </Link>
              <Link href="/auth/register">
                <ButtonCn
                  size="sm"
                  title="Sign Up"
                  loading={false}
                  type="button"
                  isPrimary={true}
                  mode="dark"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
