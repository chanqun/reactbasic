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
            }
        }
    }
)

export let {addCount} = cart.actions
export default cart;
