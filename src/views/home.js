import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../components/flexible-container.js'
import ReactMarkdown from 'react-markdown'
import aboutText from "../pages.json"
import rehypeRaw from 'rehype-raw'
import image1 from '../Profile1.gif'
import image2 from '../Profile2.jpg'

export default function Home() {

return(
    <Container>
            {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{aboutText[1].contents}</ReactMarkdown> */}
                <HeaderText> Meet Gašper </HeaderText>
                <CardWrapper dark right showButton
                title= "Hoolis"
                subtitle= "Kaj ti kej, te dni"
                content= "Beauty is commonly described as a feature of objects that makes these objects pleasurable to perceive. "
                imgSrc = {image1}
                imgAlt = "image1"
                buttonText = "Show me more"
                />
                <CardWrapper showButton
                title= "Ciao"
                subtitle= "A bi šel kdo smučat?"
                content= "A very common element in many conceptions of beauty is its relation to pleasure."
                imgSrc = {image2}
                imgAlt = "image2"
                buttonText = "Let's go skiing!"
                />
    </Container>

  )
};

const Container = styled.div`
        position: relative;
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
`

const HeaderText = styled.h1`
        position: relative;
        margin: auto;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
`



