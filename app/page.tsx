/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#89E5E0] min-h-screen pt-[70px]">
      <div className="container mx-auto min-h-screen">
        <img
          src="/wave.svg"
          alt=""
          className="absolute top-[10%] left-0 w-full object-cover"
        />
        <div className="relative mx-auto flex justify-center items-center">
          <div className="absolute -bottom-3 bg-white left-[51%] -translate-x-1/2 w-[93%] lg:w-[70%] h-full border-2 border-black rounded-[7px] z-0 flex justify-center items-center"></div>
          <div className="border-2 border-black bg-white relative z-10 rounded-[7px] flex justify-between items-center overflow-hidden w-[90%] lg:w-[70%] py-[50px] lg:py-[16px] px-[16px] lg:px-[140px]">
            <img src="/logo.svg" alt="logo" className="" />
            <nav className="flex items-center gap-[28px] text-lg italic font-medium">
              <Link href="/">Home</Link>
              <Link href="/">Info</Link>
              <Link href="/">Mint details</Link>
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

        <div className="mt-[150px] relative z-10 flex justify-center items-center">
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
          <img src="/text.svg" alt="" />
        </div>
      </div>
      <div className="relative z-10 -mt-[480px]">
        <img src="/hero.svg" className="w-full h-full object-cover" alt="" />
      </div>

      {/* Slider Section */}
      <div className="relative z-10 bg-white overflow-hidden -mt-[8%]">
        {/* Repeating Stable Pattern */}
        <div className="relative py-10 border-y-2 overflow-hidden">
          <div className="flex gap-11 animate-scroll whitespace-nowrap">
            {/* First set */}{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />
            {/* Duplicate set for seamless loop */}{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />{" "}
            <img src="/wordmark.svg" alt="Stable" className="" />
          </div>
        </div>
      </div>

      <div className="pt-[112px] container mx-auto">
        <div className="relative mx-auto flex justify-center items-center">
          <div className="absolute -top-8 bg-white left-[55%] -translate-x-1/2 w-[93%] lg:w-[75%] h-full border-2 border-black rounded-[7px] lg:rounded-[24px] z-0 flex justify-center items-center"></div>
          <div className="border-2 border-black bg-white relative z-10 rounded-[7px] lg:rounded-[24px] overflow-hidden w-[90%] lg:w-[77%] lg:p-[120px] lg:pb-[250px]">
            <p className="text-[40px] relative z-10">
              <img src="/logo.svg" alt="logo" className="absolute right-0" />{" "}
              <img
                src="/logo.svg"
                alt="logo"
                className="absolute bottom-0 right-[30%]"
              />
              The StableOG Collection is a limited 5,000-piece NFT series
              designed to unite all stablecoin enthusiasts and drive adoption
              across the Stable ecosystem.
            </p>
            <p className="text-[35px] leading-[58px] relative z-10 pt-10">
              Each NFT isn’t just art, it’s a symbol of belief in stability as
              the foundation of Web3 finance.
            </p>
            <p className="text-[35px] leading-[58px] relative z-10">
              <img
                src="/logo.svg"
                alt="logo"
                className="absolute bottom-0 right-[42%]"
              />{" "}
              By minting directly on Stable, holders inherently support the
              network while benefiting from one
            </p>
            <p className="text-[35px] leading-[58px] relative z-10">
              <img src="/logo.svg" alt="logo" className="absolute -right-7" />{" "}
              key advantage: the value of their asset remains stable , not
              volatile.
            </p>

            <img src="/star1.svg" className="absolute bottom-0 left-0" alt="" />
            <img
              src="/star3.svg"
              className="absolute bottom-0 right-0"
              alt=""
            />
            <img
              src="/star2.svg"
              className="absolute bottom-0 right-[45%]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" mt-[70px] container mx-auto ml-[15%]">
        <div className="bg-white container py-[180px] w-[20%] rounded-[12px] border-2 border-black"></div>
      </div>

      <footer className="mt-[120px] pb-[90px] relative">
        <img
          src="/foot.svg"
          alt=""
          className="absolute bottom-0 right-0 z-10"
        />
        <div className="container mx-auto ml-[10%] relative z-0 w-[70%]">
          <img src="/footerBg.svg" alt="" />
          <div className="absolute flex flex-col gap-[40px] top-[85px] left-[120px]">
            <p className="lg:text-[105px] leading-[100px]">
              Join The <br /> Community
            </p>
            <div className="flex gap-10 items-center">
              <img src="/discord.svg" alt="" />
              <img src="/x.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
