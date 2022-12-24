import axios from 'axios';

const config = new Headers({
  Authorization: `Bearer ${localStorage.getItem('connect')}`,
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
});

export class PostsServices {
  static urlApi = 'http://localhost:3500/api/posts/';

  static async getAllPosts() {
    try {
      const res = await fetch('http://localhost:3500/api/posts/', {
        method: 'GET',
        headers: config,
      });
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  }

  static async getOnePost() {
    const url = window.location.href;
    const postId = url.split('/').pop();
    try {
      const res = await fetch('http://localhost:3500/api/posts/' + postId, {
        method: 'GET',
        headers: config,
      });
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  }

  static async newPost(data) {
    return await axios.post(this.urlApi, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async deletePost(id) {
    return await axios.delete(this.urlApi + `${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }

  static async getCommentsByIdPost(id) {
    return await axios.get(this.urlApi + `${id}/comments`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }

  static async postCommentsByIdPost(id, data) {
    return await axios.post(this.urlApi + `${id}/comment`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }

  static async postComments() {
    const url = window.location.href;
    const postId = url.split('/').pop();
    try {
      const res = await fetch(
        'http://localhost:3500/api/posts/' + postId + '/comment',
        {
          method: 'GET',
          headers: config,
        }
      );
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  }
  static async likePost(id) {
    return await axios.post(
      this.urlApi + `${id}/like`,
      { userId: localStorage.getItem('user'), like: 1 },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('connect')}`,
          Accept: 'application/json',
        },
      }
    );
  }
  static async getNumberLike(id) {
    return await axios.get(this.urlApi + `${id}/likes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }
}
