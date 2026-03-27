import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import "./Navbar.css";
import { useEffect } from "react";
import {
  historyBooks,
  scienceBooks,
  technologyBooks,
  literatureBooks
} from "./Books.jsx";
import logo from "./assets/letter_b_icon.png";
import Background from "./assets/background.avif";


function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    location.state?.user || (storedUser ? JSON.parse(storedUser) : {})
  );
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");


  // ------------------- COMBINE ALL BOOKS -------------------
  const allBooks = [
  ...historyBooks.map(b => ({ ...b, category: "history" })),
  ...scienceBooks.map(b => ({ ...b, category: "science" })),
  ...technologyBooks.map(b => ({ ...b, category: "technology" })),
  ...literatureBooks.map(b => ({ ...b, category: "literature" })),
];

    // ------------------- SEARCH HANDLER -------------------
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

  const handleLogout = () => {
  localStorage.removeItem("user");
  setUser({}); // clear local state
  navigate("/"); // redirect to login/register
};

const handleCardClick = (book, category) => {
  navigate(`/${category}`, { state: { user, book } });
};

  const filteredBooks =
  selectedCategory === "all"
    ? allBooks
    : allBooks.filter(book => book.category === selectedCategory);

  // ------------------- CAROUSEL STATE -------------------
  const itemsPerindex = 6;
  const [scienceIndex, setScienceIndex] = useState(0);
  const [technoIndex, setTechnoIndex] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [literatureIndex, setLiteratureIndex] = useState(0);

  const maxScienceIndex = Math.floor((scienceBooks.length - 1) / itemsPerindex);
  const maxTechnoIndex = Math.floor((technologyBooks.length - 1) / itemsPerindex);
  const maxHistoryIndex = Math.floor((historyBooks.length - 1) / itemsPerindex);
  const maxLiteratureIndex = Math.floor((literatureBooks.length - 1) / itemsPerindex);

  // ------------------- PAGINATION HANDLERS -------------------
  const handlePrev = (index, setIndex) => {
  if (index > 0) setIndex(index - 1);
};

const handleNext = (index, setIndex, books) => {
  if (index < books.length - itemsPerindex) {
    setIndex(index + 1);
  }
};

  const getVisibleBooks = (books, index) =>
  books.slice(index, index + itemsPerindex);


if (!historyBooks || historyBooks.length === 0) {
  return <div>No books found</div>;
}

  // ------------------- JSX -------------------
  return (
    <div className="home-container fade-in-home">
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Readify Logo" className="logo-navbar" />
  
          <div className="nav-links">
            <span className="active">Home</span>
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

      <div className="hero-home">
        <img src={Background} alt="Background" />
        <div className="hero-text-home">
          <b>Welcome to Readify! Ready to borrow a book?</b>
        </div>
      </div>

      <div className="filter-container-home">
        <div className="filter-dropdown-home">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="science">Science</option>
            <option value="technology">Technology</option>
            <option value="history">History</option>
            <option value="literature">Literature</option>
          </select>
        </div>
      </div>

      {selectedCategory !== "all" && (
        <div className="filtered-section-home">
          <h2>{selectedCategory.toUpperCase()}</h2>

          <div className="books-grid-home">
            {filteredBooks.map((book, i) => (
              <div
                key={i}
                className="card-home"
                onClick={() => handleCardClick(book, book.category)}
              >
                <img src={book.img} alt={book.title} />
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory === "all" &&
        [
          { title: "Science", books: scienceBooks.map(b => ({ ...b, category: "science" })), index: scienceIndex, setindex: setScienceIndex },

{ title: "Technology & Computer Science", books: technologyBooks.map(b => ({ ...b, category: "technology" })), index: technoIndex, setindex: setTechnoIndex },

{ title: "Literature & Language", books: literatureBooks.map(b => ({ ...b, category: "literature" })), index: literatureIndex, setindex: setLiteratureIndex },

{ title: "History", books: historyBooks.map(b => ({ ...b, category: "history" })), index: historyIndex, setindex: setHistoryIndex },
        ].map((section, idx) => (
          <div className="section-home" key={idx}>
            <h2 className="h2-home">{section.title}</h2>

            <div className="carousel-wrapper-home">
              <button
                className="prev-btn-home"
                onClick={() => handlePrev(section.index, section.setindex)}
                disabled={section.index === 0}
              >
                &gt;
              </button>

              <div className="carousel-home">
                {getVisibleBooks(section.books, section.index).map((book, i) => (
                  <div
                    key={i}
                    className="card-home"
                    onClick={() => handleCardClick(book, book.category)}
                  >
                    <img src={book.img} alt={book.title} />
                    <p>{book.title}</p>
                  </div>
                ))}
              </div>

              <button
                className="next-btn-home"
                onClick={() =>
                  handleNext(section.index, section.setindex, section.books)
                }
                disabled={section.index >= section.books.length - itemsPerindex}
              >
                &gt;
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;