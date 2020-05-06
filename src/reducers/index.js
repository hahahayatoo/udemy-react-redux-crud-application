// 全 reducer を結合するための reducer
// reducer はアプリケーションで扱う状態を変更する責務をもつ

import { combineReducers } from 'redux'
import { reducer as form } from "redux-form";
import events from './events'

// この reducer を利用して store を作成するために export しておく
// 複数の reducer を実装する場合は、そのアプリケーションが利用する reducer をcombineReducers() に渡す
// export default combineReducers({ foo, bar, baz })
export default combineReducers({ events, form })