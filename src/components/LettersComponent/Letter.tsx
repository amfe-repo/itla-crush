import './Letter.css';

interface LetterProps
{
    author: string,
    to: string,
    description: string
}

export default function Letter({author, to, description}: LetterProps) {
  return (
    <div className="card letter-card" style={{"width": "18rem"}}>
        <div className="card-body p-0">
            <h5 className="card-title bg-primary p-2 text-secondary">Algo de amor...</h5>
            <div className="letter-card-text">
                <p className="card-text text-info fw-bold">Author</p>
                <p className="letter-card-second-text" >
                    {author}
                </p>
            </div>
            <div className="letter-card-text">
                <p className="card-text text-info fw-bold">To</p>
                <p className="letter-card-second-text" >
                    {to}
                </p>
            </div>
            <div className="letter-card-text">
                <p className="card-text text-info fw-bold">Description</p>
                <p className="letter-card-second-text" >
                    {description}
                </p>
            </div>
            {/*<a href="#" className="btn btn-primary text-secondary">Card button</a>*/}
        </div>
    </div>
  )
}
