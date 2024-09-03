import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

import stringToNumber from "../../utils/numberConversion"
import removeSymbols from "../../utils/numberFormatting"

import { cartActions } from "../../redux/cartSlice"
// import { AppDispatch } from "../../redux/store"

type PropsType = {
    id: string,
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    qty: number
}

export default function BookForm(props: PropsType) {
    const inputRef = useRef<HTMLInputElement>(null!)
    const dispatch = useDispatch()
    const router = useRouter()
    const { pathname } = router

    const addItemToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        const inputValueAsNumber = stringToNumber(inputRef.current.value)
        const formattedPrice = removeSymbols(props.price)
        const item = {
            id: props.id,
            title: props.title,
            subtitle: props.subtitle,
            isbn13: props.isbn13,
            price: formattedPrice,
            image: props.image,
            qty: inputValueAsNumber
        }

        if(inputValueAsNumber > 0) {
            dispatch(cartActions.addItemToCart({inputQuantity: inputValueAsNumber, itemPrice: formattedPrice, item: item}))
        }
    }

    const removeItemFromCartHandler = (id: string) => {
        dispatch(cartActions.removeItemFromCart({idToRemove: id}))
    }

    return(
        <div className="flex flex-col items-end pl-1">
            <div>
                <input type="number" defaultValue={1} min={1} max={10} step={1} className="outline-none border-2 border-gray-200 rounded-lg w-12 pl-1" ref={inputRef} onClick={(event) => event.stopPropagation()} />
            </div>
            <div className="flex flex-col">
                <button className="border border-blue-500 text-blue-500 rounded-lg py-2 px-4 mt-1 hover:bg-blue-500 hover:text-white" onClick={addItemToCartHandler}>{pathname === "/cart" ? "Update" : "Add to Cart"}</button>
                {pathname === "/cart" ? <button className="border border-red-500 text-red-500 rounded-lg py-2 px-4 mt-1 hover:bg-red-500 hover:text-white" onClick={() => removeItemFromCartHandler(props.id)}>Remove</button> : ""}
            </div>
        </div>
    )
}
