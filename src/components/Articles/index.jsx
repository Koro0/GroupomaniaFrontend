import React, { useState, useEffect } from 'react'
import { PostsServices } from '../../components/PostsServices';
import Card from 'react-bootstrap/Card'
import Heart from '../Heart'



export default function Articles() {


    const [posts, setPosts] = useState([])

    useEffect(() => {
        PostsServices.getAllPosts().then((data) => setPosts(data))
    }, [])

    //Pb de like
    const handleLike = (e) => {
        e.preventDefault();
        PostsServices.likePost();
    }

    return (
        <div className='article'>
            {
                posts && posts.length > 0 && posts.map((data) => {
                    return (
                        <Card className='cards' key={data._id}>
                            <Card.Img src={data.imageUrl} alt={data.title} />
                            <Card.Body className='p-body'>
                                <Card.Title>
                                    <Card.Link href={'/' + data._id}>
                                        {data.title}
                                    </Card.Link>
                                </Card.Title>
                                <Card.Text>{data.description}</Card.Text>
                                <Card.Footer className='p-footer'>
                                    <div className='likeButton' icon="pi" onClick={handleLike}> <Heart /> </div>
                                    <Card.Text>
                                        {data.likes}   J'aimes
                                    </Card.Text>
                                </Card.Footer>
                            </Card.Body>
                            <Card.Footer>
                                <p>{data.updateDate}</p>
                            </Card.Footer>
                        </Card >
                    )
                })}
        </div>
    )
}
