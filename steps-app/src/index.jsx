import { StrictMode } from "react"; // Import StrictMode from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Use default import if App.jsx has export default

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App /> {/* Pass messages as a prop */}
  </StrictMode>
);
