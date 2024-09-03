import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CartType = {
    cartTotalItemQuantity: 0,
    cartTotalPrice: 0,
    cartItems: []
}

type CartType = {
    cartTotalItemQuantity: number,
    cartTotalPrice: number,
    cartItems: ItemDetails[]
}

type ItemDetails = {
    id: string
    title: string
    subtitle: string
    isbn13: string
    price: number
    image: string
    qty: number
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<{inputQuantity: number, itemPrice: number, item: ItemDetails}>) => {
            const{ inputQuantity, itemPrice, item } = action.payload
            const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === item.id)
            if(existingItemIndex !== -1) {
                state.cartItems[existingItemIndex] = {
                    ...state.cartItems[existingItemIndex],
                    qty: state.cartItems[existingItemIndex].qty + inputQuantity
                }
            }
            else{
                state.cartItems.push(item)
            }
            state.cartTotalItemQuantity += inputQuantity
            // state.cartTotalPrice += inputQuantity * itemPrice
            state.cartTotalPrice = parseFloat(((inputQuantity * itemPrice) + state.cartTotalPrice).toFixed(2))
        },

        removeItemFromCart: (state, action: PayloadAction<{idToRemove: string}>) => {
            const{ idToRemove } = action.payload
            const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === idToRemove)
            if(existingItemIndex !== -1) {
                const itemToRemove = state.cartItems[existingItemIndex]
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== idToRemove)
                state.cartTotalItemQuantity -= itemToRemove.qty
                // state.cartTotalPrice -= itemToRemove.price * itemToRemove.qty
                state.cartTotalPrice = parseFloat((state.cartTotalPrice - (itemToRemove.qty * itemToRemove.price)).toFixed(2))
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice
