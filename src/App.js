import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // default duration for all animations
      once: true,       // animate only the first time you scroll to them
      offset: 100,      // trigger point
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;
