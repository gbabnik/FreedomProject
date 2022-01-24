import React from 'react';
import styled from 'styled-components';
import ParsedMarkdown from '../components/markdown-parse.js'
import Postlist from '../components/blog-postlist.js'

export default function Blog({children}) {

    return(
        <Container>
                <Postlist />
                {children}
        </Container>
    
        )
    };
    
    const Container = styled.div`
              background-color: transparent;
              
    `
    
    
    