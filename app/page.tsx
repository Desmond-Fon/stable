/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed header if needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      id="home"
      className="bg-[#89E5E0] min-h-screen pt-10 lg:pt-[70px] overflow-x-hidden"
    >
      <div className="container mx-auto lg:min-h-screen">
        <img
          src="/wave.svg"
          alt=""
          className="absolute top-[6%] lg:top-[10%] left-0 w-full object-cover"
        />
        <div className="relative mx-auto hidden lg:flex justify-center items-center">
          <div className="absolute -bottom-3 bg-white left-[51%] -translate-x-1/2 w-[93%] lg:w-[70%] h-full border-2 border-black rounded-[7px] z-0 flex justify-center items-center"></div>
          <div className="border-2 border-black bg-white relative z-10 rounded-[7px] flex justify-between items-center overflow-hidden w-[90%] lg:w-[70%] py-[50px] lg:py-[16px] px-[16px] lg:px-[140px]">
            <img src="/logo.svg" alt="logo" className="" />
            <nav className="flex items-center gap-[28px] text-lg italic font-medium">
              <Link href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                Home
              </Link>
              <Link href="#info" onClick={(e) => handleNavClick(e, "#info")}>
                Info
              </Link>
              <Link
                href="#mint-details"
                onClick={(e) => handleNavClick(e, "#mint-details")}
              >
                Mint details
              </Link>
            </nav>

            <div>
              <button
                className="
        relative inline-block
        focus:outline-none
      "
              >
                {/* Back layer */}
                <span
                  className="
          absolute inset-0
          translate-x-3 translate-y-2
          border
          rounded-bl-[6px] rounded-tr-[6px] rounded-br-[3px] rounded-tl-[3px]
          border-[#008079]
          bg-transparent
        "
                  style={{
                    transform: "skewX(-20deg)",
                  }}
                />

                {/* Front layer - using transform to preserve border */}
                <span
                  className="
          relative
          inline-flex
          px-8 py-2
                    rounded-bl-[6px] rounded-tr-[6px] rounded-br-[3px]
rounded-tl-[3px]
          bg-[#89E5E0]
          border border-[#008079]
          items-center justify-center
          shadow-sm
        "
                  style={{
                    transform: "skewX(-20deg)",
                  }}
                >
                  <span
                    className="
            text-[16px]
            italic
            text-black
            tracking-tight
            font-medium
            whitespace-nowrap
          "
                    style={{
                      transform: "skewX(20deg)",
                    }}
                  >
                    Mint StableOG
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center lg:hidden px-10 relative z-50"
          ref={menuRef}
        >
          <img src="/logo.svg" alt="" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src="/hamburger.svg" alt="" />
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border-2 border-black rounded-[7px] shadow-lg w-full">
              <nav className="flex flex-col p-4 gap-4">
                <Link
                  href="#home"
                  className="text-lg italic font-medium hover:text-[#89E5E0]"
                  onClick={(e) => handleNavClick(e, "#home")}
                >
                  Home
                </Link>
                <Link
                  href="#info"
                  className="text-lg italic font-medium hover:text-[#89E5E0]"
                  onClick={(e) => handleNavClick(e, "#info")}
                >
                  Info
                </Link>
                <Link
                  href="#mint-details"
                  className="text-lg italic font-medium hover:text-[#89E5E0]"
                  onClick={(e) => handleNavClick(e, "#mint-details")}
                >
                  Mint details
                </Link>
              </nav>
            </div>
          )}
        </div>

        <div className="mt-[30px] lg:mt-[150px] relative z-10 flex justify-center items-center">
          {/* <h1
            className="text-4xl lg:text-[270px] text-center font-amsterdam leading-[150px] text-black"
            style={{
              WebkitTextStroke: "8px white",
              textStroke: "8px white",
              textShadow: "0 8px 0 #89E5E0, 0 10px 0 #89E5E0",
            }}
          >
            <span className="">stable og</span> <br />
            collection
          </h1> */}
          <img src="/text.svg" className="lg:w-auto w-[230px]" alt="" />
        </div>
      </div>
      <div className="relative z-10 -mt-[50px] lg:-mt-[480px]">
        <img src="/hero.svg" className="w-full h-full object-cover" alt="" />
      </div>

      {/* Slider Section */}
      <div className="relative z-10 bg-white overflow-hidden -mt-[8%]">
        {/* Repeating Stable Pattern */}
        <div className="relative py-3 lg:py-10 border-y-2 overflow-hidden">
          <div className="flex gap-11 animate-scroll whitespace-nowrap">
            {/* First set */}{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />
            {/* Duplicate set for seamless loop */}{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />{" "}
            <img
              src="/wordmark.svg"
              alt="Stable"
              className="lg:w-auto w-[55px]"
            />
          </div>
        </div>
      </div>

      <div id="info" className="pt-16 lg:pt-[112px] container mx-auto">
        <div className="relative mx-auto px-6 lg:px-0 flex justify-start lg:justify-center items-center">
          <div className="absolute -top-8 bg-white left-[55%] lg:left-[55%] -translate-x-1/2 w-[80%] lg:w-[75%] h-full border-2 border-black rounded-[15px] lg:rounded-[24px] z-0 flex justify-center items-center"></div>
          <div className="border-2 border-black bg-white relative z-10 rounded-[15px] lg:rounded-[24px] overflow-hidden w-[90%] lg:w-[77%] p-6 pb-[180px] lg:p-[120px] lg:pb-[250px]">
            <p className="text-2xl lg:text-[40px] relative z-10">
              <img
                src="/logo.svg"
                alt="logo"
                className="absolute w-[26px] lg:w-auto right-6 lg:right-0 top-9 lg:top-auto"
              />{" "}
              <img
                src="/logo.svg"
                alt="logo"
                className="absolute w-[26px] lg:w-auto bottom-0 right-[30%] "
              />
              The StableOG Collection is a limited 5,000-piece NFT series
              designed to unite all stablecoin enthusiasts and drive adoption
              across the Stable ecosystem.
            </p>
            <p className="text-sm lg:text-[35px] lg:leading-[58px] relative z-10 pt-10">
              Each NFT isn’t just art, it’s a symbol of belief in stability as
              the foundation of Web3 finance.
            </p>
            <p className="text-sm lg:text-[35px] lg:leading-[58px] relative z-10">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-[22px] lg:w-auto absolute bottom-0 right-0 lg:right-[42%]"
              />{" "}
              By minting directly on Stable, holders inherently support the
              network while benefiting from one
            </p>
            <p className="text-sm lg:text-[35px] lg:leading-[58px] relative z-10">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-[22px] lg:w-auto absolute bottom-0 lg:bottom-auto right-[55%] lg:-right-7"
              />{" "}
              key advantage: the value of their asset remains stable , not
              volatile.
            </p>

            <img
              src="/star1.svg"
              className="hidden lg:block lg:w-auto absolute bottom-0 left-0"
              alt=""
            />
            <img
              src="/star3.svg"
              className="hidden lg:block lg:w-auto absolute bottom-0 right-0"
              alt=""
            />
            <img
              src="/star2.svg"
              className="hidden lg:block lg:w-auto absolute bottom-0 right-[45%]"
              alt=""
            />
            <img
              src="/star1sm.svg"
              className="lg:hidden lg:w-auto absolute bottom-0 left-0"
              alt=""
            />
            <img
              src="/star3sm.svg"
              className="lg:hidden lg:w-auto absolute bottom-0 right-0"
              alt=""
            />
            <img
              src="/star2sm.svg"
              className="lg:hidden lg:w-auto absolute bottom-0 right-[45%]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        id="mint-details"
        className="mt-[64px] lg:mt-[70px] container mx-auto ml-6 lg:ml-[15%]"
      >
        <div className="bg-white container py-[150px] lg:py-[180px] w-[60%] lg:w-[20%] rounded-[12px] border lg:border-2 border-black"></div>
      </div>

      <footer className="mt-[120px] pb-[170px] lg:pb-[90px] relative">
        <img
          src="/foot.svg"
          alt=""
          className="absolute w-[70%] lg:w-auto bottom-0 right-0 z-10"
        />
        <div className="container mx-auto ml-[10%] relative z-0 w-[70%]">
          <img src="/footerBg.svg" alt="" />
          <div className="absolute flex flex-col gap-3 lg:gap-[40px] top-[22px] lg:top-[85px] left-[22px] lg:left-[120px]">
            <p className="text-[28px] lg:text-[105px] leading-[30px] lg:leading-[100px]">
              Join The <br /> Community
            </p>
            <div className="flex gap-5 lg:gap-10 items-center">
              <img src="/discord.svg" className="w-[30px] lg:w-auto" alt="" />
              <img src="/x.svg" className="w-[30px] lg:w-auto" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
