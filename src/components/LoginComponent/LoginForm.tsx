import './LoginForm.css';

export default function LoginForm() {
  return (
      <>
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
    </form>
    <div className="button-register w-100 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Send</button>
    </div>
    </>
  )
}