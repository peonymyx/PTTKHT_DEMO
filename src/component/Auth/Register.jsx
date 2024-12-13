import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Sử dụng Link và useNavigate
import "./Auth.scss";

export default function Register() {
  const [email, setEmail] = useState(""); // Email
  const [hoTen, setHoTen] = useState(""); // Họ tên đầy đủ
  const [gioiTinh, setGioiTinh] = useState(0); // 0: Nữ, 1: Nam
  const [ngSinh, setNgSinh] = useState(""); // Ngày sinh
  const [cccd, setCccd] = useState(""); // Căn cước công dân
  const [diaChi, setDiaChi] = useState(""); // Địa chỉ liên hệ
  const [sdt, setSdt] = useState(""); // Số điện thoại
  const [matKhau, setMatKhau] = useState(""); // Mật khẩu
  const [confirmMatKhau, setConfirmMatKhau] = useState(""); // Xác nhận mật khẩu
  const [error, setError] = useState(""); // Lỗi hiển thị
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
    if (matKhau !== confirmMatKhau) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    // Kiểm tra các trường thông tin đã đầy đủ chưa
    if (!email || !hoTen || !ngSinh || !cccd || !diaChi || !sdt || !matKhau) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra email hợp lệ
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Email không hợp lệ.");
      return;
    }

    // Lấy danh sách người dùng từ localStorage hoặc khởi tạo mảng rỗng nếu chưa có
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email và số điện thoại có bị trùng không
    const isEmailExist = users.some((user) => user.email === email);
    const isSdtExist = users.some((user) => user.sdt === sdt);

    if (isEmailExist) {
      setError("Email đã tồn tại.");
      return;
    }
    if (isSdtExist) {
      setError("Số điện thoại đã tồn tại.");
      return;
    }

    // Tạo mã khách hàng (Mã người dùng tự động)
    const maKhachHang = "KH" + (users.length + 1).toString().padStart(4, "0");

    // Tạo người dùng mới
    const newUser = {
      maNguoiDung: maKhachHang,
      hoTen,
      gioiTinh,
      ngSinh,
      cccd,
      diaChi,
      sdt,
      email,
      matKhau,
    };

    // Lưu người dùng mới vào localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Đăng ký thành công, điều hướng đến trang login
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Đăng ký</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Họ tên đầy đủ</label>
          <input
            type="text"
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Giới tính</label>
          <select value={gioiTinh} onChange={(e) => setGioiTinh(Number(e.target.value))} required>
            <option value={0}>Nữ</option>
            <option value={1}>Nam</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ngày sinh</label>
          <input
            type="date"
            value={ngSinh}
            onChange={(e) => setNgSinh(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Số căn cước công dân</label>
          <input
            type="text"
            value={cccd}
            onChange={(e) => setCccd(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Địa chỉ liên hệ</label>
          <input
            type="text"
            value={diaChi}
            onChange={(e) => setDiaChi(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại</label>
          <input
            type="text"
            value={sdt}
            onChange={(e) => setSdt(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            value={matKhau}
            onChange={(e) => setMatKhau(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            value={confirmMatKhau}
            onChange={(e) => setConfirmMatKhau(e.target.value)}
            required
          />
        </div>

        <button type="submit">Đăng ký</button>
      </form>
      <p>
        Đã có tài khoản?{" "}
        <Link to="/login" className="link">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
