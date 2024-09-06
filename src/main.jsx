import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";

// Import your publishable key
const PUBLISHABLE_KEY =
  "pk_test_c2ltcGxlLWxhZHlidWctMzIuY2xlcmsuYWNjb3VudHMuZGV2JA"; //"import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </ClerkProvider>
  </BrowserRouter>
);