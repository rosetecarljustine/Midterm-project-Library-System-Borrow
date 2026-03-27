import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Library.css";
import "./Navbar.css";
import logo from "./assets/letter_b_icon.png";
import { useLibrary } from "./LibraryContext";
import {
  historyBooks,
  scienceBooks,
  technologyBooks,
  literatureBooks
} from "./Books.jsx";

function Library() {
  const navigate = useNavigate();
  const location = useLocation();

  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    location.state?.user || (storedUser ? JSON.parse(storedUser) : {})
  );
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [librarySearch, setLibrarySearch] = useState("");
  const [libraryResults, setLibraryResults] = useState([]);
  const [activeTab, setActiveTab] = useState("borrowed");

  const { borrowedBooks, returnedBooks, returnBook, deleteBook } = useLibrary();

const allBooks = [
  ...historyBooks.map(b => ({ ...b, category: "history" })),
  ...scienceBooks.map(b => ({ ...b, category: "science" })),
  ...technologyBooks.map(b => ({ ...b, category: "technology" })),
  ...literatureBooks.map(b => ({ ...b, category: "literature" })),
];

  // ------------------- LIBRARY SEARCH -------------------
  const handleLibrarySearch = (e) => {
    const query = e.target.value;
    setLibrarySearch(query);

    if (!query.trim()) {
      setLibraryResults([]);
      return;
    }

    const allUserBooks = [...borrowedBooks, ...returnedBooks];
    const results = allUserBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    setLibraryResults(results.slice(0, 5));
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

  navigate(`/${book.category}`, { state: { user, book } });
};

  const handleLibrarySuggestionClick = (book) => {
    setLibrarySearch("");
    setLibraryResults([]);
    if (borrowedBooks.some(b => b.title === book.title)) setActiveTab("borrowed");
    else setActiveTab("returned");
  };

  // ------------------- LOGOUT -------------------
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    navigate("/");
  };

  const filteredBorrowed =
    librarySearch === ""
      ? borrowedBooks
      : borrowedBooks.filter((book) =>
          book.title.toLowerCase().includes(librarySearch.toLowerCase())
        );

  const filteredReturned =
    librarySearch === ""
      ? returnedBooks
      : returnedBooks.filter((book) =>
          book.title.toLowerCase().includes(librarySearch.toLowerCase())
        );

  return (
    <div className="library-container">
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

      {/* LIBRARY SEARCH (BOTTOM) */}
      <div className="library-search-section">
        <div className="search-wrapper-library center-search">
          <input
            className="searchlibrary"
            type="text"
            placeholder="🔍 Search your borrowed/returned books..."
            value={librarySearch}
            onChange={handleLibrarySearch}
          />
          {libraryResults.length > 0 && (
            <div className="search-suggestions-library">
              {libraryResults.map((book, i) => (
                <div
                  key={i}
                  className="suggestion-item-library"
                  onClick={() => handleLibrarySuggestionClick(book)}
                >
                  {book.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TABS */}
      <div className="library-section">
        <div className="tabs-library">
          <button
            className={`section-btn-library ${activeTab === "borrowed" ? "active" : ""}`}
            onClick={() => setActiveTab("borrowed")}
          >
            Borrowed Books
          </button>
          <button
            className={`section-btn-library ${activeTab === "returned" ? "active" : ""}`}
            onClick={() => setActiveTab("returned")}
          >
            Returned Books
          </button>
        </div>

        {/* BORROWED */}
        {activeTab === "borrowed" && (
          <div className="books-grid-library">
            {filteredBorrowed.length > 0 ? (
              filteredBorrowed.map((book, index) => (
                <div className="book-card-library" key={index}>
                  <img src={book.img} alt={book.title} />
                  <p className="book-title-library">{book.title}</p>
                  <button className="library-button" onClick={() => returnBook(book)}>Return</button>
                </div>
              ))
            ) : (
              <p className="no-books-library">No books found.</p>
            )}
          </div>
        )}

        {/* RETURNED */}
        {activeTab === "returned" && (
          <div className="books-grid-library">
            {filteredReturned.length > 0 ? (
              filteredReturned.map((book, index) => (
                <div className="book-card-library" key={index}>
                  <img src={book.img} alt={book.title} />
                  <p className="book-title-library">{book.title}</p>
                  <button className="library-button delete" onClick={() => deleteBook(book)}>Delete</button>
                </div>
              ))
            ) : (
              <p className="no-books-library">No books found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;