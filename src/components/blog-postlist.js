import styled, { keyframes } from 'styled-components'
import React from 'react';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Link } from "react-router-dom"
import {primaryColor} from '../globals.js'
import {primaryFont} from '../globals.js'
import postlist from "../posts.json"

export default function Postlist () {
        
console.log(postlist)
  return (
      <Container>        
              {postlist.length && 
              postlist.map((post, i) => {
                  return (
                    <PostContainer id = {post.id}> 
                        <PostTitle>{post.title}</PostTitle>
                        <PostDate>{post.date}</PostDate>
                        <PostImage>{post.thumbnail}</PostImage>
                        <PostContent><ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown></PostContent>    
                    </PostContainer>
                  )
              })}          
      </Container>
    )
};

const Container = styled.div`
          overflow: hidden;
          margin: 0px;
          padding: 10px;
          text-align: center;
`
const PostContainer = styled.div`
          overflow: hidden;
          position: relative;
          margin: 1%;
          display: inline-flex;
          flex-direction: column;
          width: 31.3%;
          border-radius: 10px;
          height: 260px;
          max-width: 500px;
          min-width: 300px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
          @media (min-width: 600px) and (max-width: 980px) {
            min-width: 48%;
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          @media (max-width: 600px) {
            min-width: 97%;
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin: 10px;
          }
          &::-webkit-input-placeholder {
    color: red;
  }
`
const PostEl = styled.div`  
        flex-direction: column;
`
        const PostTitle = styled(PostEl)`
                font-size: 20px;
                text-transform: uppercase;
        `
        const PostDate = styled(PostEl)`
                font-size: 12px;
                color: #555;
                font-style: italic;

        `
        const PostImage = styled(PostEl)`
                height: 150px;
        `
        const PostContent = styled(PostEl)`
                display: flex;
                font-size: 15px;
        `