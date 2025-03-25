
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import { Box } from "@chakra-ui/react";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "*";

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {!isNotFoundPage && (
        <Box w="100%">
          <NavBar />
        </Box>
      )}
      <Box flex="1" w="100%">
        {children}
      </Box>
      {!isNotFoundPage && (
        <Box w="100%">
          <Footer />
        </Box>
      )}
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Box minH="100vh">
              <NotFound />
            </Box>
          }
        />
        <Route
 path="/about"
 element={
  <Layout>
  <About />
</Layout>
 }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
