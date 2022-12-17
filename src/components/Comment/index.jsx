import React, { useState } from 'react'
import { useEffect, useCallback } from 'react'
import { PostsServices } from '../../components/PostsServices'
import { useForm } from "react-hook-form";

export default function Comments({ idPost }) {
  const [comments, setComments] = useState([])
  const { register, handleSubmit } = useForm();

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="commentaire">Commentaire</label>
        <input id="commentaire" type="test" {...register('commentaire')} />
        <input type="submit" />
      </form>

      <ul>
        {comments.map((comment, index) =>
          <li className='commentLi' key={index}>{comment.user} : <br />{comment.comment}</li>
        )}
      </ul>
    </div>
  )
}
