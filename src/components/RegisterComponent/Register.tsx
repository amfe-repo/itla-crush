import FormRegister from "./FormRegister";
import './Register.css';

export default function Register() {
  return (
    <div className="container-fluid w-75 mx-auto p-0 row flex-column register-form">
        <p className="text-center fs-3 text-primary col">
          Register
        </p>
        <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
          <FormRegister></FormRegister>
        </div>
    </div>
  )
}
