import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLibrary } from "./LibraryContext";
import "./Notification.css";
import "./Navbar.css";
import {
  historyBooks,
  scienceBooks,
  technologyBooks,
  literatureBooks
} from "./Books.jsx";

import logo from "./assets/letter_b_icon.png";


function Notification() {
  const navigate = useNavigate();
  const location = useLocation();
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    location.state?.user || (storedUser ? JSON.parse(storedUser) : {})
  );
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { notifications } = useLibrary();

const allBooks = [
  ...historyBooks.map(b => ({ ...b, category: "history" })),
  ...scienceBooks.map(b => ({ ...b, category: "science" })),
  ...technologyBooks.map(b => ({ ...b, category: "technology" })),
  ...literatureBooks.map(b => ({ ...b, category: "literature" })),
];

  // ------------------- SEARCH -------------------
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
    setUser({});
    navigate("/");
  };

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

      {/* NOTIFICATIONS LIST */}
      <div className="notifications">
        <h2>Notifications</h2>
        {notifications.length === 0 && <p>No notifications yet.</p>}
        {notifications.map((n, index) => (
          <div className={`notif-card ${n.type}`} key={index}>
            <p>{n.message}</p>
            <span>{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;