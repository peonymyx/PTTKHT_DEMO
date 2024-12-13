import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate(); // Sử dụng hook
  const [user, setUser] = useState(null);
  const handleLoginClick = () => {
    navigate("/login"); // Điều hướng đến trang login
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Cập nhật thông tin người dùng từ localStorage
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa thông tin người dùng khỏi localStorage
    setUser(null); // Cập nhật trạng thái user thành null
    window.location.href = "/";
  };
  return (
    <div>
      <div className="contact-info-container">
        <div className="contact-info-wrapper">
          <div className="contact-info">
            472- 474 LÝ THÁI TỔ, PHƯỜNG 10, QUẬN 10 | 028 629 333 93
          </div>
          <div className="contact-info">
            64 LÝ CHÍNH THẮNG, PHƯỜNG 8, QUẬN 3 | 028 224 399 25
          </div>
        </div>
      </div>

      <header>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-phone">
          <i className="fa-solid fa-phone header-phone-icon"></i>
          028 629 333 93
        </div>
        <div className="header-user">
          {user ? (
            <div className="header-user-logined">
              <i className="fa-solid fa-message"></i>
              <i className="fa-solid fa-bell"></i>
              <div className="header-user-name">
                <a href="#">Nguyễn Văn A</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/rang-su-tham-my/loai-1">Profile</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Đăng Xuất</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button onClick={handleLoginClick}>
              <i className="fa-regular fa-user"></i>
              Đăng ký / Đăng nhập
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
