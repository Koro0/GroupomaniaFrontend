import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3500/api/auth/login', data)
            .then(response => {
                console.log(response.status);
                console.log(response.data);
            })
            .then((res) => {
                localStorage.setItem('connect', res.token)
                localStorage.setItem('user', res.userId)
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
            />
            {errors.name && <p>This field is required</p>}
            <br />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p>This field is required</p>}
            {errors.email && errors.email.type === 'pattern' && (
                <p>Please enter a valid email address</p>
            )}
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;
