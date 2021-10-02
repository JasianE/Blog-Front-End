import React from 'react'
import './general.css'
import getPost from '../functions/getPost'
import getComments from '../functions/getComments'

function Blog(props){
    async function findPostAndComments(){
        const post = []
        const data = await getPost(props.props._id).then((result) => {post.push(result[0])})
        const comments = await getComments(props.props._id).then((result) => {post.push(result)})
        props.change(post)
    }   
    const date = props.props.date.split('GMT')[0]
    return(
        <div className = 'blogCard' onClick = {() => {
            findPostAndComments()
        }}>
            <h1>{props.props.title}</h1>
            <h2 className = 'date'>{date}</h2>
        </div>
    )
}

export default Blog