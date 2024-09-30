import { Link, Outlet } from '@tanstack/react-router';
import React from 'react';
import page from '../assets/page.png';

const Home = () => {
  return (
    <>
      <div className="pt-3">
        <div className=" text-2xl font-bold font-grotesk leading-[1.91]"> Title</div>
        <ul className="mt-2 ">
          <Link
            to="/Admin/Dashboard/Home/WelcomeForm"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-y   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px] " />
              <p>Welcome</p>
            </div>
          </Link>
          <Link
            to="/Admin/Dashboard/Home/Aboutplumborine360"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>About plumborine 360</p>
            </div>
          </Link>
          <Link
            to="/Admin/Dashboard/Home/Variety_services"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>Wide variety of Services</p>
            </div>
          </Link>{' '}
          <Link
            to="/Admin/Dashboard/Home/Why_Choose_us"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>Why Choose Us ?</p>
            </div>
          </Link>
          <Link
            to="/Admin/Dashboard/Home/Services"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>Services</p>
            </div>
          </Link>
          <Link
            to="/Admin/Dashboard/Home/Stripe"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>Stripe</p>
            </div>
          </Link>
          <Link
            to="/Admin/Dashboard/Home/OurPartners"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>Our partners</p>
            </div>
          </Link>
          <Link
            to="/Admin/Dashboard/Home/Footer_With_CTA"
            className="flex justify-between gap-5 px-2 py-4 text-lg hover:bg-[#2a5485]  border-b   border-[#2a5485] "
          >
            <div className="flex items-center justify-center gap-5 text-2xl font-bold  leading-[1.91] font-grotesk">
              <img src={page} alt="" className="w-[18px] h-[18px]" />
              <p>Footer with a CTA</p>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Home;
