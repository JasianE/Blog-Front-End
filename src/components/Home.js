import React, {useState} from 'react'
import Blog from './Blog'
import Nav from './Nav'
import Main from './Main'
import About from './About'

//Display every blog post
//Display Nav Bar and act as the home screen

function Home(props){
    const [active, setActive] = useState()
    let i = 0;

    function change(obj){
        setActive(obj)
    }
    return(
        <div>
            <nav>
                <Nav change = {change}/>
                {active ? null : <About />}
            </nav>
            <div className = {active ? 'activeHome' : 'Home'}>
                {active ? <Main blog = {active[0]} comments = {active[1]}/> : props.data.map(function(key){
                    i++
                    if(key.public === 'True'){
                        console.log('hi')
                        return(<Blog props = {key} change = {change} key = {i}/>)
                    }
                })}
            </div>
        </div>
    )
}

export default Home