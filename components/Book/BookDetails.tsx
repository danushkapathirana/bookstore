import Content from "../UI/Content"
import BookForm from "./BookForm"

type PropsType = {
    bookDetailsData: {
        id: string
        title: string
        subtitle: string
        isbn13: string
        price: string
        authors: string
        year: string
        description: string
        image: string
        qty: number
    }
}

export default function BookDetails(props: PropsType) {
    return(
        <Content>
            <div className="rounded-lg shadow-lg xl:flex items-center py-2 px-4">
                <div>
                    <img src={props.bookDetailsData.image} alt="" className="text-center" />
                </div>
                <div className="flex-1 font-bold">
                    <p>Title: <span className="font-normal">{props.bookDetailsData.title}</span></p>
                    <p>Subtitle: <span className="font-normal">{props.bookDetailsData.subtitle}</span></p>
                    <p>ISBN: <span className="font-normal">{props.bookDetailsData.isbn13}</span></p>
                    <p>Price: <span className="font-normal">{props.bookDetailsData.price}</span></p>
                    <p>Authors: <span className="font-normal">{props.bookDetailsData.authors}</span></p>
                    <p>Year: <span className="font-normal">{props.bookDetailsData.year}</span></p>
                    <p>Description: <span className="font-normal">{props.bookDetailsData.description}</span></p>
                </div>
                <BookForm id={props.bookDetailsData.id} title={props.bookDetailsData.title} subtitle={props.bookDetailsData.subtitle} isbn13={props.bookDetailsData.isbn13} price={props.bookDetailsData.price} image={props.bookDetailsData.image} qty={props.bookDetailsData.qty} />
            </div>
        </Content>
    )
}
