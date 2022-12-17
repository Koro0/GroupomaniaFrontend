import React from 'react'
import { useState, useEffect } from 'react'
import CommentBox from '../../components/Comment'
import { PostsServices } from '../../components/PostsServices'
import Card from 'react-bootstrap/Card'


export default function Post() {
    const [data, setData] = useState()
    const [isAuthor, setIsAuthor] = useState(false)
    useEffect(() => {
        PostsServices.getOnePost().then((data) => {
            setData(data)
            console.log(data)
                (data.userId === localStorage.getItem('user') && setIsAuthor(true))
        })
    }, [])

    return (
        <div>
            {data &&
                <Card className='OneCard' key={data._id}>
                    {isAuthor &&
                        <Card.Link href={"/modify_post?" + data._id} id="editPost">Edit</Card.Link>
                    }
                    <Card.Header className='onePost-header'>
                        <Card.Img src={data.imageUrl} alt="Post" />
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                    </Card.Header>

                    <Card.Footer>
                        <CommentBox idPost={data._id} />
                    </Card.Footer>
                </Card>
            }
        </div >
    )
}
