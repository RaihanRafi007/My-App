import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../representational/Book";

class BookList extends Component {
  render() {
    console.log(this.props);
    return this.props.books.map((book, index) => {
      return (
        <Link
          to={"/" + book.id}
          key={book.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Book
            bookName={book.bookName}
            writer={book.writer}
            selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
          />
        </Link>
      );
    });
  }
}

export default BookList;
