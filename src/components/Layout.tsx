import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BsThreeDots } from 'react-icons/bs';
import { useRouter } from '@tanstack/react-router';

const Layout = ({ children, heading }) => {
  const router = useRouter();
  // const [isVisible, setVisible] = useState(true);

  const handleClose = () => {
    // Uncomment this line if you want to navigate when closing
    router.navigate({ to: '/Admin/Dashboard/Home' });
  };

  return (
    <>
      <div className="p-5 border-t border-[#2a5485] bg-[#011752] h-screen">
        <div className="h-[103px] border-b-2 flex items-center border-[#2a5485] justify-between">
          <div className="flex">
            <button className="text-2xl" onClick={handleClose}>
              <RxCross1 />
            </button>
            <h2 className="text-2xl leading-[30.62px] font-bold w-fit rounded-[8px] p-2 font-grotesk">
              {heading}
            </h2>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#2a5485] p-3 rounded-lg text-xl font-bold">
              <BsThreeDots />
            </button>
            <button className="bg-[#2a5485] p-2 rounded-lg text-xl font-bold">Preview</button>
            <button className="bg-[#8be3ff] p-2 rounded-lg text-xl text-black">Save</button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
