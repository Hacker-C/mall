import request from './request'

export async function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export async function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
