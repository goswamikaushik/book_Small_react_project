import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedbooks = books.map((book) => {
    return (
      <BookShow
        key={books.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
  return <div className="book-list">{renderedbooks}</div>;
};

export default BookList;
