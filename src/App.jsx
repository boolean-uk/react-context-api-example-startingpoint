import { useState } from "react";
import { booksData } from "./data";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookListPage from "./pages/Books/BookList";
import BookItemPage from "./pages/Books/BookItem";

function App() {
  const [books] = useState(booksData);

  return (
    <div className="App">
      <header>
        <h1>Books R Us</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookListPage books={books} />} />
        <Route path="/books/:id" element={<BookItemPage books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
