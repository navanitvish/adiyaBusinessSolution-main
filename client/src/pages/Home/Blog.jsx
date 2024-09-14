import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { blogPosts } from '../../configs/blog';
import { useTheme } from '../../context/ThemeContext';

const BlogCard = ({ img, image, category, title, date, readTime, excerpt, accessibility }) => {
  const { isLightMode } = useTheme();

  return (
    <div
      className={`w-full rounded-xl overflow-hidden shadow-lg ${isLightMode ? 'bg-white' : 'bg-gray-800'}`}
      style={{
        backgroundImage: accessibility.hideImages ? "" : `url(${img})`,
      }}
    >
      <img className="w-full h-48 sm:h-56 md:h-64 object-cover" src={image} alt={title} />
      <div className={`px-4 sm:px-6 py-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
        <span className={`inline-block ${isLightMode ? 'bg-customBlue' : 'bg-customBlue'} rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}>
          {category}
        </span>
        <div className="font-bold text-lg sm:text-xl mb-2">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </div>
        <p className={`mb-4 text-sm sm:text-md font-normal ${isLightMode ? 'text-black' : 'text-gray-300'}`}>
          {excerpt.length > 150 ? `${excerpt.substring(0, 150)}...` : excerpt}
        </p>
        <div className={`flex items-center text-customBlue text-xs sm:text-sm font-normal`}>
          <Clock className="w-4 h-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

const BlogCardGrid = () => {
  const { isLightMode } = useTheme();
  const { accessibility } = useSelector((store) => store.app);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <div className={`${isLightMode ? 'bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-gray-900'}`}>
     <div className="w-10/12 mx-auto px-4 sm:px-6 md:px-8 py-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-8 ${isLightMode ? 'text-black' : 'text-white'}`} data-aos="fade-up">
          Blog
        </h1>

        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0" data-aos="fade-right">
            <img
              src="https://cdn.dribbble.com/userupload/15526232/file/original-acb3c622ef876668a94f42bebc2de2d4.jpg?resize=1504x1128&vertical=center"
              alt="Description"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-3/5 lg:pl-8" data-aos="fade-left">
            <span className={`inline-block ${isLightMode ? 'bg-darkModeButtonHover' : 'bg-customBlue'} rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}>
              OUR BLOG
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isLightMode ? 'text-black' : 'text-white'}`}>
              Innovative <span className="text-customBlue">B</span>usiness <span className="text-customBlue">Solutions</span> for a <span className="text-customBlue">Digital</span> Future
            </h2>
            <p className={`text-left font-normal text-md sm:text-xl mb-4 ${isLightMode ? 'text-black' : 'text-gray-300'}`}>
              Check back every week for inspiring articles to help build and expand your digital presence.
            </p>
            <button className={`w-full sm:w-auto hover:bg-customBlueHover border-2 font-normal px-6 py-2 rounded-lg ${isLightMode ? 'bg-customBlue text-lightText hover:text-lightText' : 'bg-customBlue text-gray-900 hover:bg-customBlueHover'}`}>
              Learn More
            </button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div data-aos="fade-up" key={index}>
              <BlogCard {...post} accessibility={accessibility} />
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default BlogCardGrid;