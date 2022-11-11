import React from "react";
import logo from "../assets/Vector.png";
import mockup from "../assets/mockup.png";
import scroll from "../assets/scroll.png";
import line1 from "../assets/line1.png";
import line2 from "../assets/line2.png";
import line3 from "../assets/line3.png";
import socialGirls from "../assets/girls-with-phones.png";
import businessman from "../assets/businessman.png";
import man from "../assets/man.png";
import google from "../assets/google.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-fixed bg-black h-full">
      <header className="flex items-center justify-between  text-white h-24 px-24 py-8">
        <div className="flex items-center">
          <img src={logo} className="h-14" alt="" />
          <p className="ml-4"></p>
        </div>
        <ul className="flex gap-3">
          <li className="my-auto">
            <button>
              <Link to="/dashboard">Login</Link>
            </button>
          </li>
          <li>
            <button className="bg-[#6B36FF] px-5 py-2 my-auto rounded-md">
              Sign Up for free
            </button>
          </li>
        </ul>
      </header>
      {/* Hero */}
      <div class="w-full mt-28">
        <div class="flex flex-col justify-center items-center">
          <div class="text-center justify-center text-white px-6 py-6 md:py-0 md:px-12  mb-12">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-5 capitalize">
              Discover trends while it <br />
              <span class="text-[#6B36FF]"> trending</span>
            </h2>
            <p class="text-lg font-semibold text-slate-400 w-3/4 mx-auto tracking-tight leading-tight mb-5 ">
              Have you ever been surfing the web and got crazy over something?
              Good. So have we. That's why we created keiko, to help discover
              that new thing before everyone else does.
            </p>
            <button className="bg-gradient-to-r from-[#E20484] to-[#7725C0] font-semibold py-3 px-6 rounded-full mt-5">
              Get Started
            </button>
          </div>
          <img className="h-3/4" src={mockup} alt="" />
          <img className="h-3/4 mt-12 mb-12" src={scroll} alt="" />
        </div>
      </div>
      {/* Audience */}
      <div class="w-full">
        <div class="flex flex-col justify-center items-center">
          <img className="h-3/4 mt-12 mb-12" src={line1} alt="" />
          <div class="text-center text-white px-6 py-6 md:py-0 md:px-12  mb-12">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-5 capitalize">
              Grow your
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0079db] to-[#02c1d3]">
                {" "}
                Audience
              </span>
            </h2>
            <p class="text-lg font-semibold text-slate-400 w-3/4 mx-auto tracking-tight leading-tight mb-5 ">
              Always knows the latest trends on internet and how they spread
              through the social network, making it easier to find your right
              audience
            </p>
          </div>
          <div className="flex gap-12 justify-center items-center">
            <img src={socialGirls} className="h-[31rem]" alt="" />
            <div className="flex flex-col gap-5 w-96">
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">
                  Social Media Tracking
                </h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  It will help you manage your social media presence and make
                  sure you never miss a new trend.
                </p>
              </div>
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">Title</h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  description
                </p>
              </div>
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">Title</h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  description
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center w-3/5 mx-auto mt-8 rounded-lg bg-slate-500/20 p-5 text-white">
            <h3 className="font-bold">We track the main social media</h3>
            <div className="flex p-2 mt-2 w-3/4 mx-auto gap-5 justify-between">
              <div className="">
                <img src={logo} alt="" />
                <p className="font-semibold text-slate-300">Google</p>
              </div>
              <div className="">
                <img src={logo} alt="" />
                <p className="font-semibold text-slate-300">Twitter</p>
              </div>
              <div className="">
                <img src={logo} alt="" />
                <p className="font-semibold text-slate-300">Reddit</p>
              </div>
              <div className="">
                <img src={logo} alt="" />
                <p className="font-semibold text-slate-300">Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Business */}
      <div class="w-full">
        <div class="flex flex-col justify-center items-center">
          <img className="h-3/4 mt-12 mb-12" src={line2} alt="" />
          <div class="text-center text-white px-6 py-6 md:py-0 md:px-12  mb-12">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-5 capitalize">
              Grow your
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F1007C] to-[#7725C0]">
                {" "}
                Business
              </span>
            </h2>
            <p className="text-lg font-semibold text-slate-400 w-3/4 mx-auto tracking-tight leading-tight mb-5 ">
              The key to success online is watching what's growing and then
              acting quickly. That's why we produce keiko, your daily outlook on
              everything you need to know about the trends of tomorrow.
            </p>
          </div>
          <div className="flex gap-12 justify-center items-center">
            <div className="flex flex-col gap-5 w-96">
              <div className="text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">
                  stay up to date
                </h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  Having the latest information is a huge advantage. If you are
                  looking to maintain a competitive edge, keiko has everything
                  you need on trending topics worldwide.
                </p>
              </div>
              <div className="text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">
                  Hidden Facebook Interests
                </h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  The keiko platform allows to improve the performance of
                  marketing campaigns by assuring it is aligned with the right
                  trends and social behavior.
                </p>
              </div>
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">Title</h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  description
                </p>
              </div>
            </div>
            <img src={businessman} className="h-[31rem]" alt="" />
          </div>
        </div>
      </div>
      {/* Authority */}
      <div class="w-full">
        <div class="flex flex-col justify-center items-center">
          <img className="h-3/4 mt-12 mb-12" src={line3} alt="" />
          <div class="text-center text-white px-6 py-6 md:py-0 md:px-12  mb-12">
            <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-5 capitalize">
              Grow your
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#E5B924] to-[#FF534C]">
                {" "}
                Authority
              </span>
            </h2>
          </div>
          <div className="flex gap-12 justify-center items-center">
            <img src={man} className="h-[36rem]" alt="" />
            <div className="flex flex-col gap-5 w-96">
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">Title</h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  It is imporannant for every company to follow the trends in
                  todays market as it can help them improve their sales.
                </p>
              </div>
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">Title</h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  description
                </p>
              </div>
              <div className=" text-white w-full rounded-md p-5">
                <img src={google} className="w-14 mb-3" alt="" />
                <h4 className="font-bold text-lg -mb-1 capitalize">Title</h4>
                <p className="text-md font-semibold text-slate-400 text-justify">
                  description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
