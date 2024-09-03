import { useRef } from "react"

import { fetchSearchBooks } from "../lib/apiClient"

type PropsType = {
    onSearch: Function
}

const searchHandler = async(searchQuery: string) => {
    try{
        const searchBooksResponse = await fetchSearchBooks(`/search/${searchQuery}`)

        const searchBooks = searchBooksResponse.books.map((searchBook) => ({
            title: searchBook.title,
            subtitle: searchBook.subtitle,
            isbn13: searchBook.isbn13,
            price: searchBook.price,
            image: searchBook.image,
            qty: 0
        }))
        return searchBooks
    }
    catch(error){
        // throw new Error("")
        return []
    }
}

export default function Search(props: PropsType) {
    const inputRef = useRef<HTMLInputElement>(null!)

    const submitHandler = async(event: React.FormEvent) => {
        event.preventDefault()
        
        const searchResult = await searchHandler(inputRef.current.value)
        props.onSearch(searchResult)
    }

    return(
        <form className="w-full md:w-[50%] lg:w-[25%]" onSubmit={submitHandler}>
            <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded-full h-10 outline-none px-4" ref={inputRef} />
        </form>
    )
}
