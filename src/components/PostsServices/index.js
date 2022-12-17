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

  static async postPost(data) {
    return await axios.post(this.urlApi, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
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

  static async likePost(params) {
    const reqUserId = localStorage.getItem('user');
    try {
      const res = await fetch(
        'http://localhost:3500/api/posts/' + params + '/like',
        {
          method: 'POST',
          headers: config,
          body: { userId: reqUserId, likes: 1 },
        }
      );
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  }
}
