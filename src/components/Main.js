import React, {useState} from 'react'
import Comment from './Comment'

function Main(props){
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    let i = 0;

    function handleChange(e){
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        } else {
            setMessage(e.target.value)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        setTitle('')
        setMessage('')
        const comment = {
            title: title,
            message: message,
            date: new Date(),
            post: props.blog._id
        }
        try{
            fetch('https://api1232.herokuapp.com/comments', {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(comment)
            })
        } catch(err){
            console.log('Succeded >:)')
        }
        
    }
    return(
        <div className = 'mainBlog'>
            <h1 className = 'mainTitle'>{props.blog.title}</h1>
            <div className = 'textContainer'>
                <h2 className = 'mainMain'>{props.blog.text}</h2>
            </div>
            <h2 className = 'comments'>Comments:</h2>
            <h2 className = 'thoughts'>Have Some Thoughts?</h2>
            <form>
                <h3 className = 'left'>Title:</h3>
                <input 
                type = 'text'
                name = 'title'
                required
                value = {title}
                onChange = {handleChange}
                className = 'input'
                />
                <h3>Message:</h3>
                <input 
                type = 'text'
                name = 'message'
                required
                value = {message}
                onChange = {handleChange}
                className ='input'
                />
                <br/>
                <button className = 'buttonSubmit' onClick = {handleSubmit}>Submit</button>
            </form>
            {props.comments.map((key => {
                i++
                return(<Comment comment = {key} key = {i}/>)
            }))}
        </div>
    )
}

export default Main