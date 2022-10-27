const config = new Headers({
  Authorization: `Bearer ${localStorage.getItem('connect')}`,
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
});

export class PostsService {
  static getAllPosts() {
    return fetch('http://localhost:3500/api/posts/', {
      method: 'GET',
      headers: config,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static getOnePost() {
    const url = new URL(window.location.href);
    const postId = url.searchParams.get('id');
    return fetch('http://localhost:3500/api/posts/' + postId, {
      method: 'GET',
      headers: config,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  static createPost() {
    return fetch('http://localhost:3500/api/posts/', {
      method: 'POST',
      headers: config,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}
