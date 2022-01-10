import { useEffect } from 'react';

import { keepTheme } from '../utils/themes';
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    keepTheme();
  }, [])
  
  return(   
      <Component {...pageProps} />
    ) 
    
}

export default MyApp
