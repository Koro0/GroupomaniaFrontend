import React from 'react'
import styled from 'styled-components'
import { PostsServices } from '../../components/PostsServices'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const DescriptionWindows = styled.textarea`
display: block;
 width: 100%;
 padding: 0.375rem 0.75rem;
 font-size: 1rem;
 font-weight: 400;
 line-height: 1.5;
 color: #212529;
 background-color: #fff;
 background-clip: padding-box;
 border: 1px solid #ced4da;
 -webkit-appearance: none;
 appearance: none;
 border-radius: 0.375rem;
 transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
 height: 20rem;
 `
const FormDiv = styled.div`
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
 `

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
        <FormDiv>
            <h1>Creer votre post</h1>
            <form id='newPostForm' onSubmit={handleSubmit(onSubmit)}>
                <div id='formTitle' class="form-row">
                    <label>Title :</label>
                    <div className="value">
                        <input type="text"  {...register('title')} required placeholder="Your post Title" />
                        {errors.title && <span >The title is required</span>}
                    </div>
                </div>
                <div id='formDescription' class="form-row">
                    <label>Description :</label>
                    <div className="value">
                        <DescriptionWindows  {...register('description')} required placeholder="Your content " />
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
        </FormDiv>
    )


}
export default NewPost