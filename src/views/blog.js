import React, {useState} from 'react';
import styled from 'styled-components';
import Postlist from '../components/blog-postlist.js'
import { Outlet } from "react-router-dom";


export default function Blog() {

    return(
        <Container>
                <Outlet />
                <Postlist />
        </Container>
    
        )
    };
    
    const Container = styled.div`
            // display: flex-block;
            // width: 100vh;
    `
    
    
    