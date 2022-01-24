import './App.css';
import React from 'react';
import "typeface-raleway";
import styled from 'styled-components';
import Blog from './views/blog.js';
import Home from './views/home.js';
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import {primaryFont} from './globals.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Router>          
        <Navbar />
        <Container>  
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
        </Container>
        <Footer />     
    </Router>
  );
}

const Container = styled.div`
  min-height: 100vh;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  font-family: ${primaryFont};
  // justify-content: center;
`