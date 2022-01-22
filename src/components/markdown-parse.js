import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `Just a link: https://reactjs.com.`

export default function ParsedMarkdown () {
    return (
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    )
 
}