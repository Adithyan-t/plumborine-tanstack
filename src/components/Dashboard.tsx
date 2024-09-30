import { Outlet, useLocation } from '@tanstack/react-router';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Welcome from './Home/Welcome';
import About_plumborine360 from './Home/About_plumborine360';
import Variety_services from './Home/Variety_services';
import Why_Choose_us from './Home/Why_Choose_us';
import Services from './Home/Services';
import Stripe from './Home/Stripe';
import Partners from './Home/Partners';
import Footer from './Home/Footer';
import Layout from './Layout';

interface RightContentProps {
  setHeading: (heading: string) => void;
}

const RightContent: React.FC<RightContentProps> = ({ setHeading }) => {
  const location = useLocation();

  let content;

  switch (location.pathname) {
    case '/Admin/Dashboard/Home/WelcomeForm':
      content = <Welcome />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/Aboutplumborine360':
      content = <About_plumborine360 />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/Variety_services':
      content = <Variety_services />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/Why_Choose_us':
      content = <Why_Choose_us />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/Services':
      content = <Services />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/Stripe':
      content = <Stripe />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/OurPartners':
      content = <Partners />;
      setHeading('Home Items');
      break;
    case '/Admin/Dashboard/Home/Footer_With_CTA':
      content = <Footer />;
      setHeading('Home Items');
      break;
    default:
      content = null;
      setHeading('');

      break;
  }

  return <>{content}</>;
};

const Dashboard: React.FC = () => {
  const [heading, setHeading] = useState<string>('');

  return (
    <div className="flex flex-grow min-h-screen text-white bg-blue-800">
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
        {/* <h1>{heading}</h1> */}
        <Layout heading={heading}>
          <RightContent setHeading={setHeading} />
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
