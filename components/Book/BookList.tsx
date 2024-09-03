import Content from "../UI/Content"
import BookItem from "./BookItem"

type PropsType = {
    newBooksData: NewBooksDataType[]
}

type NewBooksDataType = {
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    qty: number
}

export default function BookList(props: PropsType) {
    return(
        <Content>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    props.newBooksData.map((newBook) => (
                        <BookItem key={newBook.isbn13} id={newBook.isbn13} title={newBook.title} subtitle={newBook.subtitle} isbn13={newBook.isbn13} price={newBook.price} image={newBook.image} qty={newBook.qty} />
                    ))
                }
            </div>
        </Content>
    )
}
