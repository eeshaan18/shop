// pages/_app.js
import '@/app/globals.css'; // Ensure globals.css is imported

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
