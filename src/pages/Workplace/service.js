import request from 'umi-request';
import cookie from 'react-cookies';


export async function queryCurrent() {
  return request('/api/currentUser',{
    params:{
      token: cookie.load('access_token'),
      username: cookie.load('username'),
    }
  });
}



