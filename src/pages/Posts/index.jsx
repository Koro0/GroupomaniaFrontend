import { PostsServices } from '../../components/PostsServices'
import React, { useEffect, useState } from 'react';


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        PostsServices.getAllPosts().then(data => {
            console.log(data);
            setPosts(data);
        })
    }, []);

    return (
        <section>
            {
                posts && posts.length > 0 && posts.map((post) => {
                    <article key={post._id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={post.imageUrl}
                                alt={post.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {post.updateDate}
                            </Typography>
                        </Card>
                    </article>

                })
            }
        </section>
    )
}

export default Posts