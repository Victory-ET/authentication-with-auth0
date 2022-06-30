import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Dashboard";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Auth0Provider
              domain=""
              clientId=""
              redirectUri={window.location.origin}
            >
              <App />
            </Auth0Provider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Auth0Provider
              domain=""
              clientId=""
              redirectUri={window.location.origin}
            >
              <Dashboard />
            </Auth0Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
