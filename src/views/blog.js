import React from 'react';
import styled from 'styled-components';
import Postlist from '../components/blog-postlist.js'

export default function Blog() {

    return(
        <Container>
                <Postlist />
        </Container>
    
        )
    };
    
    const Container = styled.div`
              background-color: transparent;
              flex-shrink: 2;
              
    `
    
    
    