import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { PostsServices } from '../../components/PostsServices';
import Heart from '../Heart'

export default function Liked({ postId }) {
    const [likes, setLikes] = useState()

    const refreshLike = useCallback(() => {
        PostsServices.getNumberLike(postId).then((res) => setLikes(res.data))
    }, [postId])

    useEffect(() => {
        refreshLike()
    }, [refreshLike])

    const handleLike = () => {
        PostsServices.likePost(postId).then(() => refreshLike())
    }
    return (
        <div className='likeDisplay'>
            <button className='likeButton' icon="pi" onClick={handleLike}> <Heart /> </button>

            <p><span>{likes}</span> J'aimes</p>

        </div>
    )
}
