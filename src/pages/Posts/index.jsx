import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom'
import { PostsServices } from '../../components/PostsServices';

const ButtonLikeOrDislike = styled.button`
padding: 14px 40px;
background-color: var(--secondaire);
border:none

`
const ArticlePost = styled.article``

const numberLiked = styled.span`
color: var(--secondary)
`
numberLiked.defaultProps = {
    value: 0
}

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        PostsServices.getAllPosts().then((posts) => setPosts(posts))
    }, [])
    console.log(posts)

    const config = new Headers({
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    });

    const reqLike = { "userId": localStorage.getItem("user"), "like": 1 }
    const handleLike = (props, req) => {
        fetch('http://localhost:3500/api/posts/' + props + '/like', {
            method: 'POST',
            headers: config,
            body: reqLike
        })
            .then((res) => res.json())
            .catch((err) => console.log('msg: Like ' + err));
    }

    const articles =
        posts && posts.length > 0 && posts.map((data) => {
            console.log(data.likes)
            return (
                <ArticlePost key={data._id}>
                    <div>
                        <img src={data.imageUrl} alt={data.title} />
                    </div>
                    <div>
                        <Link to={'/home/' + data._id} >
                            <h2>{data.title}</h2>
                        </Link>
                    </div>
                    <div>
                        <p>{data.description}</p>
                    </div>
                    <div className='item'>
                        <div>
                            <ButtonLikeOrDislike onClick={handleLike(data._id)}>
                                <FcLike />
                            </ButtonLikeOrDislike>
                        </div>
                        <div>
                            <p>
                                <numberLiked /> {data.likes} J'aimes
                            </p>
                        </div>
                    </div>

                    <p>{data.updateDate}</p>
                </ArticlePost >
            )
        })
    //if (!articles) { return <div>Laoding...</div> }

    return (
        <div>
            <h1> Accueil</h1>
            <section className='container'>
                {articles}
            </section>

        </div>
    )
}
export default Home