import React, { useState } from "react";
import "./SuaLich.scss";

const SuaLich = () => {
  const servicesData = [
    { id: 1, name: "Khám tổng quát răng miệng" },
    { id: 2, name: "Làm sạch răng (Vệ sinh răng miệng)" },
    { id: 3, name: "Tẩy trắng răng" },
    { id: 4, name: "Trám răng" },
    { id: 5, name: "Niềng răng" },
    { id: 6, name: "Cấy ghép răng" },
    { id: 7, name: "Răng sứ thẩm mỹ" },
    { id: 8, name: "Phẫu thuật răng miệng" },
    { id: 9, name: "Chữa tủy răng" },
    { id: 10, name: "Điều trị viêm nướu" },
    { id: 11, name: "Cạo vôi răng" },
    { id: 12, name: "Khám và điều trị bệnh lý miệng" },
    { id: 13, name: "Chữa tủy răng (Root Canal Treatment)" },
    { id: 14, name: "Chỉnh hình răng miệng cho trẻ em" },
    { id: 15, name: "Chữa viêm lợi" },
    { id: 16, name: "Cắt lợi" },
    { id: 17, name: "Tái khám" },
  ];

  const doctorsData = {
    1: [
      {
        id: 1,
        name: "Nha sĩ Nguyễn Văn A",
        gender: "Nam",
        specialty: "Khám tổng quát",
      },
      {
        id: 2,
        name: "Nha sĩ Trần Thị B",
        gender: "Nữ",
        specialty: "Khám tổng quát",
      },
      {
        id: 3,
        name: "Nha sĩ Phan Hữu C",
        gender: "Nam",
        specialty: "Khám tổng quát",
      },
    ],
    2: [
      {
        id: 4,
        name: "Nha sĩ Lê Minh C",
        gender: "Nam",
        specialty: "Vệ sinh răng miệng",
      },
      {
        id: 5,
        name: "Nha sĩ Phạm Thị D",
        gender: "Nữ",
        specialty: "Vệ sinh răng miệng",
      },
      {
        id: 6,
        name: "Nha sĩ Đoàn Thị E",
        gender: "Nữ",
        specialty: "Vệ sinh răng miệng",
      },
    ],
    3: [
      {
        id: 7,
        name: "Nha sĩ Võ Hữu F",
        gender: "Nam",
        specialty: "Tẩy trắng răng",
      },
      {
        id: 8,
        name: "Nha sĩ Nguyễn Thị G",
        gender: "Nữ",
        specialty: "Tẩy trắng răng",
      },
    ],
    4: [
      {
        id: 9,
        name: "Nha sĩ Hoàng Quốc H",
        gender: "Nam",
        specialty: "Trám răng",
      },
      {
        id: 10,
        name: "Nha sĩ Mai Thị I",
        gender: "Nữ",
        specialty: "Trám răng",
      },
    ],
    5: [
      {
        id: 11,
        name: "Nha sĩ Đặng Minh J",
        gender: "Nam",
        specialty: "Chỉnh nha",
      },
      {
        id: 12,
        name: "Nha sĩ Huỳnh Thị K",
        gender: "Nữ",
        specialty: "Chỉnh nha",
      },
    ],
    6: [
      {
        id: 13,
        name: "Nha sĩ Nguyễn Quốc L",
        gender: "Nam",
        specialty: "Cấy ghép răng",
      },
      {
        id: 14,
        name: "Nha sĩ Lê Thị M",
        gender: "Nữ",
        specialty: "Cấy ghép răng",
      },
    ],
    7: [
      {
        id: 15,
        name: "Nha sĩ Trần Hữu N",
        gender: "Nam",
        specialty: "Răng sứ thẩm mỹ",
      },
      {
        id: 16,
        name: "Nha sĩ Phan Thị O",
        gender: "Nữ",
        specialty: "Răng sứ thẩm mỹ",
      },
    ],
    8: [
      {
        id: 17,
        name: "Nha sĩ Võ Minh P",
        gender: "Nam",
        specialty: "Phẫu thuật răng miệng",
      },
      {
        id: 18,
        name: "Nha sĩ Đoàn Thị Q",
        gender: "Nữ",
        specialty: "Phẫu thuật răng miệng",
      },
    ],
    9: [
      {
        id: 19,
        name: "Nha sĩ Hoàng Thị R",
        gender: "Nữ",
        specialty: "Chữa tủy",
      },
      {
        id: 20,
        name: "Nha sĩ Nguyễn Văn S",
        gender: "Nam",
        specialty: "Chữa tủy",
      },
    ],
    10: [
      {
        id: 21,
        name: "Nha sĩ Lê Thị T",
        gender: "Nữ",
        specialty: "Điều trị viêm nướu",
      },
      {
        id: 22,
        name: "Nha sĩ Phan Quốc U",
        gender: "Nam",
        specialty: "Điều trị viêm nướu",
      },
    ],
    11: [
      {
        id: 23,
        name: "Nha sĩ Đoàn Minh V",
        gender: "Nam",
        specialty: "Cạo vôi răng",
      },
      {
        id: 24,
        name: "Nha sĩ Nguyễn Thị W",
        gender: "Nữ",
        specialty: "Cạo vôi răng",
      },
    ],
    12: [
      {
        id: 25,
        name: "Nha sĩ Trương Hữu X",
        gender: "Nam",
        specialty: "Bệnh lý miệng",
      },
      {
        id: 26,
        name: "Nha sĩ Vũ Thị Y",
        gender: "Nữ",
        specialty: "Bệnh lý miệng",
      },
    ],
    13: [
      {
        id: 27,
        name: "Nha sĩ Võ Minh Z",
        gender: "Nam",
        specialty: "Chữa tủy",
      },
      {
        id: 28,
        name: "Nha sĩ Đinh Thị AA",
        gender: "Nữ",
        specialty: "Chữa tủy",
      },
    ],
    14: [
      {
        id: 29,
        name: "Nha sĩ Hoàng Quốc BB",
        gender: "Nam",
        specialty: "Chỉnh nha trẻ em",
      },
      {
        id: 30,
        name: "Nha sĩ Đặng Thị CC",
        gender: "Nữ",
        specialty: "Chỉnh nha trẻ em",
      },
    ],
  };

  const availableSlots = {
    1: {
      "2024-12-15": ["08:00", "10:00", "14:00"],
      "2024-12-16": ["09:00", "11:00", "15:00"],
      "2024-12-17": ["08:30", "13:00", "16:30"],
      "2024-12-18": ["10:00", "12:00", "14:00"],
    },
    2: {
      "2024-12-15": ["09:00", "11:00", "16:00"],
      "2024-12-16": ["08:00", "12:00", "15:00"],
      "2024-12-18": ["09:30", "14:30"],
      "2024-12-19": ["10:00", "12:30"],
    },
    3: {
      "2024-12-15": ["10:00", "13:00", "17:00"],
      "2024-12-17": ["09:00", "11:00", "14:00"],
      "2024-12-19": ["08:00", "12:00"],
    },
    4: {
      "2024-12-16": ["08:00", "10:00", "12:00"],
      "2024-12-19": ["09:00", "15:00"],
      "2024-12-20": ["10:30", "14:00"],
    },
    5: {
      "2024-12-17": ["09:00", "11:00", "13:00"],
      "2024-12-18": ["10:00", "12:00", "14:00"],
    },
  };

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="edit-schedule">
      <h2>Sửa lịch khám</h2>

      {/* Chọn dịch vụ */}
      <div className="form-group">
        <label>Dịch vụ:</label>
        <select
          onChange={(e) => setSelectedService(Number(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>
            Chọn dịch vụ
          </option>
          {servicesData.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {/* Hiển thị danh sách bác sĩ */}
      {selectedService && (
        <div className="form-group doctor-select">
          <label>Bác sĩ:</label>
          <select
            onChange={(e) => setSelectedDoctor(Number(e.target.value))}
            defaultValue=""
          >
            <option value="" disabled>
              Chọn bác sĩ
            </option>
            {doctorsData[selectedService]?.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Hiển thị khung giờ */}
      {selectedDoctor && (
        <div className="form-group slot-select">
          <strong>Khung giờ:</strong>
          <div className="radio-group">
            {Object.entries(availableSlots[selectedDoctor] || {}).map(
              ([date, times]) => (
                <div key={date}>
                  <strong>{date}</strong>
                  <div className="time-slot">
                    {times.map((time) => (
                      <label key={time}>
                        <input
                          type="radio"
                          name="slot"
                          value={`${date} ${time}`}
                        />
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Nút lưu */}
      <button type="submit" className="btn-save">
        Lưu thay đổi
      </button>
    </div>
  );
};

export default SuaLich;
