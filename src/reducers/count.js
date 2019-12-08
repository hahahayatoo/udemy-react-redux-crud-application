import { INCREMENT, DECREMENT } from "../actions";

// 状態の初期値を定義
const initialState = { value: 0 }

// この reducer が実際の状態を持っている
export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case INCREMENT:
            return { value: state.value + 1}

        case DECREMENT:
            return { value: state.value - 1}
    
        default:
            return state
    }
    
}