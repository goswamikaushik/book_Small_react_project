import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const e = document.getElementById("root");
const root = ReactDom.createRoot(e);

root.render(<App />);
