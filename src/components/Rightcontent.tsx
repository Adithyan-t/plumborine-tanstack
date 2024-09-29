import React, { useMemo } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { XIcon } from 'lucide-react';
import Homeiteam from './HomeOptions';
import AboutDetails from './AboutOptions';
import ServiceOptions from './ServiceOptions';
import Contactsiteams from './Contactsiteams';
import GetanEstimateIteams from './GetanEstimateIteams';

const RightContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Memoize routes map
  const routesMap = useMemo(
    () => ({
      '/Admin/Dashboard/Home/homeiteams': <Homeiteam />,
      '/Admin/Dashboard/About/aboutoptions': <AboutDetails />,
      '/Admin/Dashboard/Services/ServiceIteams': <ServiceOptions />,
      '/Admin/Dashboard/Contacts/ContactsIteams': <Contactsiteams />,
      '/Admin/Dashboard/GetanEstimate/GetanEstimateiteams': <GetanEstimateIteams />,
    }),
    [],
  );

  // Handle closing the modal
  const closeModal = () => {
    console.log('closed');
    navigate('/Admin/Dashboard', { replace: true });
  };

  const currentContent = routesMap[location.pathname];

  return (
    currentContent && (
      <div className="fixed top-0 right-0 w-2/3 h-full bg-[#011752] p-5 z-50 shadow-lg">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-white" aria-label="Close modal">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-4">{currentContent}</div>
      </div>
    )
  );
};

export default RightContent;
