// action は js のオブジェクトのことで、
// オブジェクトの内部でtypeとtypeに対応する値を持つ
// その値はユニークである必要がある

// reducerでも利用するため、action を定数として定義しておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action を返す関数のことを action creater と呼ぶ
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
