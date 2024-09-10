//@flow
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import { version } from "../package.json";
import { BrowserRouter } from "react-router-dom";

const containerElement = document.getElementById("app-container");
if (containerElement) {
    const root = createRoot(containerElement);
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
