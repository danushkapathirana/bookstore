import { useRouter } from "next/router"

import BookForm from "./BookForm"

type PropsType = {
    id: string,
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    qty: number
}

export default function BookItem(props: PropsType) {
    const router = useRouter()

    const showBookDetailHandler = () => {
        router.push("/" + props.isbn13)
    }
    
    return(
        <div className="rounded-lg shadow-lg flex flex-col justify-center px-4 py-2 cursor-pointer" onClick={showBookDetailHandler}>
            <div className="flex items-center">
                <div>
                    <img src={props.image} alt="" width={100} height={100} />
                </div>
                <div className="flex-1 font-bold">
                    <p>Title: <span className="font-normal">{props.title}</span></p>
                    <p>Subtitle: <span className="font-normal">{props.subtitle}</span></p>
                    <p>ISBN: <span className="font-normal">{props.isbn13}</span></p>
                    <p>Price: <span className="font-normal">{props.price}</span></p>
                </div>
                <BookForm id={props.id} title={props.title} subtitle={props.subtitle} isbn13={props.isbn13} price={props.price} image={props.image} qty={props.qty} />
            </div>
        </div>
    )
}
