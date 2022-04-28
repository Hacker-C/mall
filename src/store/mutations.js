import {
  ADD_CART,
  ADD_COUNTER,
  CHANGE_CHECKED,
  CHECK_ALL_TO
} from './mutations-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
  },
  [CHANGE_CHECKED](state, payload) {
    payload.checked = !payload.checked
  },
  [CHECK_ALL_TO](state, payload) {
    payload.item.checked = payload.check
  }
}
