import React from 'react'
import './general.css'

function Nav(props){
    return(
        <div className = 'nav'>
            <h1 className = 'navTitle' onClick = {() => {props.change('')}}>Creed's Thoughts.</h1>
        </div>
    )
}

export default Nav