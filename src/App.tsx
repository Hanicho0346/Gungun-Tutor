import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import { useLocation } from "react-router-dom";
import TutorDashboard from "./components/TutorDashboard";
import StudentDashboard from "./components/StudentDashboard";

function Layout() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/not-found";
  const issignUp=location.pathname==="/signup"

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {!isNotFoundPage &&!issignUp && <NavBar />}
      <Box flex="1" w="100%">
        <Outlet />
      </Box>
      {!isNotFoundPage&&!issignUp && <Footer />}
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
       element:<TutorDashboard/>
      },
      {
        path:"/find-tutor",
        element:<StudentDashboard/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;