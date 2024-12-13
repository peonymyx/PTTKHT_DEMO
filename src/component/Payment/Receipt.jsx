import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Receipt.scss';

const ReceiptPage = () => {
  const location = useLocation(); // Lấy thông tin từ trang trước đó
  const navigate = useNavigate();
  const { state } = location; // Thông tin thanh toán được truyền qua state
  const { serviceName, totalAmount, paymentMethod, paymentType, installmentDuration, installmentAmount } = state;

  // Hàm xác nhận thanh toán
  const handleConfirmPayment = () => {
    alert("Thanh toán thành công! Cảm ơn bạn.");
    navigate('/Success');
  };

  // Hàm format số tiền
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(amount);
  };

  return (
    <div className="receipt-container">
      <div className="receipt-box">
        <h2>Phiếu Thu</h2>
        <div className="receipt-details">
          <p><strong>Dịch vụ:</strong> {serviceName}</p>
          <p><strong>Tổng số tiền:</strong> {formatCurrency(totalAmount)} VNĐ</p>
          <p><strong>Phương thức thanh toán:</strong> {paymentMethod === "installments" ? "Trả góp" : "Thanh toán một lần"}</p>
          <p><strong>Phương thức thanh toán chi tiết:</strong> {paymentType === "cash" ? "Tiền mặt" : "Thẻ ngân hàng"}</p>
          {paymentMethod === "installments" && (
            <>
              <p><strong>Số tháng trả góp:</strong> {installmentDuration} tháng</p>
              <p><strong>Số tiền mỗi đợt trả:</strong> {formatCurrency(installmentAmount)} VNĐ</p>
            </>
          )}
        </div>
        <button onClick={handleConfirmPayment}>Xác nhận thanh toán</button>
      </div>
    </div>
  );
};

export default ReceiptPage;
