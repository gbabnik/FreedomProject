import styled, { keyframes } from 'styled-components'
import React from 'react';
import { Link } from "react-router-dom";
import {primaryColor} from '../globals.js'
import {primaryFont} from '../globals.js'

// const primaryColor = '#d1d1d1'

export default function Navbar () {


  return (
    <Nav>
     <Link to="/"><LogoContainer></LogoContainer></Link>
         <NavbarUL>
            <NavbarLI> <MyLink to="/">Home</MyLink> </NavbarLI>
            <NavbarLI> <MyLink to="/blog">Blog</MyLink> </NavbarLI>
            <NavbarLI> <MyLink to="/about">About</MyLink> </NavbarLI>
          </NavbarUL>
    </Nav>

)
};

const Nav = styled.header`
          overflow: hidden;
          margin: 0;
          /* padding: 20px 0px 0px 0px; */
          background-color: #111;
          position: sticky;
          top: 0;
          text-align: center;
          font-size: 20px;
          font-family: ${primaryFont};
          height: 70px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          z-index: 1;

`
const linkAnimation = keyframes`
{
0%{
  box-shadow: inset 0 0 75px 75px slategray, 0 0 0 slategray;
}
100%{
  box-shadow: inset 0 0 25px 25px transparent, 0 0 25px 25px transparent;
  }
}
`;
const MyLink = styled(Link) `
          float: left;
          background-color: #111;
          width: 87px;
          max-width: 92px;
          margin: 15px 5px 0px 7px;
          padding: 10px 0%;
          color: ${primaryColor};
          text-decoration: none;
          font-weight: bold;
          border-radius: 10px;
          &:hover {
            color: #111;
            font-size: 21px;
            background-color: ${primaryColor};
            animation: ${linkAnimation} 0.4s linear;

`
const containerAnimation = keyframes`
{
0%{
  background-color: #222;
}
50%{
  background-color: ${primaryColor};
  transform: rotate(360deg);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
100%{
  transform: rotate(0deg);
  clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 50%, 100% 100%, 0% 100%);
  }
}
`;
const LogoContainer = styled.div`
          position: absolute;
          background-color: #333;
          top: 5px;
          left: 5px;
          margin: 5px;
          padding: 0px;
          display: flex;
          overflow: hidden;
          float: left;
          min-height: 48px;
          min-width: 48px;

          /* padding: 15px 10px;
          font-size: 20px;
          font-color: #111;
          font-family: "Papyrus",  fantasy; */

          border-radius: 50%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 50%, 100% 100%, 0% 100%);
            /* clip-path: polygon(40% 0%, 60% 0%, 80% 20% , 42% 20%, 20% 42%, 20% 58%, 42% 80%, 58% 80%, 78% 58%, 55% 58%, 35% 40%, 82% 40%, 100% 58%, 60% 100%, 40% 100%, 0% 60%, 0% 40%); */
          &:hover {
            animation: ${containerAnimation} .8s ease-in-out;
`

const NavbarUL = styled.ul`
          list-style-type: none;
          margin: 0;
          padding: 0;
          padding-left: 80px;
`

const NavbarLI = styled.li`
          display: block;
          position: center;
          }
`
