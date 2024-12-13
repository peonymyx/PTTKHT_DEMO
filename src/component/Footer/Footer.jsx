import React from 'react'
import './Footer.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Điện thoại: (123) 456-7890</li>
            <li>Địa chỉ: 123 Đường ABC, Thành phố XYZ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#about">Giới thiệu</a></li>
            <li><a href="#services">Dịch vụ</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mạng xã hội</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Công ty XYZ. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  )
}
