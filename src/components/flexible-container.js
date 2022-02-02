import styled, { keyframes } from 'styled-components'
import React from 'react';
import {primaryColor} from '../globals.js'
import {primaryBGColor} from '../globals.js'
import {primaryFont} from '../globals.js'



export default function CardWrapper (props) {


  return (
    <BgContainer {...props}>
        <CardContainer>
            <ContentContainer>
                <TitleWrapper> {props.title} </TitleWrapper>
                <SubtitleWrapper> {props.subtitle} </SubtitleWrapper>
                <ContentWrapper>  {props.content}  </ContentWrapper>
                <Button {...props}>{props.buttonText} </Button>
            </ContentContainer>
            <ImageContainer src ={props.imgSrc} alt={props.imgAlt} />           
        </CardContainer>
    </BgContainer>

    )
};

const BgContainer = styled.div`
        display: flex;
        height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: ${props => props.right ? "right" : "left"};
        background: ${props => props.dark ? "#444" : "white"};
        color: ${props => props.dark ? "white" : "black"};
        @media (min-width: 500px) and (max-width: 1000px) {
            justify-content: center;
          }
        @media (max-width: 500px) {
            justify-content: center;
          }
`
const CardContainer = styled.div`
        display: flex;
        flex-direction: row;
        height: 70%;
        width: 70%;
        margin: calc(10px + 5%);
        align-items: center;
        justify-content: center;
        background-color: #77a;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        @media (min-width: 500px) and (max-width: 1000px) {
            justify-content: center;
            width: calc(80% + 50px);
            flex-direction: column;
          }
        @media (max-width: 500px) {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin: 0;
            width: 85%;
            flex-direction: column;
          }
`
const ContentContainer = styled.div`
        display: inline-flex;
        float: left;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 50%;
        justify-content: center;
        // padding: 10%;
        @media (min-width: 500px) and (max-width: 1000px) {
            width: 100%;
          }
        @media (max-width: 500px) {
            width: 100%;
          }
`

    const TitleWrapper = styled.h2`
        display: inline-flex;
    `
    const SubtitleWrapper = styled.h3`
        display: inline-flex;

    `
    const ContentWrapper = styled.div`
        display: inline-flex;

    `
    const Button = styled.button`
        display: ${props => props.showButton ? "inline-flex" : "none"};;
        height: 30px;
        min-width: 100px;
        margin: 5px;
        text-align: center;
        justify-content: center;
        background-color: #77a;
        border-radius: 12px;


    `


const ImageContainer = styled.img`
        overflow: hidden;
        display: inline-flex;
        // flex-direction: row;
        height: 100%;
        width: 50%;
        object-fit: cover;
        justify-content: center;
        @media (min-width: 500px) and (max-width: 1000px) {
            justify-content: center;
            width: 100%;
          }
        @media (max-width: 500px) {
            justify-content: center;
            width: 100%;
          }

`



const Nav = styled.header`
          overflow: hidden;
          margin: 0;
          /* padding: 20px 0px 0px 0px; */
          background-color: ${primaryBGColor};
          position: sticky;
          top: 0;
          text-align: center;
          font-size: 20px;
          font-family: ${primaryFont};
          height: 50px;
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

// const containerAnimation = keyframes`
// {
// 0%{
//   background-color: #222;
// }
// 50%{
//   background-color: ${primaryColor};
//   transform: rotate(360deg);
//   clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
//   }
// 100%{
//   transform: rotate(0deg);
//   clip-path: polygon(0% 0%, 100% 0%, 50% 50%, 100% 50%, 100% 100%, 0% 100%);
//   }
// }
// `;