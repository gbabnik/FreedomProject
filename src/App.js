import './App.css';
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
        <Container> 
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="blog" element={<Blog />}>
                  <Route path=":id" element={<Post />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
        <Footer />     
    </Router>
  );
}



const Container = styled.div`
  min-height: 100vh;
  // display: flex;
  align-items: center;
  font-family: ${primaryFont};
  // justify-content: center;
`