import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function BookListPage({ books }) {

    return (
        <main>
            <h2>List of books</h2>
            <ul>
                {books.map((book, index) => {
                    return (
                        <li key={index}>
                            <h3>{book.title}</h3>
                            <p>by: {book.author}</p>
                            <Link to={`/books/${book.id}`}>View Book</Link>
                        </li>
                    )
                } )}
            </ul>
        </main>
    )
}

export default BookListPage

BookListPage.propTypes = {
    books: PropTypes.array
}