import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

const OfficeLocation = ({ location, address, isOpen, onToggle, index }) => {
  const { isLightMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: isLightMode ? '0 20px 40px rgba(59, 130, 246, 0.15)' : '0 20px 40px rgba(0, 0, 0, 0.5)' }}
      className={`border-2 ${isLightMode ? 'border-blue-100 hover:border-blue-300' : 'border-gray-700 hover:border-blue-500'} rounded-xl mb-4 overflow-hidden transition-all duration-300 ${isLightMode ? 'bg-white' : 'bg-gray-800'} shadow-md`}
    >
      <motion.div
        className={`flex justify-between items-center p-5 cursor-pointer relative overflow-hidden ${isLightMode ? 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50' : 'bg-gradient-to-r from-gray-800 via-gray-850 to-gray-900'}`}
        onClick={onToggle}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4 z-10">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`p-2.5 rounded-full ${isLightMode ? 'bg-blue-500' : 'bg-blue-600'} shadow-lg`}
          >
            <MapPin className="w-5 h-5 text-white" />
          </motion.div>
          <h3 className={`text-lg font-semibold ${isLightMode ? 'text-gray-800' : 'text-white'}`}>{location}</h3>
        </div>
        <motion.button
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`${isLightMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-colors`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`overflow-hidden border-t-2 ${isLightMode ? 'border-blue-100' : 'border-gray-700'}`}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="flex items-start gap-3 mb-6">
                <MapPin className={`w-5 h-5 mt-1 flex-shrink-0 ${isLightMode ? 'text-blue-500' : 'text-blue-400'}`} />
                <p className={`text-base leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                  {address}
                </p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`${isLightMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-md transition-colors`}
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${isLightMode ? 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50' : 'border-2 border-blue-500 text-blue-400 hover:bg-gray-700'} px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors`}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TechSysOffices = () => {
  const [openOffice, setOpenOffice] = useState('DCB Bank, Andheri Tech Park, Mumbai. India');
  const { isLightMode } = useTheme();

  const offices = [
    {
      location: 'DCB Bank, Andheri Tech Park, Mumbai. India',
      address: 'Adiya Business Solutions, Office1: Level 1, Gate Avenue, Next to DCB Bank, Andheri, Mumbai'
    },
    {
      location: 'K.E polytechnic college',
      address: 'Adiya Business Solutions, Office 2: c-22 paradise garden bakshi talaav sitapur road near K.E polytechnic college lucknow uttar pradesh'
    },
    {
      location: 'Sanjay nagar, baroda bangalore',
      address: 'Adiya Business Solutions, Office 3: 412, sanjay nagar bansu appartment near bank of baroda bangalore'
    }
  ];

  return (
    <div className={`w-full min-h-screen py-16 px-4 ${isLightMode ? 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isLightMode ? 'bg-blue-100 text-blue-600' : 'bg-blue-900 text-blue-300'}`}>
              Our Offices
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-6xl font-bold mb-4 ${isLightMode ? 'text-gray-900' : 'text-white'}`}
          >
            Now We're In{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              3 States
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-2xl font-semibold mb-4 ${isLightMode ? 'text-blue-600' : 'text-blue-400'}`}
          >
            Visit Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}
          >
            We're here to bring financial stability, improve the economy
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            {offices.map((office, index) => (
              <OfficeLocation
                key={office.location}
                location={office.location}
                address={office.address}
                isOpen={openOffice === office.location}
                onToggle={() => setOpenOffice(openOffice === office.location ? '' : office.location)}
                index={index}
              />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full h-[500px] lg:h-full lg:sticky lg:top-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`w-full h-full rounded-xl overflow-hidden shadow-2xl ${isLightMode ? 'border-4 border-blue-200' : 'border-4 border-gray-700'}`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17989.62284124611!2d72.84831212628292!3d19.11924557618693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725878244840!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechSysOffices;