import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { useLocation } from "react-router-dom";


import BecomeTutor from "./components/Tutors/BecomeTutor";
import FindTutor from "./components/Tutors/FindTutor";
import ContactUs from "./components/Contact/ContactUs";

function Layout() {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/become-tutor", "/findtutor","/contact-us"];
  const isValidRoute = validRoutes.includes(location.pathname);
  const issignUp = location.pathname === "/signup";

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {isValidRoute && !issignUp && <NavBar />}

      <Box flex="1" w="100%">
        <Outlet />
      </Box>
      {isValidRoute && !issignUp && <Footer />}
    </Box>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/not-found",
        element: (
          <Box minH="100vh">
            <NotFound />
          </Box>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/become-tutor", 
       element:<BecomeTutor/>
      },
    
      {
        path:"/findtutor",
        element:<FindTutor/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;