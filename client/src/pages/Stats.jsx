import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const NumberTicker = ({ target, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, duration / target);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span className="text-4xl font-bold">{count}+</span>;
};

const Stats = () => {
  const { isLightMode } = useTheme(); // Access the theme

  return (
    <div className={`container mx-auto px-4 py-8 ${isLightMode ? 'bg-white' : 'bg-gray-800'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full sm:w-10/12 mx-auto">
        <div className={`text-center text-xl font-medium border py-8 ${isLightMode ? 'border-black' : 'border-gray-700'} ${isLightMode ? 'text-black' : 'text-white'}`}>
          <NumberTicker target={340} />
          <p className={`text-customBlue mt-1 ${isLightMode ? 'text-customBlue' : 'text-customBlue'}`}>Projects Completed</p>
        </div>
        <div className={`text-center text-xl font-medium border py-8 ${isLightMode ? 'border-black' : 'border-gray-700'} ${isLightMode ? 'text-black' : 'text-white'}`}>
          <NumberTicker target={95} />
          <p className={`text-customBlue mt-1 ${isLightMode ? 'text-customBlue' : 'text-customBlue'}`}>Client Satisfaction</p>
        </div>
        <div className={`text-center text-xl font-medium border py-8 ${isLightMode ? 'border-black' : 'border-gray-700'} ${isLightMode ? 'text-black' : 'text-white'}`}>
          <NumberTicker target={9.5} />
          <p className={`text-customBlue mt-1 ${isLightMode ? 'text-customBlue' : 'text-customBlue'}`}>Years of Experience</p>
        </div>
        <div className={`text-center text-xl font-medium border py-8 ${isLightMode ? 'border-black' : 'border-gray-700'} ${isLightMode ? 'text-black' : 'text-white'}`}>
          <NumberTicker target={180} />
          <p className={`text-customBlue mt-1 ${isLightMode ? 'text-customBlue' : 'text-customBlue'}`}>Testimonials</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
