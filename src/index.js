import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseProvider } from "./context/firebase.jsx";
import "./index.css";
import App from "./App.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FirebaseProvider>
     <App />
    </FirebaseProvider>
  </React.StrictMode>
);
