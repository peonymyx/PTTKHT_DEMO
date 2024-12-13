import React from 'react';
import './PaymentSuccess.scss'; // Import SCSS styles

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="check-icon">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
          <circle cx="50" cy="50" r="48" stroke="green" strokeWidth="4" fill="transparent" />
          <path d="M25 50L40 65L75 35" stroke="green" strokeWidth="6" fill="transparent" />
        </svg>
      </div>
      <h2>Thanh toán thành công!</h2>
      <p>Cảm ơn bạn đã sử dụng dịch vụ. Giao dịch của bạn đã được xử lý thành công.</p>
      <button onClick={() => window.location.href = '/'}>Quay lại Trang Chủ</button>
    </div>
  );
};

export default PaymentSuccess;
