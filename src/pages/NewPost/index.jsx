import React, { useState } from 'react'
import styled from 'styled-components'

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
`
const PostForm = styled.form`
    margin: 2em auto;
    max-width: 750px;
`
const FormDiv = styled.div`
display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
`



const NewPost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        //e.preventDefault();
        fetch('http://localhost:3500/api/posts', {
            Authorization: `Bearer ${localStorage.getItem('connect')}`,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            method: 'POST',
            body: {
                post: { "title": title, "description": description }
            }
        })
            .then((response) => response.json())
            .then((res) => { console.log('New Post message: ' + res) })
            .catch((err) => { console.log('New Post message: ' + err) })

        //reset 
        setTitle('');
        setDescription('');
    }

    return (
        <FormDiv>
            <h1>Creer votre post</h1>
            <PostForm onSubmit={handleSubmit()}>
                <div>
                    <label>Title :</label>
                    <input type="text" name='title' onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description :</label>
                    <DescriptionWindows type="text" name='description' onChange={e => setDescription(e.target.value)} />
                </div>
                <div>
                    <input type="file" accept='image/png, image/jpeg, image/jpg' />
                </div>
                <button type='submit' onClick={handleSubmit}>Poster</button>
            </PostForm>
        </FormDiv>
    )
}
export default NewPost