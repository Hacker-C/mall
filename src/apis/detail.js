import request from './request.js'

export async function getDetail(iid) {
  return request({
    url: '/detail',
    method: 'GET',
    params: {
      iid
    }
  })
}
