import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Page.css";
import "./Navbar.css";
import { useEffect } from "react";
import {
  historyBooks,
  scienceBooks,
  technologyBooks,
  literatureBooks
} from "./Books.jsx";
import { useLibrary } from "./LibraryContext";
import { typeColors } from "./typeColors";

import logo from "./assets/letter_b_icon.png";

function History() {
  const navigate = useNavigate();
  const location = useLocation();
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    location.state?.user || (storedUser ? JSON.parse(storedUser) : {})
  );

  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { borrowBook } = useLibrary();

const allBooks = [
  ...historyBooks.map(b => ({ ...b, page: "history" })),
  ...scienceBooks.map(b => ({ ...b, page: "science" })),
  ...technologyBooks.map(b => ({ ...b, page: "technology" })),
  ...literatureBooks.map(b => ({ ...b, page: "literature" })),
];

const selectedBook = location.state?.book;

const [currentBook, setCurrentBook] = useState(
  selectedBook || historyBooks[0]
);

const [carouselBooks, setCarouselBooks] = useState(
  historyBooks.filter(b => currentBook && b.title !== currentBook.title)
);

const handleBookClick = (book) => {
  setCarouselBooks(prev => [
    ...prev.filter(b => b.title !== book.title),
    currentBook 
  ]);

  setCurrentBook(book);
};

const handleLogout = () => {
  localStorage.removeItem("user");
  setUser({});
  navigate("/");
};

const handleSearchChange = (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  if (!query.trim()) return setSearchResults([]);

  const results = [...allBooks].filter(
    b =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
  );

  setSearchResults(results.slice(0, 5));
};

const handleSuggestionClick = (book) => {
  setSearchQuery("");
  setSearchResults([]);

  if (book.page === "history") {
    handleBookClick(book);
  } else {
    navigate(`/${book.page}`, { state: { user, book } });
  }
};

useEffect(() => {
  if (location.state?.book) {
    setCurrentBook(location.state.book);
    setCarouselBooks(
      historyBooks.filter(b => b.title !== location.state.book.title)
    );
  }
}, [location.state]);

if (!currentBook) {
  return <div>Loading...</div>;
}

if (!historyBooks || historyBooks.length === 0) {
  return <div>No books found</div>;
}

  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Readify Logo" className="logo-navbar" />  
            <div className="nav-links">
              <span className="active" onClick={() => navigate("/home")}>Home</span>
              <span onClick={() => navigate("/library")}>Library</span>
            </div>
             
            <div className="search-wrapper">
              <input
                className="search"
                type="text"
                placeholder="Search title"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              
              {searchResults.length > 0 && (
                <div className="search-suggestions">
                  {searchResults.map((book, i) => (
                    <div
                      key={i}
                        className="suggestion-item"
                        onClick={() => handleSuggestionClick(book)}
                    >
                      {book.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
            <div className="nav-right">
              <span className="icon" onClick={() => navigate("/notification")}>
                ⩍
              </span>        

              <div className="profile-wrapper">
                <span
                  className="profile"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  {user?.username ? user.username[0].toUpperCase() : "U"}
                </span>

                {showProfile && (
                  <div className="profile-dropdown">
                    <div className="profile-icon">
                      {user?.username ? user.username[0].toUpperCase() : "U"}
                    </div>
            
                    <div className="profile-info">
                      <div className="info-box">
                        <label>Username</label>
                          <span>{user.username}</span>
                      </div>
            
                      <div className="info-box">
                        <label>Fullname</label>
                        <span>{user.fullname || "N/A"}</span>
                      </div>
            
                      <div className="info-box">
                        <label>Email</label>
                          <span>{user.email}</span>
                      </div>
                    </div>

                    <button className="logout-btn" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                )}
              </div>   
            </div>                   
        </div>

        <div className="main-layout-page">
          <div className="top-section-page">
            <div className="top-section-inner">
            <img
              src={currentBook.img || ""}
                alt={currentBook.title}
                  className="main-cover-page"
            />

            <div className="top-info-page">
              <h1>{currentBook.title}</h1>
                <div className="stats-page">
                  <span>👁 {currentBook.reads || "0"} Reads</span>
                  <span>⭐ {currentBook.votes || "0"} Votes</span>
                  <span>📅 {currentBook.time || "Unknown"}</span>
                </div>

                <button
                  className="borrow-btn-page"
                  onClick={() => borrowBook(currentBook)}
                >  
                  Borrow Book
                </button>
            </div>
          </div>
          </div>

            <div className="bottom-section-page">
              <div className="bottom-left-page">
                <p className="author-page"><b>Author:</b> {currentBook.author || "Unknown"}</p>
                <p className="type-page">
                  <strong>Type:</strong>{" "}
                    <span
                      className="type-badge-page"
                      style={{
                      backgroundColor: typeColors[currentBook?.type] || "#ccc"
                      }}
                    >
                      {currentBook?.type || "N/A"}
                    </span>
                </p>
                <p className="description-page">
                  {(currentBook.description || "").length > 1000
                  ? (currentBook.description || "").slice(0, 1000) + "..."
                  : (currentBook.description || "")}
                </p>

                <div className="genres-page">
                  {(currentBook.genres || []).map((g, i) => (
                    <span key={i} className="genre-label-page">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

            <div className="bottom-right-page">
                <div className="carousel-page">
                  <h2 className="h2-page">Other History Books</h2>
                  {carouselBooks.map((book, i) => (
                    <div
                      key={i}
                        className="book-card-page"
                       onClick={() => handleBookClick(book)}
                    >
                      <img className="img-page" src={book.img || ""} alt={book.title} />

                      <div className="card-content-page">
                        <p className="card-title-page">{book.title}</p>
                        <p className="card-type-page">{book.type || "Book"}</p>
                        <p className="card-desc-page">
                          {(book.description || "").length > 80
                          ? (book.description || "").slice(0, 80) + "..."
                          : (book.description || "")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
        </div>

  );
}

export default History;