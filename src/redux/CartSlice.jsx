import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuentity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id) 
            if(itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }

            state.totalPrice += newItem.price;
            state.totalQuentity++;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id)
            if(findItem) {
                state.totalPrice -= findItem.totalPrice
                state.totalQuentity -= findItem.quantity
                state.products = state.products.filter(item => item.id !==id)
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id)
            if(findItem) {
                findItem.quantity++;
                findItem.totalPrice += findItem.price
                state.totalQuentity++;
                state.totalPrice += findItem.price
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item.id === id)
            if(findItem.quantity > 1) { 
            if(findItem) {
                findItem.quantity--;
                findItem.totalPrice -= findItem.price
                state.totalQuentity--;
                state.totalPrice -= findItem.price
            }
        }
        }
        
        }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer