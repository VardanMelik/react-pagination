import React, { useState, useEffect} from 'react';
import Posts from './components/Posts'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect( () => {
      const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
        setLoading(false)
      }
      fetchPosts()
    }, [])

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={posts} loading={loading} /> 
      </div>
    </div>
  );
}

export default App;
