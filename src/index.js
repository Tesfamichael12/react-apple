import React from "react";
import ReactDOM from "react-dom/client";
import "./commonResources/css/bootstrap.css";
import "./commonResources/css/styles.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
