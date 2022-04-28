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

export async function getRecommend() {
  return request({
    url: '/recommend',
    method: 'GET'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParams {
  constructor(info, rule) {
    // images 可能无值
    this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}
