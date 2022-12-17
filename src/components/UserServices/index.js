import axios from 'axios';

export class UserService {
  static urlApiUser = 'http://localhost:3500/api/auth';
  static async getPseudo(data) {
    return await axios.get(this.urlApiUser + '/pseudo', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }
  static async postNewPseudo(data) {
    return await axios.put(this.urlApiUser + '/pseudo', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('connect')}`,
      },
    });
  }
}
