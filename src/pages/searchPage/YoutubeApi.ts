import axios from 'axios';

 const KEY = 'AIzaSyBPoRPLGE-hzsOHsFGZPDvIRBOanjV_Moo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 50,
      key: KEY
    }
  })