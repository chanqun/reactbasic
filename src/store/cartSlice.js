import {createSlice} from "@reduxjs/toolkit";

let cart = createSlice(
    {
        name: 'cart',
        initialState: [
            {id: 0, name: 'White and Black', count: 2},
            {id: 2, name: 'Grey Yordan', count: 1}
        ],
        reducers: {
            addCount(state, action) {
                let product = state.find(function (cart) {
                    return cart.id == action.payload
                })

                product.count++
            },
            addItem(state, action) {
                let product = state.find(function (cart) {
                    return cart.id == action.payload.id
                })

                if (product) {
                    product.count++
                    return
                }

                state.push(action.payload)
            }
        }
    }
)

export let {addCount, addItem} = cart.actions
export default cart;
