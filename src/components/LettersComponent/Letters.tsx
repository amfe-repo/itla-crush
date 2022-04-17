import { useState } from "react";
import Letter from "./Letter";
import LetterContainer from "./LetterContainer";
import './Letters.css';

const letterAllView = ()=>
  {
    return(
      <div className="letters-all">

      <div className="row d-flex justify-content-center">

        <div className="col-3">
          <Letter></Letter>
        </div>
        <div className="col-3">
          <Letter></Letter>
        </div>
        <div className="col-3">
          <Letter></Letter>
        </div>

      </div>

      <div className="row d-flex justify-content-center">

        <div className="col-3">
          <Letter></Letter>
        </div>
        <div className="col-3">
          <Letter></Letter>
        </div>
        <div className="col-3">
          <Letter></Letter>
        </div>
        
      </div>

    </div>
    )
  }

export default function Letters() 
{
  const [cardAll, setCardAll] = useState(false);

  return (
    <div className="container-fluid w-75 mx-auto p-0">
      <p className="text-center fs-3 text-primary letters-title">
        The love in the air
      </p>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <LetterContainer></LetterContainer>
          </div>
          <div className="carousel-item">
            <LetterContainer></LetterContainer>
          </div>
          <div className="carousel-item">
            <LetterContainer></LetterContainer>
          </div>
        </div>
        <button className="carousel-control-prev bg-info" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-info" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      <div className="letters-btns-bar">
        <div className="btn btn-primary mx-2" onClick={()=> setCardAll(!cardAll)}>View all</div>
        <div className="btn btn-primary mx-2">Make a declaration</div>
        <div className="btn btn-primary mx-2">Private declaration</div>
      </div>
        
      {
        cardAll && letterAllView()  
      }
    </div>
  )
}
