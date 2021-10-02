import React, {useState, useEffect} from 'react'
import './App.css';
import getData from './functions/getData'
import Home from './components/Home'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getData().then((result) => {setPosts(result)})
  }, [])
  console.log(posts)
  return (
    <div className="App">
      <div className = 'blogsContainer'>
        <Home data = {posts}/>
      </div>
    </div>
  );
}

export default App;
