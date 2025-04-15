import React from "react";
import ReactDOM from "react-dom/client";
import "./commonResources/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Footer from "./Footer";
import AlertSection from "./AlertSection";
import IpadPro from "./IpadPro";
import MacBookAir from "./MacBookAir";
import Iphone11Pro from "./Iphone11Pro";
import Iphone11 from "./Iphone11";
import AppleTVAndWatchs from "./AppleTVAndWatchs";
import ArcadeAndAppleCard from "./ArcadeAndAppleCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <AlertSection />
    <IpadPro />
    <MacBookAir />
    <Iphone11Pro />
    <Iphone11 />
    <AppleTVAndWatchs />
    <ArcadeAndAppleCard />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
