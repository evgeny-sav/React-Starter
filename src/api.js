import Axios from 'axios';

export default class API {
  static async getData() {
    let data = null;
    try {
      data = await Axios.get('https://api.example.com');
    } catch (e) {
      console.log(`ERROR: ${e}`);
    }
    return data;
  }
}
