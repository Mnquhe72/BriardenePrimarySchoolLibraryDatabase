import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

export function Login() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // This function handles the login request
  async function handleLogin() {
    // --- IMPORTANT: Paste your script URL here inside the quotes ---
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyNlGuqosmhWwaXQMR_9Miuai1dWaAohL_VdhI_F_bFSL3jDFYMHclnjap0zfLgwO9i/exec";

    const fullEmail = username.trim() + "@kznschools.gov.za";
    setError(""); // Clear previous errors

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ email: fullEmail }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();

      if (result.status === "success") {
        navigate("/home");
      } else {
        setError(result.message || "Login failed.");
      }
    } catch (err) {
      setError("Login failed. Please check your connection and try again.");
    }
  }

  // Educator login form
  const educatorLogin = (
    <div className="login-form">
      <h2>Educator Login</h2>
      <p>Please enter your official school username.</p>
      <div className="input-group">
        <input
          type="text"
          placeholder="your.username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className="domain-suffix">@kznschools.gov.za</span>
      </div>
      <button className="microsoft-login-btn" onClick={handleLogin}>
        Sign In
      </button>
      <button className="back-btn" onClick={() => setSelectedRole(null)}>
        Back
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );

  // Librarian login placeholder
  const librarianLogin = (
    <div className="login-form">
      <h2>Librarian Login</h2>
      <p>Librarian login form will go here.</p>
      <button className="back-btn" onClick={() => setSelectedRole(null)}>
        Back
      </button>
    </div>
  );

  // Initial role selection view
  const roleSelector = (
    <div>
      <h1>Select Your Role</h1>
      <div className="role-buttons">
        <button onClick={() => setSelectedRole("Librarian")}>
          I am a Librarian
        </button>
        <button onClick={() => setSelectedRole("Educator")}>
          I am an Educator
        </button>
      </div>
    </div>
  );

  return (
    <div className="login-container">
      {!selectedRole && roleSelector}
      {selectedRole === "Librarian" && librarianLogin}
      {selectedRole === "Educator" && educatorLogin}
    </div>
  );
}
