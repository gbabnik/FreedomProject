import React from 'react';
import styled from 'styled-components';
import ParsedMarkdown from '../components/markdown-parse.js'

export default function Home() {

return(
    <BlogContainer>
        <ParsedMarkdown></ParsedMarkdown>
    </BlogContainer>

)
};

const BlogContainer = styled.div`
        
          background-color: blue;
`