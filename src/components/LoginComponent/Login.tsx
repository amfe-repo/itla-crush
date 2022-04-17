import LoginForm from './LoginForm';
import './Login.css';


export default function Login() {
  return (
    <div className="container-fluid w-75 mx-auto p-0 row flex-column login-form">
        <p className="text-center fs-3 text-primary col">
          Login
        </p>
        <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
          <LoginForm></LoginForm>
        </div>
    </div>
  )
}
