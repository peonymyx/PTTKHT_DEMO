import React, { useEffect, useState } from "react";
import "./Nav.scss";
export default function Navigation() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Cập nhật thông tin người dùng từ localStorage
    }
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Trang chủ</a>
        </li>
        <li>
          <a href="/gioi-thieu">Giới thiệu</a>
        </li>

        {/* Dropdown for "Răng sứ thẩm mỹ" */}
        {user ? (
          <li>
            <a href="/lichhen">Quản lý lịch hẹn</a>
          </li>
        ) : (
          <li className="dropdown">
            <a href="#">Răng sứ thẩm mỹ</a>
            <ul className="dropdown-menu">
              <li>
                <a href="/rang-su-tham-my/loai-1">Loại 1</a>
              </li> 
              <li>
                <a href="/rang-su-tham-my/loai-2">Loại 2</a>
              </li>
              <li>
                <a href="/rang-su-tham-my/loai-3">Loại 3</a>
              </li>
            </ul>
          </li>
        )}
        <li>
          <a href="/booking">Đặt lịch hẹn</a>
        </li>
        {user ? (
          <li>
            <a href="/thanh-toan">Thanh toán</a>
          </li>
        ) : (
          <li>
            <a href="/nha-khoa-tong-quat">Nha khoa tổng quát</a>
          </li>
        )}

        <li>
          <a href="">Ưu đãi</a>
        </li>
        <li>
          <a href="">Bảng tin</a>
        </li>
      </ul>
    </nav>
  );
}
