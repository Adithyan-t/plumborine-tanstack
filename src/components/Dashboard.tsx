import { Outlet, useLocation } from '@tanstack/react-router';
import React from 'react';
import Sidebar from './Sidebar';
// import Homeiteam from './HomeOptions';
// import AboutDetails from './AboutOptions';
// import ServiceOptions from './ServiceOptions';
// import Contactsiteams from './Contactsiteams';
// import GetanEstimateIteams from './GetanEstimateIteams';
import Welcome from './Home/Welcome';
import About_plumborine360 from './Home/About_plumborine360';
import Variety_services from './Home/Variety_services';
import Why_Choose_us from './Home/Why_Choose_us';
import Services from './Home/Services';
import Stripe from './Home/Stripe';
import Partners from './Home/Partners';
import Footer from './Home/Footer';

const RightContent: React.FC = () => {
  const location = useLocation();

  const routesMap: { [key: string]: JSX.Element } = {
    '/Admin/Dashboard/Home/WelcomeForm': <Welcome />,
    '/Admin/Dashboard/Home/Aboutplumborine360': <About_plumborine360 />,
    '/Admin/Dashboard/Home/Variety_services': <Variety_services />,
    '/Admin/Dashboard/Home/Why_Choose_us': <Why_Choose_us />,
    '/Admin/Dashboard/Home/Services': <Services />,
    '/Admin/Dashboard/Home/Stripe': <Stripe />,
    '/Admin/Dashboard/Home/OurPartners': <Partners />,
    '/Admin/Dashboard/Home/Footer_With_CTA': <Footer />,

    // '/Admin/Dashboard/Home/Why_Choose_us': <GetanEstimateIteams />,
  };
  return routesMap[location.pathname] || null;
};

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-grow h-screen text-white bg-blue-800">
      <Sidebar />

      {/* Left Section */}
      <div className="w-1/3 p-5 border border-[#2a5485] bg-[#011752]">
        <div className="h-[103px] border-b-2 flex items-center border-[#2a5485]">
          <h2 className="text-lg font-bold bg-[#2a5485] w-fit rounded-[8px] p-2 font-grotesk">
            New Item
          </h2>
        </div>
        <Outlet />
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-[#011752]">
        <RightContent />
      </div>
    </div>
  );
};

export default Dashboard;
