import React from 'react'
import './general.css'

function Comment(props){
    const date = props.comment.date.split('GMT')
    return(
        <div className = 'commentContainer'>
            <h2 className = 'commentT'>{props.comment.title}</h2>
            <h3 className = 'commentT ext'>{props.comment.message}</h3>
            <h4 className = 'commentT ext'>{date[0]}</h4>
        </div>
    )
}

export default Comment