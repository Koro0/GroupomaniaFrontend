import React, { useState } from 'react'
import { useEffect } from 'react'
//import Posts from '../Posts'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3500/api/posts/', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('connect')}`,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => res.json())
            .then((data) =>
                //setPosts(data)
                console.log(data))
            .catch((err) => console.log('err fetch GET All posts' + err))
    }, [])
    return (
        <div>
            <h1> Page d'accueil</h1>
            {
                posts && posts.length > 0 && posts.map((data) => {
                    console.log(data)
                    return (
                        <article key={data._id}>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </article>
                    )
                })
            }
        </div>
    )
}
export default Home