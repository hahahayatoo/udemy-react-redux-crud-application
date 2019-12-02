// 全 reducer を結合するための reducer

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// 複数の reducer を実装する場合は、そのアプリケーションが利用する reducer を
// combineReducers() に渡す
// export default combineReducers({ foo, bar, baz })