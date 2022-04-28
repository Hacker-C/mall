import {
  ADD_CART,
  ADD_COUNTER,
  CHANGE_CHECKED,
  CHECK_ALL_TO
} from './mutations-types'

export default {
  addToCart(context, payload) {
    // TIP 重复添加则只增加数量 count
    payload.count = 1
    payload.checked = true
    let isExist = false
    for (let i = 0; i < context.state.cartList.length; i++) {
      if (context.state.cartList[i].iid === payload.iid) {
        // 存在了
        isExist = true
        context.commit(ADD_COUNTER, context.state.cartList[i])
        break
      }
    }
    if (!isExist) {
      // 不存在
      context.commit(ADD_CART, payload)
    }
  },
  check(context, payload) {
    for (let i = 0; i < context.state.cartList.length; i++) {
      if (context.state.cartList[i].iid === payload.iid) {
        context.commit(CHANGE_CHECKED, context.state.cartList[i])
      }
    }
  },
  checkAll(context, payload) {
    for (let i = 0; i < context.state.cartList.length; i++) {
      context.commit(CHECK_ALL_TO, {
        item: context.state.cartList[i],
        check: payload
      })
    }
  }
}
