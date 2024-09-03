import { GetStaticPaths, GetStaticProps } from "next"

import Header from "../../components/Header"
import BookDetails from "../../components/Book/BookDetails"
import CartBadge from "../../components/Cart/CartBadge"
import Error from "../../components/Error"

import { fetchBookDetails, fetchNewBooks } from "../../lib/apiClient"

type PropsType = {
    bookDetailsData?: {
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
    },
    errorMessage: string | null
}

export default function BookDetailPage(props: PropsType) {
    return(
        <div>
            <Header />
            <h3 className="text-center py-2 text-3xl font-semibold">Book Detail</h3>
            <div className="text-center px-4 md:text-end">
                <CartBadge />
            </div>
            {props.bookDetailsData !== undefined ? <BookDetails bookDetailsData={props.bookDetailsData} /> : <Error>{props.errorMessage}</Error>}
        </div>
    )
}

export const getStaticProps: GetStaticProps<PropsType, { bookId: string }> = async(context) => {
    const bookId = context.params?.bookId
    try{
        const bookDetailResponse = await fetchBookDetails(`/books/${bookId}`)

        return{
            props: {
                bookDetailsData: {
                    id: bookDetailResponse.isbn13,
                    title: bookDetailResponse.title,
                    subtitle: bookDetailResponse.subtitle,
                    isbn13: bookDetailResponse.isbn13,
                    price: bookDetailResponse.price,
                    authors: bookDetailResponse.authors,
                    year: bookDetailResponse.year,
                    description: bookDetailResponse.desc,
                    image: bookDetailResponse.image,
                    qty: 0
                },
                errorMessage: null
            }
        }
    }
    catch(error){
        // throw new Error
        return{
            props: {
                errorMessage: "Failed to load book details. Please try again later."
            }
        }
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    try{
        const newBooksResponse = await fetchNewBooks("/new", {})

        const paths = newBooksResponse.books.map((newBook) => ({
            params: {
                bookId: newBook.isbn13
            }
        }))

        return{
            paths,
            fallback: "blocking"
        }
    }
    catch(error){
        // throw new Error
        return{
            paths: [],
            fallback: "blocking",
        }
    }
}
