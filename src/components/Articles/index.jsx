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
        PostsServices.getAllPosts().then((data) => {
            setPosts(data)
            console.log(data)
        })
    }, [])
    // const sortByDateDesc = (a, b) => {
    //     let day1 = Date.parse(a);
    //     let day2 = Date.parse(b);
    //     if (day1.getMonth() > day2.getMonth()) {
    //         return 1;
    //     } else if (day1.getMonth() < day2.getMonth()) {
    //         return -1;
    //     } else {
    //         //same month
    //         return day1.getMonth() - day2.getMonth();
    //     }
    // }

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
