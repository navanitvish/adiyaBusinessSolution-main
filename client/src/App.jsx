import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import ReactSEO from "./components/ReactSEO";

const SEOWrapper = () => {
  const location = useLocation();

  // Define your SEO props here
  const baseTitle = "Home - ADIYA Business Solution";
  let currentTitle = baseTitle;

  // Update title based on current rout

  const seoProps = {
    url: "https://adiya-business-solution-main.vercel.app",
    title: currentTitle,
    description:
      "Welcome to ADIYA Business Solution, your trusted partner for CRM, Website Development, and App Development.",
    thumbnail: "https://yourwebsite.com/thumbnail.jpg",
    themeColor: "#ffffff",
    canonicalUrl: `https://adiyabusinesssolution.com ${location.pathname}`,
    keywords: "business solutions, CRM, website development, app development",
    twitterUsername: "@adiyabusiness",
  };

  return <ReactSEO {...seoProps} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SEOWrapper />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:param" element={<Services />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
