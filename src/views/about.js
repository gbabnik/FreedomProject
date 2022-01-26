import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import aboutText from "../pages.json"
import rehypeRaw from 'rehype-raw'

export default function About() {

    console.log(aboutText[0].contents)
    return(
        <Container>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{aboutText[0].contents}</ReactMarkdown>
        </Container>
    
        )
    };
    
    const Container = styled.div`
              background-color: transparent;
              
    `