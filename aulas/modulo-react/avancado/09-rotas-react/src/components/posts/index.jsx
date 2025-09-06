import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

async function getPosts() {
    const response = await fetch('http://localhost:3000/json/posts.json')
    return await response.json()
}

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts()
            setPosts(posts.data)
        }

        fetchData()
    }, [])

    return (
        <section>
            {posts.map((post, index) =>
                <div key={index}>
                    <Link to={`/post/${post.id}`}>
                        <img src={post.image} alt="" />
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            )}
        </section>
    )
}

export { PostsList }