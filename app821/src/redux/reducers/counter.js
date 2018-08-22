import {INCREMENT, DECREMENT, RESET} from '../actions/counter'

// 初始化state
const initState = {
  count: 0,
  total: 100,
}

// reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case RESET:
      return {
        ...state,
        count: 0,
        total: state.total + 1
      }
    default:
      return state
  }
}