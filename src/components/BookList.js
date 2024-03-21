import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedbooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedbooks}</div>;
};

export default BookList;
