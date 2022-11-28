import React from 'react'
import { useState, useEffect } from 'react'
import CommentBox from '../../components/Comment'
import { PostsServices } from '../../components/PostsServices'
import Card from 'react-bootstrap/Card'
import { useRef } from 'react'


export default function Post() {
    const [OnePost, setOnePost] = useState()
    const onePost = useRef(null)
    const fetchPostData = () => {
        PostsServices.getOnePost.then((data) => {
            onePost.current = data
            setOnePost(data)
        })
    }
    useEffect(() => {
        fetchPostData()
    }, [])
    console.log(OnePost)
    return (
        <div>
            <Card className='OneCard' key={OnePost._id}>
                <Card.Header className='onePost-header'>
                    <Card.Img src={OnePost.imageUrl} alt="Post" />
                    <Card.Title>{OnePost.title}</Card.Title>
                    <Card.Text>{OnePost.description}</Card.Text>
                </Card.Header>
                <Card.Footer>
                    <CommentBox />
                </Card.Footer>
            </Card>
        </div>
    )
}
