import { Link } from "react-router-dom"
import { destroySession, getSession } from "../../services/localstorage/apiSession"

import './Navbar.css'

export default function Navbar() 
{
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 shadow">
      <div className="container-fluid p-3">
        <Link className="navbar-brand fs-4 text-info" to="/">ITLA CRUSH</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse navbar-elements" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link className={`nav-link me-3 fs-5 text-info`} to="/">Home</Link>
            <Link className={`nav-link me-3 fs-5 text-info`} to="/letters">Letters</Link>

            {!getSession() && <Link className={`nav-link me-3 fs-5 text-info`} to="/login">Login</Link>}

            {!getSession() && <Link className={"nav-link me-3 fs-5 text-info"} to="/register">Register</Link>}
             
            {getSession() && <Link className={"nav-link me-3 fs-5 text-info"} to="/perfil">Me</Link> }
            {getSession() && <a className={"nav-link me-3 fs-5 text-info"} href="#" onClick={destroySession} >Logout</a> }
           


          </div>
        </div>
      </div>
    </nav>
  )
}
