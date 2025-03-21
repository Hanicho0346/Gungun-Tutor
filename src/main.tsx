import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      900: "#004A38",
      800: "#005A48",
      700: "#006A54",
      600: "#007A5C",
      500: "#007D5C",
      400: "#009070",
      300: "#00A384",
      200: "#00B698",
      100: "#00C9AC",
      50: "var(--almost-white-primary)",
    },
    background: {
      primary: "var(--bg-primary)",
      secondary: "white",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {  // 1
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem", // 2    
  },
  fontWeights: {    

    normal: 400,
    medium: 500,
    bold: 700,
  },  
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
