import React, { useState, useEffect } from 'react'
import { PostsServices } from '../../components/PostsServices';
import Card from 'react-bootstrap/Card'


export default function Articles() {
    const [posts, setPosts] = useState([])
    if (posts.length > 0) {
        posts.sort((a, b) => new Date(b.updateDate) - new Date(a.updateDate));
    }
    //Souci chargement
    useEffect(() => {
        PostsServices.getAllPosts().then((data) => setPosts(data))
    }, [])

    return (
        <div className='article row'>
            {
                posts && posts.length > 0 && posts.map((data) => {
                    return (
                        <Card className='cards col-md-4' key={data._id}>
                            {data.imageUrl !== null &&
                                <img className='card-img-top' src={data.imageUrl} alt={data.title} />
                            }
                            <Card.Body className='p-body'>
                                <Card.Title>
                                    <Card.Link href={'/' + data._id}>
                                        {data.title}
                                    </Card.Link>
                                </Card.Title>
                                <Card.Text>{data.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <p>
                                    {new Intl.DateTimeFormat('fr-FR', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    }).format(new Date(data.updateDate))}
                                </p>
                            </Card.Footer>
                        </Card >
                    )
                })}
            {
                posts.length === 0 && <h2>Aucun Posts disponible, Soyez le 1er à poster !!</h2>
            }
        </div>
    )
}
