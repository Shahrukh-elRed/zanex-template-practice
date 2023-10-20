import "../../Pages/Login/login.scss";
import Icon from '@mdi/react';
import { mdiEmail, mdiLock } from '@mdi/js';
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="login100-form validate-form">
        <span className="login100-form-title">
            Login
        </span>
        <div className="wrap-input100 validate-input" data-bs-validate = "Valid email is required: ex@abc.xyz">
            <input className="input100" type="text" name="email" placeholder="Email" />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <Icon className="zmdi zmdi-email" path={mdiEmail} size="17px" />
            </span>
        </div>
        <div className="wrap-input100 validate-input" data-bs-validate = "Password is required">
            <input className="input100" type="password" name="pass" placeholder="Password" />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <Icon className="zmdi zmdi-lock" path={mdiLock} size="17px" />
            </span>
        </div>
        <div className="text-end pt-1">
            <p className="mb-0"><Link to="/forgot-password" className="text-primary ms-1">Forgot Password?</Link></p>
        </div>
        <div className="container-login100-form-btn">
            <Link to="/dashboard" className="login100-form-btn btn-primary">
                Login
            </Link>
        </div>
        {/* <div className="text-center pt-3">
            <p className="text-dark mb-0">Not a member?<Link to="/register" className="text-primary ms-1">Create an Account</Link></p>
        </div> */}
    </form>
  )
}

export default LoginForm