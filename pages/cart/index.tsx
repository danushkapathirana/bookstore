import { useSelector } from "react-redux"

import Header from "../../components/Header"
import Content from "../../components/UI/Content"
import CartItem from "../../components/Cart/CartItem"

import { RootState } from "../../redux/store"

export default function CartPage() {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems)
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice)

    return(
        <div>
            <Header />
            <h3 className="text-center py-10 text-3xl font-semibold">My Cart</h3>
            <Content>
                <div className="md:flex justify-between">
                    <div>
                        {
                            cartItems.map((cartItem) => (
                                <CartItem key={cartItem.id} id={cartItem.id} title={cartItem.title} subtitle={cartItem.subtitle} isbn13={cartItem.isbn13} price={cartItem.price.toString()} image={cartItem.image} qty={cartItem.qty} />
                            ))
                        }
                    </div>
                    <div className="font-semibold text-2xl flex-1 text-end">Total: ${cartTotalPrice}</div>
                </div>
            </Content>
        </div>
    )
}
