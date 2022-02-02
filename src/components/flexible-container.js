import styled, { keyframes } from 'styled-components'
import React, {useState} from 'react';
import {primaryColor} from '../globals.js'
import {primaryBGColor} from '../globals.js'
import {primaryFont} from '../globals.js'
import { useInView } from 'react-hook-inview'
import { useInViewEffect } from 'react-hook-inview'

export default function CardWrapper (props) {

  const [titleInView, setTitleInView] = useState(false)
  // const [titleRef, titleInView] = useInView()
  const [imageRef, imageInView] = useInView()
 
  const titleRef = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setTitleInView(entry.isIntersecting)
    },
    { threshold: 0.5 },
  )

  return (
    <BgContainer {...props}>
        <CardContainer>
            <ContentContainer>
                    <TitleWrapper  ref={titleRef}> {titleInView ? props.title : '' } </TitleWrapper>
                <SubtitleWrapper> {props.subtitle} </SubtitleWrapper>
                <ContentWrapper>  {props.content}  </ContentWrapper>
                <Button {...props}>{props.buttonText} </Button>
            </ContentContainer>
            <ImageContainer ref={imageRef} src = {imageInView ? props.imgSrc : '' } alt={props.imgAlt} />           
        </CardContainer>
    </BgContainer>

    )
};


const inViewAnimation = keyframes`
{
0%{
  opacity: 0;
  transform: translate(0px, 50px);
}
100%{
  opacity: 1;
  transform: translate(0px, 0px);
  }
}
`;


const BgContainer = styled.div`
        display: flex;
        height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: ${props => props.right ? "right" : "left"};
        background: ${props => props.dark ? "#444" : "white"};
        color: ${props => props.dark ? "white" : "black"};
        @media (min-width: 550px) and (max-width: 1000px) {
          justify-content: center;
          }
        @media (max-width: 550px) {
            justify-content: center;
          }
`
const CardContainer = styled.div`
        overflow: hidden;
        display: flex;
        flex-direction: row;
        height: calc(45% + 15vw);
        max-height: 70%;
        width: 70%;
        margin: calc(10px + 5%);
        align-items: center;
        justify-content: center;
        background-color: #77a;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        @media (min-width: 550px) and (max-width: 1000px) {
            // justify-content: center;
            width: calc(85% + 50px);
            height: calc(30% + 25vw);
            max-height: calc(30% + 25vw);
            margin: 0;
          }
        @media (max-width: 550px) {
            // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin: 0;
            width: 90%;
            height: 90%;
            max-height: 90%;
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
        @media (min-width: 550px) and (max-width: 1000px) {
            // width: 100%;
          }
        @media (max-width: 550px) {
            width: 100%;
            height: 50%;
          }
`

    const TitleWrapper = styled.h2`
        display: inline-flex;
        animation: ${inViewAnimation} 1s ease-in-out;
    `
    const SubtitleWrapper = styled.h3`
        display: inline-flex;
        animation: ${inViewAnimation} 1s ease-in-out;

    `
    const ContentWrapper = styled.div`
        display: inline-flex;
        animation: ${inViewAnimation} 1s ease-in-out;

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
        animation: ${inViewAnimation} 1s ease-in-out;


    `


const ImageContainer = styled.img`
        // overflow: hidden;
        display: inline-flex;
        height: 100%;
        width: 50%;
        object-fit: cover;
        justify-content: center;
        @media (min-width: 550px) and (max-width: 1000px) {
            // width: 100%;
            // height: 50%;
          }
        @media (max-width: 550px) {
            width: 100%;
            height: 50%;
          }
          // animation: ${inViewAnimation} 1s ease-in-out;

`



// const Nav = styled.header`
//           overflow: hidden;
//           margin: 0;
//           /* padding: 20px 0px 0px 0px; */
//           background-color: ${primaryBGColor};
//           position: sticky;
//           top: 0;
//           text-align: center;
//           font-size: 20px;
//           font-family: ${primaryFont};
//           height: 50px;
//           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//           z-index: 1;

// `
// const linkAnimation = keyframes`
// {
// 0%{
//   box-shadow: inset 0 0 75px 75px slategray, 0 0 0 slategray;
// }
// 100%{
//   box-shadow: inset 0 0 25px 25px transparent, 0 0 25px 25px transparent;
//   }
// }
// `;

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