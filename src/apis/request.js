import axios from 'axios'

export default function request(option) {
  // tip 实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  // TODO 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  })
  // TODO 响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err)
    }
  )
  return instance(option)
}
