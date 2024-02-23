"use client";

import logo from "../../assets/images/svg/logo.svg";

import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-header shadow-md fixed bottom-0 flex flex-row items-center justify-between w-full h-[4vw] box-border px-[5vw] text-sm">
      <div className="flex items-center gap-[2vw]">
        <Image src={logo} alt="UFBA Enhacer" width={30} height={30} />
        <p className="font-semibold items-center">
          Todos os direitos reservados - 2024
        </p>
      </div>
      <div className="flex">
        <p className="mr-1">Desenvolvido por </p>
        <p>
          <a
            className="font-semibold hover:underline"
            href="https://github.com/brnocorreia"
            target="_blank"
          >
            Bruno Correia
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
