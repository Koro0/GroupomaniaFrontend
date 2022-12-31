import React from 'react'
import { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
// components :
import CommentBox from '../../components/Comment'
import { PostsServices } from '../../components/PostsServices'
import Liked from '../../components/Likes';
import { UserService } from '../../components/UserServices'



export default function Post() {
    const [data, setData] = useState()
    const [isAuthor, setIsAuthor] = useState(false)
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        PostsServices.getOnePost().then((data) => {
            setData(data)
                (data.userId === localStorage.getItem('user') && setIsAuthor(true))
        })
    }, [])

    useEffect(() => {
        UserService.checkAdmin().then((res) => setAdmin(res.data))
    }, [])

    const navigate = useNavigate()

    const redirectEdit = () => {
        navigate("/modify_post/" + data._id)
    }
    const handleDelete = () => {
        PostsServices.deletePost(data._id).then(() => navigate('/home'))
    }
    const EditPost = () => {
        if (isAuthor || admin) {
            return (
                <div className='modifyButton'>
                    <Card.Link onClick={handleDelete} id="editPost"><i className='pi pi-trash'></i>Delete</Card.Link>
                    <Card.Link onClick={redirectEdit} id="editPost"><i className='pi pi-pencil'></i> Edit</Card.Link>
                </div>
            )
        }

    }

    return (
        <div>
            {/*si data exist && affiche contenu */}
            {data &&
                <Card className='OneCard' key={data._id}>
                    <EditPost />
                    <Card.Header className='onePost-header'>
                        {data.imageUrl && <Card.Img src={data.imageUrl} alt="Post" />}
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                    </Card.Header>
                    <Card.Footer>
                        <Liked postId={data._id} />
                    </Card.Footer>
                    <Card.Footer>
                        <div className="container d-flex justify-content-center mt-100 mb-100">
                            <div className="row">
                                <div className="col-md-12">
                                    <CommentBox idPost={data._id} />
                                </div>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            }
        </div >
    )
}
