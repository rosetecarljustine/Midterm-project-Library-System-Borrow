import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "./assets/Elegant Bibliora logo with book and quill.png";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
  e.preventDefault();
  if (!email || !fullname || !username || !password) {
    alert("Please fill in all fields!");
    return;
  }

  // Create user object
  const user = { username, email, fullname };

  // Save user info to localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Navigate to Home
  navigate("/home");
};

  return (
    <div className="register-container">
      <div className="card-register">
        {/* LEFT SIDE - FORM */}
        <div className="form-section-register">
          <h1>Register Now!</h1>
          <p>Enter your information to register and start borrowing from Readify’s library! </p>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="image-section-register">
          <img src={logo} alt="Readify" className="large-logo-register" />
        </div>
      </div>
    </div>
  );
}

export default Register;