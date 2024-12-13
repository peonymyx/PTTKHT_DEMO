import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Banner from "./component/Banner/Banner";
import Header from "./component/Header/header";
import Navigation from "./component/Navbar/Navigation";
import Footer from "./component/Footer/Footer";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Booking from "./component/Booking/Booking";
import LichHen from "./component/Appoiment/LichHen";
import SuaLich from "./component/Appoiment/SuaLich";
import PaymentPage from "./component/Payment/PaymentPage";
import ReceiptPage from "./component/Payment/Receipt";
import PaymentSuccess from "./component/Payment/Success";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="body">
      <Header />
      <Navigation/>
      <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/lichhen" element={<LichHen/>}/>
          <Route path="/sualich/:id" element={<SuaLich/>}/>
          <Route path="/thanh-toan" element={<PaymentPage/>}/>
          <Route path="/receipt" element={<ReceiptPage/>}/>
          <Route path="/success" element={<PaymentSuccess/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
