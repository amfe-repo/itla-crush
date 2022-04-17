import './Letter.css';

export default function Letter() {
  return (
    <div className="card mx-4 letter-card" style={{"width": "18rem"}}>
        <div className="card-body p-0">
            <h5 className="card-title bg-primary p-2 text-secondary">Card title</h5>
            <div className="letter-card-text">
                <p className="card-text text-info fw-bold">Author</p>
                <p className="letter-card-second-text" >
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className="letter-card-text">
                <p className="card-text text-info fw-bold">To</p>
                <p className="letter-card-second-text" >
                    Lorem ipsum dolor sit.
                </p>
            </div>
            <div className="letter-card-text">
                <p className="card-text text-info fw-bold">Description</p>
                <p className="letter-card-second-text" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae.
                </p>
            </div>
            <a href="#" className="btn btn-primary text-secondary">Card button</a>
        </div>
    </div>
  )
}
