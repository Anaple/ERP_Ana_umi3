import { request } from 'umi';
import cookie from 'react-cookies'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function queryCurrent() {
  return request<API.CurrentUser>('/api/currentUser',{
    params:{
      token: cookie.load('access_token'),
      username: cookie.load('username'),
    }
 
  });
}


