"use client";

import logo from "../../assets/images/svg/logo.svg";

import Image from "next/image";
import NavigationBar from "../navigation-bar/navigationBar";
import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-header sticky top-0 w-full h-16 flex items-center justify-between shadow-md">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Image src={logo} alt="UFBA Enhacer" width={50} height={50} />
            <span className="hidden font-bold sm:inline-block">
              ufba/enhacer
            </span>
          </a>
          <a className="mr-6 flex items-center space-x-2">
            <NavigationBar />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-1 md:justify-end">
          <Button variant={"ghost"} asChild>
            <Link
              href="https://github.com/brnocorreia/ufba-enhacer"
              target="_blank"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="https://www.discord.com" target="_blank">
              <DiscordLogoIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant={"ghost"}>
            <Link
              href="https://github.com/brnocorreia/ufba-enhacer"
              target="_blank"
            >
              <EnvelopeClosedIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant={"ghost"}>
            <SunIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
