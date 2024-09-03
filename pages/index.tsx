import { GetStaticProps } from "next"
import { useState } from "react"

import CartBadge from "../components/Cart/CartBadge"
import Header from "../components/Header"
import Search from "../components/Search"
import BookList from "../components/Book/BookList"
import Error from "../components/Error"

import { fetchNewBooks } from "../lib/apiClient"

type PropsType = {
    newBooksData: Book[],
    errorMessage: string | null
}

type Book = {
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    qty: number
}

export default function Page(props: PropsType) {
    const[booksData, setBooksData] = useState<Book[]>(props.newBooksData)
    
    const searchResultHandler = (result: Book[]) => {
        setBooksData(result.length > 0 ? result : props.newBooksData)
    }

    return(
        <div>
            <Header />
            <h3 className="text-center py-2 text-3xl font-semibold">New Books</h3>
            <div className="w-full flex flex-col items-center gap-2 px-4 mb-4 md:flex-row md:justify-end">
                <Search onSearch={searchResultHandler} />
                <CartBadge />
            </div>
            {/* <BookList newBooksData={props.newBooksData} /> */}
            {!props.errorMessage ? <BookList newBooksData={booksData} /> : <Error>{props.errorMessage}</Error>}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    try{
        const newBooksResponse = await fetchNewBooks("/new", {})

        const newBooks = newBooksResponse.books.map((newBook) => ({
            title: newBook.title,
            subtitle: newBook.subtitle,
            isbn13: newBook.isbn13,
            price: newBook.price,
            image: newBook.image,
            qty: 0
        }))
        return{
            props: {
                newBooksData: newBooks,
                error: null
            },
            revalidate: 10
        }
    }
    catch(error){
        // throw new Error
        return{
            props: {
                fetchNewBooks: [],
                errorMessage: "Failed to load new books. Please try again later."
            }
        }
    }
}
