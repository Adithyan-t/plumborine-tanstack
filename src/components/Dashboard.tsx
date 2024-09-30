import { Outlet, useLocation } from '@tanstack/react-router';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Layout from './Layout';
import Welcome from './Home/Welcome';
import About_plumborine360 from './Home/About_plumborine360';
import Variety_services from './Home/Variety_services';
import Why_Choose_us from './Home/Why_Choose_us';
import Services from './Home/Services';
import Stripe from './Home/Stripe';
import Partners from './Home/Partners';
import Footer from './Home/Footer';

interface Content {
  component: JSX.Element | null;
  heading: string;
}

const contentMap: Record<string, Content> = {
  '/Admin/Dashboard/Home/WelcomeForm': { component: <Welcome />, heading: 'Home Items' },
  '/Admin/Dashboard/Home/Aboutplumborine360': {
    component: <About_plumborine360 />,
    heading: 'Home Items',
  },
  '/Admin/Dashboard/Home/Variety_services': {
    component: <Variety_services />,
    heading: 'Home Items',
  },
  '/Admin/Dashboard/Home/Why_Choose_us': { component: <Why_Choose_us />, heading: 'Home Items' },
  '/Admin/Dashboard/Home/Services': { component: <Services />, heading: 'Home Items' },
  '/Admin/Dashboard/Home/Stripe': { component: <Stripe />, heading: 'Home Items' },
  '/Admin/Dashboard/Home/OurPartners': { component: <Partners />, heading: 'Home Items' },
  '/Admin/Dashboard/Home/Footer_With_CTA': { component: <Footer />, heading: 'Home Items' },
};

const Dashboard: React.FC = () => {
  const [heading, setHeading] = useState<string>('');
  const [isVisible, setVisible] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const currentContent = contentMap[location.pathname] || { component: null, heading: '' };
    setHeading(currentContent.heading);
    setVisible(true);
  }, [location.pathname]);

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
        <Layout heading={heading} isVisible={isVisible} setVisible={setVisible}>
          {contentMap[location.pathname]?.component || null}
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
