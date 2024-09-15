import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const OfficeLocation = ({ location, address, isOpen, onToggle }) => {
  const { isLightMode } = useTheme(); // Access the theme

  return (
    <div className={`border ${isLightMode ? ' border-customBlue' : 'border-customBlue'} rounded-lg mb-4`}>
      <div className={`flex justify-between items-center p-4 cursor-pointer ${isLightMode ? 'bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-gray-800'}`} onClick={onToggle}>
        <h3 className={`text-lg font-semibold ${isLightMode ? 'text-black' : 'text-white'}`}>{location}</h3>
        <button className={`bg-customBlue text-white w-10 h-10 text-xl rounded-full flex items-center justify-center`}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className={`p-4  border-t ${isLightMode ? 'border-blue-300' : 'border-gray-700'} text-xl font-normal`}>
          <p className={`mb-4 text-justify ${isLightMode ? 'text-black' : 'text-white'}`}>{address}</p>
          <button className={`bg-customBlue text-white px-4 py-2 rounded`}>Contact Us</button>
        </div>
      )}
    </div>
  );
};

const TechSysOffices = () => {
  const [openOffice, setOpenOffice] = useState('Embassy Tech Park, Bengaluru. India');
  const { isLightMode } = useTheme(); // Access the theme

  const offices = [
    {
      location: 'DCB Bank, Andheri Tech Park, Mumbai. India',
      address: 'Adiya Business Solutions, Office1: Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai'
    },
    {
      location: 'K.E polytechnic college',
      address: 'Adiya Business Solutions ,Office 2: c-22 paradise garden bakshi talaav sitapur road near K.E polytechnic college lucknow uttar pradesh'
    },
    {
      location: 'Sanjay nagar, baroda bangalore',
      address: 'Adiya Business Solutions,Office 3: 412, sanjay nagar bansu appartment near bank of baroda bangalore'
    }
  ];

  return (
    <div className={`w-10/12 mx-auto p-6 ${isLightMode ? 'bg-white' : 'bg-gray-900'}`}>
      <h2 className={`text-blue-800 text-2xl font-medium mb-2 ${isLightMode ? 'text-customBlue' : 'text-customBlue'}`}>Our Offices</h2>
      <h1 className={`text-5xl font-bold mb-2 ${isLightMode ? 'text-black' : 'text-white'}`}>Now We're In 3 States.</h1>
      <h2 className={`text-blue-800 text-2xl mb-4 font-medium ${isLightMode ? 'text-customBlue' : 'text-customBlue'}`}>Visit Us</h2>
      <p className={`mb-6 font-normal text-xl ${isLightMode ? 'text-black' : 'text-white'}`}>
        We're here to bring financial stability, improve the economy. Leave
      </p>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          {offices.map((office) => (
            <OfficeLocation
              key={office.location}
              location={office.location}
              address={office.address}
              isOpen={openOffice === office.location}
              onToggle={() => setOpenOffice(openOffice === office.location ? '' : office.location)}
            />
          ))}
        </div>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17989.62284124611!2d72.84831212628292!3d19.11924557618693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725878244840!5m2!1sen!2sin"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TechSysOffices;
