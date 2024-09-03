import axios, { AxiosResponse } from "axios"

type Params = {
    [key: string]: any
}

interface BooksResponse {
    error: string
    total: string
    books: Book[]
}

interface Book {
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    url: string
}

interface DetailsResponse {
    error: string
    title: string
    subtitle: string
    authors: string
    publisher: string
    language: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
}

const apiClient = axios.create({
    baseURL: "https://api.itbook.store/1.0",
    timeout: 1000
})

// get new books
export const fetchNewBooks = async(endPoint: string, params: Params = {}): Promise<BooksResponse> => {
    try{
        const response: AxiosResponse<BooksResponse> = await apiClient.get(endPoint, { params })
        return response.data
    }
    catch(error){
        throw new Error
    }
}

// get book details
export const fetchBookDetails = async(endPoint: string, params: Params = {}): Promise<DetailsResponse> => {
    try{
        const response: AxiosResponse<DetailsResponse> = await apiClient.get(endPoint, { params })
        return response.data
    }
    catch(error){
        throw new Error
    }
}

// get search books
export const fetchSearchBooks = async(endPoint: string, params: Params = {}): Promise<BooksResponse> => {
    try{
        const response: AxiosResponse<BooksResponse> = await apiClient.get(endPoint, { params })
        return response.data
    }
    catch(error){
        throw new Error
    }
}
