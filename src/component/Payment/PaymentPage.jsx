import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Sử dụng useNavigate từ react-router-dom v6
import './Payment.scss';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("installments");
  const [installmentDuration, setInstallmentDuration] = useState(3);
  const [paymentType, setPaymentType] = useState("card");
  const [finalAmount, setFinalAmount] = useState(100000);
  const [installmentAmount, setInstallmentAmount] = useState(finalAmount / installmentDuration);
  const navigate = useNavigate(); // Hook để chuyển trang

  // Hàm xử lý thay đổi phương thức thanh toán trả góp
  const handleInstallmentChange = (e) => {
    setInstallmentDuration(e.target.value);
    setInstallmentAmount(finalAmount / e.target.value);
  };

  // Chuyển sang trang Phiếu Thu và truyền thông tin thanh toán
  const handlePaymentSubmit = () => {
    navigate("/receipt", {
      state: {
        serviceName: "Dịch vụ Chăm sóc sức khỏe",
        totalAmount: finalAmount,
        paymentMethod: paymentMethod,
        paymentType: paymentType,
        installmentDuration: installmentDuration,
        installmentAmount: installmentAmount,
      }
    });
  };

  // Hàm format số tiền
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(amount);
  };

  return (
    <div className="payment-container">
      <h2>Thanh Toán Dịch Vụ</h2>
      <div className="payment-step">
        <p><strong>Dịch vụ đã sử dụng:</strong> Chăm sóc sức khỏe</p>
        <p><strong>Giá dịch vụ:</strong> {formatCurrency(100000)}</p>
        <p><strong>Thuế:</strong> {formatCurrency(10000)}</p>
        <p><strong>Tổng số tiền:</strong> {formatCurrency(finalAmount)}</p>
      </div>

      {/* Chọn phương thức thanh toán */}
      <div className="payment-method">
        <label>
          <input
            type="radio"
            name="payment-method"
            value="one-time"
            checked={paymentMethod === "one-time"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Thanh toán một lần
        </label>
        <label>
          <input
            type="radio"
            name="payment-method"
            value="installments"
            checked={paymentMethod === "installments"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Trả góp
        </label>

        {paymentMethod === "installments" && (
          <div className="installments-options">
            <label>
              Chọn số tháng trả góp:
              <select onChange={handleInstallmentChange} value={installmentDuration}>
                <option value="3">3 tháng</option>
                <option value="6">6 tháng</option>
                <option value="12">12 tháng</option>
              </select>
            </label>
          </div>
        )}
      </div>

      {/* Chọn phương thức thanh toán chi tiết */}
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="payment-type"
            value="cash"
            checked={paymentType === "cash"}
            onChange={(e) => setPaymentType(e.target.value)}
          />
          Tiền mặt
        </label>
        <label>
          <input
            type="radio"
            name="payment-type"
            value="card"
            checked={paymentType === "card"}
            onChange={(e) => setPaymentType(e.target.value)}
          />
          Thẻ ngân hàng
        </label>
      </div>

      <div className="payment-summary">
        <h4>Tổng tiền phải trả: {formatCurrency(finalAmount)}</h4>
        {paymentMethod === "installments" && <p>Số tiền trả góp mỗi tháng: {formatCurrency(installmentAmount)}</p>}
      </div>

      <button className="submit" onClick={handlePaymentSubmit}>Thanh toán</button>
    </div>
  );
};

export default PaymentPage;
