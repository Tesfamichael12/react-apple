import React from "react";
import "./commonResources/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Header";
import Footer from "./Footer";
import AlertSection from "./AlertSection";
import IpadPro from "./IpadPro";
import MacBookAir from "./MacBookAir";
import Iphone11Pro from "./Iphone11Pro";
import Iphone11 from "./Iphone11";
import AppleTVAndWatchs from "./AppleTVAndWatchs";
import ArcadeAndAppleCard from "./ArcadeAndAppleCard";
import YouTubeVideos from "./YoutubeVideos";
import Iphone from "./Iphone";
import IphoneDetail from "./IphoneDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AlertSection />
              <IpadPro />
              <MacBookAir />
              <Iphone11Pro />
              <Iphone11 />
              <AppleTVAndWatchs />
              <ArcadeAndAppleCard />
              <YouTubeVideos />
            </>
          }
        />
        <Route path="/iphones" element={<Iphone />} />
        <Route path="/iphones/:id" element={<IphoneDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
