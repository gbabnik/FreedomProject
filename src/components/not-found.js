import React from 'react';
import styled from 'styled-components';
// import imgNotFound from "../../public/images/uploads/imgNotFound.jpg"

export default function NotFound() {


    return(
        <Container>
              <Header>404 - PAGE NOT FOUND</Header> 
              {/* <Image src = {imgNotFound} >   </Image> */}
        </Container>
    
        )
    };
    
    const Container = styled.div`
        background-color: transparent;
              
    `
    const Header = styled.h1`
        background-color: transparent;

    
`

    const Image = styled.img`
        background-color: transparent;

    `