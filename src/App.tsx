import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Main from "./components/maincompoenents/Main";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import { useLocation } from "react-router-dom";


import BecomeTutor from "./components/BecomeTutor";
import FindTutor from "./components/FindTutor";

function Layout() {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/become-tutor", "/findtutor"];
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