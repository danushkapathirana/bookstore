import Link from "next/link"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/store"

export default function CartBadge() {
    const cartTotalItemQuantity = useSelector((state: RootState) => state.cart.cartTotalItemQuantity)
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice)
    
    return(
        <button className="border border-blue-500 text-blue-500 rounded-full px-8 py-2 hover:bg-blue-500 hover:text-white">
            <Link href="/cart">
                <div className="flex items-center">
                    <div className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                    <div className="font-semibold">
                        <p className="bg-slate-500 text-white rounded-full px-2 py-1">{cartTotalItemQuantity}</p>
                        <p>${cartTotalPrice}</p>
                    </div>
                </div>
            </Link>
        </button>
    )
}
