import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PostsServices } from '../../components/PostsServices';
import { BiLike } from 'react-icons/bi'


const PostsSection = styled.section`

display: flex;
flex-wrap: wrap;
flex: 1 1 1;
`

const ArticlePost = styled.article`
background: var(--secondaire);
color: var(--primaire);
box-shadow: 0 2px 1px -1px ;
border-radius: 6px;
`

const NumberLiked = styled.span`
color: var(--secondary)
`


const Home = () => {
    const [posts, setPosts] = useState([])
    const [formAction, setFormAction] = useState(false)
    useEffect(() => {
        PostsServices.getAllPosts().then((data) => setPosts(data))
        setFormAction(false)
    }, [formAction])
    console.log(posts)

    const config = new Headers({
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    });

    const reqLike = { "userId": localStorage.getItem("user"), "like": 1 }

    //Like Post

    const handleLike = (props) => {
        fetch('http://localhost:3500/api/posts/' + props + '/like', {
            method: 'POST',
            headers: config,
            body: reqLike
        })
            .then((res) => res.json())
            .catch((err) => console.log('msg: Like ' + err));
        setFormAction(true)
    }

    const articles =
        posts && posts.length > 0 && posts.map((data) => {
            console.log(data.likes)
            return (
                <ArticlePost key={data._id}>
                    <div className='p-header'>
                        <img src={data.imageUrl} alt={data.title} />
                    </div>
                    <div className='p-body'>
                        <div className='p-title'>
                            <Link to={'/home/' + data._id} >
                                <h2>{data.title}</h2>
                            </Link>
                        </div>
                        <div className='p-content'>
                            <p>{data.description}</p>
                        </div>
                        <div className='p-footer'>
                            <div>
                                <button className='likeButton' icon="pi" onClick={handleLike(data._id)}> <BiLike /> Like</button>
                            </div>
                            <div>
                                <p>
                                    <NumberLiked> {data.likes} </NumberLiked>  J'aimes
                                </p>
                            </div>
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
            <PostsSection className='p-container'>
                {articles}
            </PostsSection>

        </div>
    )
}
export default Home