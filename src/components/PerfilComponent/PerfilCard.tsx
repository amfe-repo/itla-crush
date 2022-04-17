import { Link } from 'react-router-dom';
import './PerfilCard.css';

export default function PerfilCard() {
  return (
      <>
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3 text-center">
            <label className="form-label fs-5">Name of user</label>
        </div>

        <div className="mb-3 text-center">
            <label className="form-label fs-5">Lastname of user</label>
        </div>

        <div className="mb-3 text-center">
            <label className="form-label fs-5">Phone of user</label>
        </div>

        <div className="text-center">
            <label className="form-label fs-5">Email</label>
        </div>
    </form>
    <div className="button-register w-100 d-flex justify-content-center">
        <Link to="/your-declaration" type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Make declaration</Link>
        <button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Your declarations</button>
    </div>
    
    </>
  )
}