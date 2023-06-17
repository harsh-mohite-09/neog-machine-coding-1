import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const BookCard = ({ book }) => {
  const { dispatch } = useAppContext();

  const shelfChangeHandler = (e, bookId) => {
    dispatch({ payload: { id: bookId, shelf: e.target.value } });
  };

  return (
    <div className="book-card">
      <img src={book.img} alt="" />
      <h2>{book.name}</h2>
      <p>{book.author}</p>
      <select
        name="shelf"
        value={book.shelf}
        onChange={(e) => shelfChangeHandler(e, book._id)}
      >
        <option value="none">None</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

export default BookCard;
