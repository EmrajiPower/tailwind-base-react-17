import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Tailwind/main.css";

import "./Tailwind/Fonts/AirbnbCerealBlack.ttf";
import "./Tailwind/Fonts/AirbnbCerealBold.ttf";
import "./Tailwind/Fonts/AirbnbCerealBook.ttf";
import "./Tailwind/Fonts/AirbnbCerealExtraBold.ttf";
import "./Tailwind/Fonts/AirbnbCerealLight.ttf";
import "./Tailwind/Fonts/AirbnbCerealMedium.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
