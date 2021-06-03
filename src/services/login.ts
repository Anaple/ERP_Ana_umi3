import { request } from 'umi';
import cookie from 'react-cookies'
export interface LoginParamsType {
  username: string;
  password: string;
  autoLogin: boolean;
}

export async function fakeAccountLogin(params: LoginParamsType) {
 
  return request<API.LoginStateType>('/api/login/account', {
    method: 'POST',
    data: params,
  });
}


export async function outLogin() {
  cookie.remove('access_token')
  cookie.remove('username')
  return request('/api/login/outLogin');
}
