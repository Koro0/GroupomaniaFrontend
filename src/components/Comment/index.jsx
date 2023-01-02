import React, { useState } from 'react'
import { useEffect, useCallback } from 'react'
import { PostsServices } from '../../components/PostsServices'
import { useForm } from "react-hook-form";
import styled from 'styled-components'


const ButtonSubmit = styled.input`
width:100%;
`

export default function Comments({ idPost }) {
  const [comments, setComments] = useState([])
  if (comments.length > 0) {
    comments.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  const { register, handleSubmit, reset } = useForm();

  const refreshComments = useCallback(() => {
    PostsServices.getCommentsByIdPost(idPost).then(res =>
      setComments(res.data)
    );
  }, [idPost])

  useEffect(() => {
    refreshComments();
  }, [refreshComments])

  const onSubmit = (data) => {
    PostsServices.postCommentsByIdPost(idPost, data).then(() => refreshComments())
    reset()
  };

  return (
    <div className='card'>
      <div class="card-body">
        <h4 class="card-title">Recent Comments</h4>
        <h6 class="card-subtitle">Latest Comments section by users</h6>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea id="commentaire" type="text" placeholder='Commentaire' {...register('commentaire', { required: true, minLength: 2 })} />
        <ButtonSubmit type="submit" />
      </form>
      <div class="comment-widgets m-b-20">
        {comments.map((comment, index) =>
          <div class="d-flex flex-row comment-row">
            <div class="comment-text w-100">
              <ul>
                <li className='commentLi' key={(index, comment.user)}>
                  <h5>{comment.user}</h5>
                  <div class="comment-footer">
                    <span class="date">{comment.date}</span>
                  </div>
                  <p>{comment.comment}</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
