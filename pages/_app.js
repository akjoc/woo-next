// pages/_app.js
import '../styles/global.css'; // Adjust the path as necessary
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
