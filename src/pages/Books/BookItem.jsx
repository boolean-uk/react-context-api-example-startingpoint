import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function BookItemPage({ books }) {
    const { id } = useParams();
    const [book, setBook] = useState({})

    useEffect(() => {
        if (books &&  id) {
            const matchingBook = books.find((book) => Number(book.id) === Number(id))
            setBook(matchingBook)
        }
    }, [books, id])

    return (
        <main>
            <h2>Book Detail</h2>
            <h3>{book.title}</h3>
            <p>By: {book.author}</p>
            <p>Published by: {book.publisher}</p>
        </main>
    )
}

export default BookItemPage

BookItemPage.propTypes = {
    books: PropTypes.array
}