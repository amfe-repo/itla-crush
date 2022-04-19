import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLetters } from "../../services/firebase/api";
import { getSession } from "../../services/localstorage/apiSession";
import Letter from "./Letter";
import LetterContainer from "./LetterContainer";
import './Letters.css';

const letterAllView = (letters: DocumentData)=>
  {
    let counter = 0;
    
    return (
      <div className="letters-all">

      <div className="row justify-content-center">
      { 
      letters ? letters.map((element:any) => 
        {
          counter += 1;
          return (<div className="col-xl-4 col-lg-6 col-xxl-4 col-xxxl-3 letters-all-card">
            <Letter key={counter} author={element.data().author} to={element.data().destinatary} description={element.data().body}></Letter>
          </div>)
        }) : "Not have letters" 
      }
      
      </div>


    </div>
    )
  }

  /*const LetterCarousel = (letters: DocumentData)=>
  {
    let arrayElements: any[][] = [];

    if(letters)
    {
      for (let index = 0; index < (letters.letters.length); index+=3) 
      {
        arrayElements[index].push(letters.letters.slice(index, index+3));
      }
    }

    return(
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
    )
  }*/

export default function Letters() 
{
  const [cardAll, setCardAll] = useState(true);
  const [letters, setLetters] = useState<DocumentData>([]);

  useEffect(()=>
    {

      async function settingLetters()
      {
        let pub: boolean = true;
  
        if (getSession()) pub = false; 
  
        setLetters(await getLetters(pub));
      }

      settingLetters();
    }, []);

  useEffect(()=>
  {
    if(window.innerWidth <= 1200) setCardAll(true);
  }, []);
  
  return (
    <div className="container-fluid w-75 mx-auto p-0">
      <p className="text-center fs-3 text-primary letters-title">
        The love in the air
      </p>
      {/*
        !cardAll && 
        <>
          <LetterCarousel letters={letters}></LetterCarousel>
          <hr />
          <br />
        </>*/
      }
      
      <div className="row letters-btns-bar">
        { /*<div className="letters-btn-bar-change btn btn-primary col-sm-12 col-md-12 col-lg-3 col-xxl-2 my-lg-0 my-1 mx-1" onClick={()=> setCardAll(!cardAll)}>Change view</div> */}
        <Link to="/your-declaration" className="btn btn-primary col-sm-12 col-md-12 col-lg-3 col-xxl-2 my-lg-0 my-1 mx-1">Make a declaration</Link>
        {/*<div className="btn btn-primary col-sm-12 col-md-12 col-lg-3 col-xxl-2 my-lg-0 my-1 mx-1">Private declaration</div>*/}
      </div>

      {
        cardAll && letterAllView(letters)  
      }
    </div>
  )
}
