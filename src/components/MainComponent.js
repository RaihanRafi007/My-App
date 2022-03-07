import React, { Component } from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import bookList from "../assets/books";
import BookList from "./lists/BookList";
import BookDetail from "./representational/BookDetail";
import NewBook from "./representational/NewBook";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookList,
      selectedBook: null,
    };
  }

  selectedBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    });
  };

  render() {
    const books = (
      <BookList
        books={this.state.books}
        selectedBookHandler={this.selectedBookHandler}
      />
    );
    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/books" element={books} />
          <Route path="/new-book" element={<NewBook />} />
          <Route
            path="/:id"
            element={<BookDetail book={this.state.selectedBook} />}
          />
          <Route path="/" element={<Navigate replace to="/books" />} />
        </Routes>
      </div>
    );
  }
}

export default MainComponent;
