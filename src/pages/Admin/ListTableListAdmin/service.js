import request from 'umi-request';
import cookie from 'react-cookies';
export async function queryUser(params) {
  return request('/api/table/admin/queryemployee', {
    params:{
      ...params,
      token:cookie.load('access_token')
    }
    
    
  });
}
export async function removeUser(params) {
  return request('/api/user/list', {
    method: 'POST',
    data: { ...params, todo: 'delete' ,token:cookie.load('access_token')},
  });
}
export async function addUser(params) {
  return request('/api/user/list', {
    method: 'POST',
    data: { ...params, todo: 'add' ,token:cookie.load('access_token')},
  });
}
export async function updateUser(params) {
  return request('/api/user/list', {
    method: 'POST',
    data: { ...params, todo: 'update',token:cookie.load('access_token') },
  });
}


