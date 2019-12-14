import React from 'react'

export default Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading ...</h2>
    }
    
    return (
        <ul className="list-group mb-4">
            {posts.map(post => (
                <li key={posts.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul>
    )
}
