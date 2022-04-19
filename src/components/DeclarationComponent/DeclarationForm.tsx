import './DeclarationForm.css';

export default function DeclarationForm() {
  return (
      <>
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Destinatary</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Select a person</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Your beautiful words</label>
            <textarea className="form-control" required>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa similique dignissimos labore maxime blanditiis asperiores soluta tempora consectetur, expedita mollitia dolorum ullam sapiente minima voluptatum quis? Dicta ducimus nisi aspernatur optio aut eaque consequuntur ullam! Corrupti nostrum nesciunt praesentium voluptates, excepturi quae totam! Et inventore vel amet veniam.
            </textarea>
        </div>
        <div className="form-check">
            <div className="check-public">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={true}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                This declaration is public
                </label>
            </div>
            <div className="check-anonymous">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" defaultChecked={false}/>
                <label className="form-check-label" htmlFor="flexCheckChecked2">
                    Your are anonymous?
                </label>
            </div>
        </div>
    </form>
    <div className="button-register w-100 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Send</button>
    </div>
    </>
  )
}