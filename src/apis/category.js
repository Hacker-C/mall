import request from './request'

export async function getMainCategory() {
  const res = await request({
    url: '/category'
  })
  return res
}

export async function getSubCategory(maitKey) {
  const res = await request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
  return res
}
