import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Để điều hướng sau khi đăng nhập thành công
import "./Auth.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // Khai báo useNavigate
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
      localStorage.setItem("user", JSON.stringify({ email, password }));
      // Chuyển hướng sau khi đăng nhập thành công
      window.location.href = "/";  // Dùng navigate để điều hướng
    };
    return (
      <div className="auth-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <p>
        Chưa có tài khoản?{" "}
        <Link to="/register" className="link">
          Đăng ký
        </Link>
      </p>
      </div>
    );
  }