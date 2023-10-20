import "./login.scss"
import LogoImg from "../../assets/images/elRed-logo.png"
import LoginForm from "../../Components/LoginForm/LoginForm"

const Login = () => {
  return (
    <div className="login-div">
		<div className="page login-page">
			<div>
				<div className="col col-login mx-auto mt-7">
					<div className="text-center">
						<img src={LogoImg} className="header-brand-img" alt="" />
					</div>
				</div>
				<div className="container-login100">
					<div className="wrap-login100 p-0">
						<div className="card-body">
							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Login