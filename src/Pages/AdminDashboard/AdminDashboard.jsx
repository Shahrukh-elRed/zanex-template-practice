import "./admin-dashboard.scss";
import elredLogo from "../../assets/images/elRed-logo.png";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
  return (
    <div className="dashboard-container">
        <div className="header-main">
            <div className="side-header">
                <img src={elredLogo} className="header-logo" alt="" onClick={() => navigate("/dashboard")} />
            </div>
            <div className="header">
                <div className="search-bar">
                    <input type="search" className="search-input" placeholder="Search for anything..." />
                </div>
            </div>
        </div>
        <div className="dashboard-sidebar"></div>
        {/* <div className="dashboard-body"></div> */}
    </div>
    )
}

export default AdminDashboard