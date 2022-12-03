import React from 'react'
import { useState, useEffect } from 'react'
import CommentBox from '../../components/Comment'
import { PostsServices } from '../../components/PostsServices'
import Card from 'react-bootstrap/Card'


export default function Post() {
    const [fetchOnePost, setFetchOnePost] = useState()

    useEffect(() => {
        PostsServices.getOnePost().then((data) => {
            setFetchOnePost(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            {fetchOnePost &&
                <Card className='OneCard' key={fetchOnePost._id}>
                    <Card.Header className='onePost-header'>
                        <Card.Img src={fetchOnePost.imageUrl} alt="Post" />
                        <Card.Title>{fetchOnePost.title}</Card.Title>
                        <Card.Text>{fetchOnePost.description}</Card.Text>
                    </Card.Header>
                    <Card.Footer>
                        <CommentBox />
                    </Card.Footer>
                </Card>
            }
        </div>
    )
}
