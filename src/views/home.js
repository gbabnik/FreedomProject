import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import aboutText from "../pages.json"
import rehypeRaw from 'rehype-raw'

export default function Home() {

return(
    <Container>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{aboutText[1].contents}</ReactMarkdown>
    </Container>

  )
};

const Container = styled.div`
        position: relative;
        margin: 0 0 0 0;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
`



