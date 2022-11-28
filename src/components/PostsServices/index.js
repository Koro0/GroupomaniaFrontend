const config = new Headers({
  Authorization: `Bearer ${localStorage.getItem('connect')}`,
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
});

export class PostsServices {
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
    console.log(postId);
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

  static async createPost() {
    try {
      const res = await fetch('http://localhost:3500/api/posts/', {
        method: 'POST',
        headers: config,
      });
      return await res.json();
    } catch (err) {
      return console.log(err);
    }
  }

  // static postComments() {
  //   const postId = url.searchParams.get('id');
  //   return fetch('http://localhost:3500/api/posts/', {
  //     method: 'POST',
  //     headers: config,
  //   })
  // }
}
