
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
