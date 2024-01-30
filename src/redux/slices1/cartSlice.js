import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.push({ ...newItem, quantity: 1 })
            }
            else {
                existingItem.quantity += 1
            }
        },
        removeFromCartlist: (state, action) => {
            const itemIdToremove = action.payload
            const itemToremove = state.find((item) => item.id === itemIdToremove)

            if (itemToremove) {
                if (itemToremove.quantity > 1) {
                    itemToremove.quantity -= 1

                } else {
                    return state.filter((item)=>item.id !== itemIdToremove)

                }
            }
            return state
        },
        emptyCart: (state) => {
            return state = []
        }
    }
})
export const { addToCart, removeFromCartlist, emptyCart } = cartSlice.actions;
export default cartSlice.reducer