export default {
  cartListLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  isCheckAll(state) {
    return state.cartList.length === 0
      ? false
      : !state.cartList.some(item => !item.checked)
  },
  // TIP 所有被选中为 true 的商品的总数量
  totalCheked(state) {
    return state.cartList.reduce(
      (pre, cur) => (cur.checked ? pre + cur.count : pre),
      0
    )
  }
}
