import axios from 'axios';

export class UserService {
  static userId = localStorage.getItem('user');

  static urlApiUser = 'http://localhost:3500/api/auth';
  static async getPseudo() {
    return await axios.get(this.urlApiUser + '/user/' + this.userId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }
  static async postNewPseudo(data) {
    return await axios.put(this.urlApiUser + '/user/' + this.userId, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }
  static async checkAdmin() {
    return await axios.get(this.urlApiUser + '/admin/' + this.userId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }
}
