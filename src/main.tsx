import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/global.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
