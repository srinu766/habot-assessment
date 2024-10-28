import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import JoinComponent from "./components/JoinComponent";
import VideoInfoComponent from "./components/VideoInfoComponent";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import FindSuppliersSection from "./components/FindSuppliersSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainPage />
      <JoinComponent />
      <VideoInfoComponent/>
      <FindSuppliersSection/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
};

export default App;
