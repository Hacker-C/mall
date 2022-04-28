import { ADD_CART, ADD_COUNTER } from './mutations-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
  }
}
