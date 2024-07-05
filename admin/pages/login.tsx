"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "aze123") {
      // Stocker l'état de connexion dans sessionStorage
      sessionStorage.setItem("isLoggedIn", "true");
      router.push("/"); // Rediriger vers la page d'accueil
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Welcome to DIGITAR</h1>
        <p className="login-subtitle">
          Please log in to access the advanced features of our application.
        </p>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="login-button"
        >
          Login
        </button>
        <footer className="login-footer">
          <p>Developed with ❤️ by DIGITAR</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
