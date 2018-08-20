import {increment, decrement, reset} from './actions/counter'

import store from './store'

// 打印初始状态
console.log(store.getState())

//
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 一些列action
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

unsubscribe()
