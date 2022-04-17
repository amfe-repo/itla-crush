import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
  return (
    <div className="container-fluid home-component p-0 m-0 me-0 ms-0 d-flex flex-column">
      <div className="home-btn-txt">
        <p className="text-info fs-3">
          A place where your love can grow
          </p>
          <Link to="/letters">
            <div className="btn btn-secondary border border-info shadow-lg text-primary home-btn p-4 fs-2">
              View love
            </div>
          </Link>
      </div>
    </div>
  )
}
