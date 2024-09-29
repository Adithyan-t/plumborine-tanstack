import React from 'react';
import layer from '../assets/layer.png';
import { Link } from '@tanstack/react-router';

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen p-5 text-white bg-blue-900 border bg-primary border-lightblue">
      <div className=" h-[103px] border-b-2 items-center flex border-lightblue">
        <h2 className="text-lg font-bold bg-lightblue w-fit  rounded-[8px]  p-2 font-grotesk ">
          CMS
        </h2>
      </div>
      <div className="pt-3">
        <span className="mt-10 text-2xl font-bold"> Collections</span>
        <ul className="mt-2 ms-5">
          <Link
            to="/Admin/Dashboard/Home"
            className="flex justify-between gap-5 px-2 py-2 text-lg hover:bg-lightblue rounded-xl"
          >
            <div className="flex items-center justify-center gap-5">
              <img src={layer} alt="" className="w-[18px] h-[18px]" />
              <p>Home</p>
            </div>

            <span>9</span>
          </Link>
          <Link
            to="/Admin/Dashboard/About"
            className="flex justify-between gap-5 px-2 py-2 text-lg hover:bg-lightblue rounded-xl"
          >
            <div className="flex items-center justify-center gap-5">
              <img src={layer} alt="" className="w-[18px] h-[18px]" />
              <p>About</p>
            </div>

            <span>9</span>
          </Link>
          <Link
            to="/Admin/Dashboard/Services"
            className="flex justify-between gap-5 px-2 py-2 text-lg hover:bg-lightblue rounded-xl"
          >
            <div className="flex items-center justify-center gap-5">
              <img src={layer} alt="" className="w-[18px] h-[18px]" />
              <p>Services</p>
            </div>

            <span>9</span>
          </Link>{' '}
          <Link to='/Admin/Dashboard/Contacts' className="flex justify-between gap-5 px-2 py-2 text-lg hover:bg-lightblue rounded-xl">
            <div className="flex items-center justify-center gap-5">
              <img src={layer} alt="" className="w-[18px] h-[18px]" />
              <p>Contacts</p>
            </div>

            <span>9</span>
          </Link>
          <Link to='/Admin/Dashboard/GetanEstimate' className="flex justify-between gap-5 px-2 py-2 text-lg hover:bg-lightblue rounded-xl">
            <div className="flex items-center justify-center gap-5">
              <img src={layer} alt="" className="w-[18px] h-[18px]" />
              <p>Get an Estimate</p>
            </div>

            <span>9</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
