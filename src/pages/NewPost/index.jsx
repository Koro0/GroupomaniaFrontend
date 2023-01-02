import React from 'react'
import { PostsServices } from '../../components/PostsServices'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'




const NewPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        const formData = new FormData()
        data.imageUrl.length !== 0 && formData.append('imageUrl', data.imageUrl[0])
        formData.append('title', data.title)
        formData.append('description', data.description)
        PostsServices.newPost(formData).then(() => navigate('/home'))

    }

    return (
        <div className='formDiv'>
            <h1>Creer votre post</h1>
            <form id='newPostForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='formTitle' class="form-row">
                    <label>Title :</label>
                    <div className="value">
                        <input type="text"  {...register('title')} required placeholder="Your post Title" />
                        {errors.title && <span >The title is required</span>}
                    </div>
                </div>
                <div className='formDescription' class="form-row">
                    <label>Description :</label>
                    <div className="value">
                        <textarea className='inputDescription'  {...register('description')} required placeholder="Your content " />
                        {errors.description && <span>the minimum is to required</span>}
                    </div>
                </div>
                <div class="form-row">
                    <div className="value">
                        <input {...register('imageUrl')} type="file" accept='image/png, image/jpeg, image/jpg' />
                        {errors.description && <span className='errorFormNewPost'>the picture is required</span>}
                    </div>
                </div>
                <button type='submit' >Poster</button>
            </form>
        </div>
    )


}
export default NewPost