import React from 'react'
import { useState, useEffect } from 'react'
import { PostsServices } from '../../components/PostsServices'

export default function Post() {
    const [Post, setPost] = useState()
    useEffect(() => {
        PostsServices.getOnePost().then((data) => setPost(data))
    }, [])

    const showPost = Post && Post.map((data) => {
        return (
            <div>data.title</div>
        )
    })
    return (
        <div>
            {showPost}
        </div>
    )
}
