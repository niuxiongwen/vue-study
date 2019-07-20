import axios from './index'

export const addMenu = ({ params }) => {
  return axios.request({
    url: '/api/v1/menu',
    method: 'post',
    data: params
  })
}

export const getMenuList = (sysId) => {
  return axios.request({
    url: '/api/v1/menu',
    method: 'get',
    params: {
      sysname: sysId,
      state: 0,
      pn: 0
    }
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}
