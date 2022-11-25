import React, { useState, useEffect } from 'react'
import { PostsServices } from '../../components/PostsServices';
import styled from 'styled-components';
import { BiLike } from 'react-icons/bi'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const NumberLiked = styled.span`
color: var(--secondary)
`

export default function Articles() {
    const config = new Headers({
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    });
    const reqLike = { "userId": localStorage.getItem("user"), "like": 1 }

    const [posts, setPosts] = useState([])
    //const [formAction, setFormAction] = useState(false)
    useEffect(() => {
        PostsServices.getAllPosts().then((data) => setPosts(data))
        //setFormAction(false)
    }, [])

    const handleLike = (e) => {
        fetch('http://localhost:3500/api/posts/' + e + '/like', {
            method: 'POST',
            headers: config,
            body: reqLike
        })
            .then((res) => res.json())
            .catch((err) => console.log('msg: Like ' + err));
        //setFormAction(true)
    }
    /* changement en BootStrap les  styles et balise pour un meilleur rendus */
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
                                    <Button className='likeButton' icon="pi" onClick={handleLike(data._id)}> <BiLike /></Button>
                                    <Card.Text>
                                        <NumberLiked> {data.likes} </NumberLiked>  J'aimes
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
