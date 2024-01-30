import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice1=createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{

        addToWishlist:(state,action)=>{
            const newItem = action.payload
            const existingItem = state.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.push({ ...newItem, quantity: 1 })
            }
            else {
                existingItem.quantity += 1
            }
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist}=wishlistSlice1.actions;
export default wishlistSlice1.reducer