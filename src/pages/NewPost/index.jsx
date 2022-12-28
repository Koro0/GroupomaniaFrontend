import React from 'react'
import styled from 'styled-components'
import { PostsServices } from '../../components/PostsServices'
import { useForm } from 'react-hook-form'


/*const DescriptionWindows = styled.textarea`
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
 `*/
// const PostForm = styled.form`
//      margin: 2em auto;
//      max-width: 750px;
//  `
const FormDiv = styled.div`
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
 `



const NewPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('imageUrl', data.imageUrl[0])
        formData.append('title', data.title)
        formData.append('description', data.description)
        PostsServices.newPost(formData);
    }
    //styles a refire

    return (
        <FormDiv>
            <h1>Creer votre post</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id='formTitle'>
                    <label>Title :</label>
                    <input type="text"  {...register('title')} placeholder="Your post Title" />
                    {errors.title && <span >The title is required</span>}
                </div>
                <div id='formDescription'>
                    <label>Description :</label>
                    <textarea  {...register('description')} placeholder="Your content " />
                    {errors.description && <span>the minimum is to required</span>}
                </div>
                <div>
                    <input {...register('imageUrl')} type="file" accept='image/png, image/jpeg, image/jpg' />
                    {errors.description && <span className='errorFormNewPost'>the picture is required</span>}
                </div>
                <button type='submit' >Poster</button>
            </form>
        </FormDiv>
    )


}
export default NewPost