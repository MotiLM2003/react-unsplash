import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Rm5WZzfvmcGx2AodwPsQ9ZJlN3yGM0OmGGvNDh1xjTw',
  },
});
