import React from 'react';
import styled from 'styled-components';

export default function Home() {

return(
    <CardsContainer>
    Kaj ti kej
    </CardsContainer>

)
};

const CardsContainer = styled.div`
          top: 90px;
          background-color: transparent;
`

const OneCardContainer = styled.div`
          position: relative;
          margin: 1%;
          display: inline-flex;
          width: 31.3%;
          border-radius: 10px;
          max-width: 500px;
          min-width: 300px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          @media (min-width: 600px) and (max-width: 980px) {
            min-width: 48%;
            border-radius: 10px;
          }
          @media (max-width: 600px) {
            min-width: 100%;
            border-radius: 0px;
            margin: 0%;
          }
          &::-webkit-input-placeholder {
    color: red;
  }
`
const PhotoContainer = styled.img`
          width: 100%;
          border-radius: 10px;
          @media (max-width: 600px) {
            border-radius: 0px;
          }
`
const TextContainer = styled.div`
          z-index: 1;
          font-size: 25px;
          color: #fff;
          position: absolute;
          bottom: 15%;
          left: 5%;
`

const TitleContainer = styled.div`
          font-size: 25px;
          padding: 5px;
`
const DescriptionContainer = styled.div`
          font-size: 15px;
          padding: 5px;
`



