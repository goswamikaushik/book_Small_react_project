import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book?.id}/300/200`} alt="book" />

      <div>
        {showEdit ? (
          <BookEdit onSubmit={handleSubmit} book={book} />
        ) : (
          book.title
        )}
      </div>

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>

        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
