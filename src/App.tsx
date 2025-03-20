import React from 'react'
import { BrowserRouter as Routes,Route } from 'react-router-dom'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'
import SignUp from './components/SignUp'
import Main from './components/Main'
import NotFound from './components/NotFound'
function App() {
return (
 <Routes>
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/" element={<Main />} />
  <Route path="*" element={<NotFound />} />
 </Routes>
  
)
}

export default App
