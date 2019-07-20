import axios from './index'

export const getToken = ({ uname, password }) => {
  return axios.request({
    url: '/auth',
    method: 'get',
    params: {
      username: uname,
      password: password
    }
    // data: {
    //   username: 'test',
    //   password: 'test123456'
    // }
  })
}
