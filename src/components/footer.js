import styled from 'styled-components'
import React from 'react';
import { Link } from "react-router-dom";
import {primaryFont} from '../globals.js'

// const primaryColor = '#d1d1d1'

export default function Footer () {


  return (
        <Container>
            <Content>
                Ti si d'best!
            </Content> 
            <Copyrights>
                © 2022 gBabnik
            </Copyrights>             
        </Container>
    )
};

const Container = styled.footer`
        overflow: hidden;
        background-color: #999;
        min-height: 70px;
        font-family: ${primaryFont};

`
const Content = styled.div`
        margin: 20px;
        text-align: center;
        font-size: 20px;

`

const Copyrights = styled.div`
        margin: 20px;
        text-align: center;
        font-size: 16px;
        font-family: ${primaryFont};
        color: #444;

`

