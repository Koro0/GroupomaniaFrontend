import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CommentBox from '../../components/Comment'
import { PostsServices } from '../../components/PostsServices'

const OnePost = styled.div`
`

export default function Post() {
    const [Post, setPost] = useState()
    useEffect(() => {
        PostsServices.getOnePost().then((data) => setPost(data))
    }, [])

    const showPost = Post && Post.map((data) => {
        return (
            <OnePost>
                <div className='onePost-header'>
                    <img src={data.imageUrl} alt="Post" />
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
                <div>
                    <CommentBox />
                </div>

            </OnePost>
        )
    })
    return (
        <div>
            {showPost}
        </div>
    )
}
