
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import Login from "./Pages/Login/Login";

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
        </BrowserRouter>
      );
}

export default Routing;