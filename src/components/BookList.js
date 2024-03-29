import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

const BookList = () => {
  const { books } = useContext(BooksContext);

  const renderedbooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedbooks}</div>;
};

export default BookList;
