import { Layout } from "../src/components";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react"; // Import useState and useEffect

import "@/styles/fonts.css";
import "./layout.css";
import '../src/styles/dark-mode.css'; // Import the new CSS file

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pageTitle = "Default Title", ...restPageProps } = pageProps;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect for initial load from localStorage
  useEffect(() => {
    const darkModeSaved = localStorage.getItem('darkModeEnabled');
    if (darkModeSaved) {
      const isEnabled = JSON.parse(darkModeSaved);
      setIsDarkMode(isEnabled);
      // Directly apply/remove class here too, as the other effect might not run if isEnabled is the same as initial state
      if (isEnabled) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    }
  }, []); // Empty dependency array ensures this runs only on mount

  // Effect for keydown listener (Ctrl+D)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'd') {
        event.preventDefault();
        setIsDarkMode(prevMode => !prevMode);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array, as this effect doesn't depend on any props/state from this component

  // Effect to update localStorage and HTML class when isDarkMode changes
  useEffect(() => {
    localStorage.setItem('darkModeEnabled', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]); // This effect runs whenever isDarkMode changes

  return (
    <Layout pageTitle={pageTitle}>
      <Component {...restPageProps} />
    </Layout>
  );
};

export default MyApp;
