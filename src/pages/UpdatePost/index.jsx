import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { PostsServices } from '../../components/PostsServices'
import { useForm } from 'react-hook-form'



export default function UplaodPost() {
    const { register, handleSubmit } = useForm()

    const [post, setPost] = useState()
    useEffect(() => {
        PostsServices.getOnePost().then((res) => setPost(res))
    }, [])

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('imageUrl', data.imageUrl[0])
        formData.append('title', data.title)
        formData.append('description', data.description)
        PostsServices.ModifyPost(formData)

    }

    return (
        <div>
            <h1>Edit Your Post</h1>
            {post &&
                <form className='modifyForm' onSubmit={handleSubmit(onSubmit)}>
                    <div id='formTitle'>
                        <label>Title :</label>
                        <input defaultValue={post.title} {...register('title')} />
                    </div>
                    <div id='formDescription'>
                        <label>Description :</label>
                        <textarea className='modifyTexteContent' {...register('description')} defaultValue={post.description} />
                    </div>
                    <div>
                        <input type="file" {...register('imageUrl')} accept='image/png, image/jpeg, image/jpg' />
                    </div>
                    <button type='submit' >Poster</button>
                </form>
            }
        </div>

    )
}
