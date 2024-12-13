import React, { useEffect, useState } from "react";
import Banner1 from '../../assets/banner1.png';
import Banner2 from '../../assets/banner2.png';
import './Banner.scss';

export default function Banner() {
  // state để kiểm tra hình ảnh nào hiển thị
  const [showFirstImage, setShowFirstImage] = useState(true);

  // Chuyển đổi hình ảnh sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 3000); // 3000ms = 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
  }, []);
  return (
    <div className="banner">
      <div
        className={`banner-image ${showFirstImage ? "show" : "hide"}`}
        style={{ backgroundImage: `url(${Banner1})` }}
      ></div>
      <div
        className={`banner-image ${!showFirstImage ? "show" : "hide"}`}
        style={{ backgroundImage: `url(${Banner2})` }}
      ></div>
    </div>
  );
}
