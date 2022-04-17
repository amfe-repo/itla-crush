import './FormRegister.css';

export default function FormRegister() {
  return (
      <>
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Lastname</label>
            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">User</label>
            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">Phone number</label>
            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" required />
        </div>
    </form>
    <div className="button-register w-100 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Send</button>
    </div>
    </>
  )
}
