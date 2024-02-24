"use client";

import logo from "../../assets/images/svg/logo.svg";

import Image from "next/image";
import NavigationBar from "../navigation-bar/navigationBar";
import { SunIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="bg-header sticky top-0 w-full h-16 flex items-center shadow-md border-b-1 border-black">
      <div className="pl-[8vw] flex w-full">
        <a className="mr-6 flex items-center space-x-2" href="/">
          <Image src={logo} alt="UFBA Enhacer" width={50} height={50} />
          <span className="hidden font-bold sm:inline-block">ufba/enhacer</span>
        </a>
        <a className="mr-6 flex items-center space-x-2">
          <NavigationBar />
        </a>
      </div>
      <div className="pr-[4vw]">
        <Button variant={"ghost"} size={"icon"}>
          <SunIcon></SunIcon>
        </Button>
      </div>
    </header>
  );
}

export default Header;
