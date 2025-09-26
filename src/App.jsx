import React, { useEffect, useState } from "react";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero";

const App = () => {

  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to ", text2:"your passions"}
  ]

  const [herocount, sethercount] = useState(2);
  const [playstatus, setplaystatus] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    sethercount((count) => (count === 2 ? 0 : count + 1));
  }, 3000);

  // cleanup function
  return () => clearInterval(interval);
}, []);


  return(
    <div>
      <Background playstatus={playstatus} herocount={herocount} />
      <Navbar />
      <Hero 
        setplaystatus={setplaystatus} 
        heroData={heroData[herocount]} 
        herocount={herocount} 
        sethercount={sethercount} 
        playstatus={playstatus}
      /> 
    </div>
  )
}

export default App;
