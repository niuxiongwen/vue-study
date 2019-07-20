import axios from './index'

export const getUserInfo = () => {
  return axios.request({
    url: '/api/v1/tags',
    method: 'post',
    params: {
      name: 33,
      state: 1,
      created_by: 'test2'
    }
  })
}
