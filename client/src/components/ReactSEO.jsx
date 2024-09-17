import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

const ReactSEO = ({
  title,
  description,
  thumbnail,
  themeColor,
  canonicalUrl,
  keywords,
  twitterUsername,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook / Pinterest */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      {/* Twitter */}
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:site" content={twitterUsername} />
      <meta property="twitter:image" content={thumbnail} />
      <meta property="twitter:card" content="summary_large_image" />
      {/* GENERAL */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={themeColor} />
      {/* FAVICONS */}
      <link rel="icon" href="/client/public/adiya-logo.jpeg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav-icons/favicon-16x16.png"
      />
      {/* Add other favicon links here */}
    </Helmet>
  );
};

export default ReactSEO;
ReactSEO.propTypes = {
  twitterUsername: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  thumbnail:PropTypes.string.isRequired,
  themeColor:PropTypes.string.isRequired,
  canonicalUrl:PropTypes.string.isRequired,
  keywords:PropTypes.string.isRequired,
};