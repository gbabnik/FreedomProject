import React from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import postlist from "../posts.json"
import DayJS from 'react-dayjs';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


export default function Post () {
    let { id } = useParams();
    // console.log("id od posta je: " + id)
    // console.log(postlist)
    const validId = parseInt(id)    //returns integer from a string 
    // console.log(!validId)
    const fetchedPost = {};
    if(!validId) {
        console.log("Invalid ID")
    }
    postlist.forEach((post, i) => {
        if(validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title!"
            fetchedPost.date = post.date ? post.date : "No date!"
            fetchedPost.thumbnail = post.thumbnail ? post.thumbnail : "No thumbnail!"
            fetchedPost.content = post.content ? post.content : "No content!"
        }
    })
    // console.log(fetchedPost)
    return(
        <Container>               
                    <PostContainer id = {postlist.id} key = {postlist.id}> 
                       <PostImageContainer>
                           <PostImage src ={fetchedPost.thumbnail} alt={"/public" + fetchedPost.thumbnail} />
                        </PostImageContainer> 
                            <ContentContainer>
                                {/* <PostTitle>{fetchedPost.title}</PostTitle> */}
                                <PostDate>Posted on <DayJS format="DD MMMM YYYY">{fetchedPost.date}</DayJS></PostDate> 
                                <PostContent><ReactMarkdown rehypePlugins={[rehypeRaw]}>{fetchedPost.content}</ReactMarkdown></PostContent>    
                                <div><Link to="..">Go back...</Link></div>
                            </ContentContainer>   
                     </PostContainer>          
        </Container>
        )
    };
    
const Container = styled.div`
        background-color: transparent;
        // overflow: hidden;
              
    `
 const PostContainer = styled.div`
        position: relative;
        margin: 0px 0 0 0;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    `

const ContentContainer = styled.div`
        position: relative;
        top: -200px;
        margin: 10px 0 -200px 0;       //tok kot je content za gor pomaknjen, tok margina mu odspodej dodam
        display: inline-flex;
        flex-direction: column;
        background: white;
        // margin-top: 30rem;
        padding: 5rem 8% 0rem 8%;
        z-index: 0;
        width: 70%;
        
`
const PostEl = styled.div`  
        flex-direction: column;
`
  const PostTitle = styled(PostEl)`
          font-size: 30px;
          text-transform: uppercase;
  `
  const PostDate = styled(PostEl)`
          font-size: 12px;
          color: #555;
          font-style: italic;

  `
  const PostContent = styled(PostEl)`
          display: flex;
          font-size: 15px;
  `

  const PostImageContainer = styled.div`
        display: block;
        overflow: hidden;
        width: 100%;
        height: 60vh;
        z-index: -1;

  
`
const PostImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    opacity: 0.8;
  `
