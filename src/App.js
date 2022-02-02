import React from 'react';
import "typeface-raleway";
import styled from 'styled-components';
import Blog from './views/blog.js';
import Post from './views/post.js';
import Home from './views/home.js';
import About from './views/about.js';
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import NotFound from './components/not-found.js'
import {primaryFont} from './globals.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

export default function App() {

  return (
    <Router>          
        <Navbar />
        <GlobalStyles> 
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="blog" element={<Blog />}>
                  <Route path=":id" element={<Post />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </GlobalStyles>
        <Footer />     
    </Router>
  );
}


const GlobalStyles = styled.div`
  min-height: 100vh;
  align-items: center;
  font-family: ${primaryFont};
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 20px;
  }

`