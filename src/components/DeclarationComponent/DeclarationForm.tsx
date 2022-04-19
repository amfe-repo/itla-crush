import { DocumentData } from 'firebase/firestore';
import { FormEvent, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { addLetter, getUsers } from '../../services/firebase/api';
import { getSession } from '../../services/localstorage/apiSession';
import { errorAlert, successAlert } from '../../utilities/alerts';
import './DeclarationForm.css';

export default function DeclarationForm() 
{
    let counter = 0;
    const [dest, setDest] = useState('cant');
    const [words, setWords] = useState<string>('');
    const [pub, setPublic] = useState<boolean>(true);
    const [anon, setAnon] = useState<boolean>(false);
    const [users, setUsers] = useState<DocumentData>([]);

    useEffect(()=>
    {
        async function listUsers()
        {
            const us = await getUsers();
            setUsers(us.docs);
        }
        
        listUsers();
    }, []);

    const insertLetter = (e: FormEvent)=>
    {
        e.preventDefault();

        if(dest == 'cant')
        {
            errorAlert('Destinatary not selected');
            return false;
        }
        
        try {
            addLetter({
                destinatary: dest,
                body: words,
                allowPublic: pub,
                anonymous: anon,
                author: anon? 'Anonimous' : getSession().name +" "+getSession().lastname
            });
                successAlert('Letter registered');
            } 
            catch (error) 
            {
                errorAlert('Error to register');
            }
    }
 
  return (
      <>
      {!getSession() && <Navigate replace to ="/letters"/>}
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Destinatary</label>
            
                <select className="form-select" onChange={e => setDest(e.target.value)} aria-label="Default select example">
                    <option selected defaultValue={'cant'}>Select a person</option>

                    {
                    users.map((element: any) => 
                    <option key={counter++} defaultValue={counter++}>{`${element.data().name} ${element.data().lastname}`}</option>)
                    }

                    <option defaultValue={'other'}>other</option>
                </select>
            
            {dest == 'other' &&
            
                <div className="mb-3">
                    <br />
                <label htmlFor="exampleInputEmail8" className="form-label">Write custom destinatary</label>
                <input type="text"  onChange={e => setDest(e.target.value)} className="form-control" required />
            </div>
            }

        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Your beautiful words</label>
            <textarea value={words} onChange={e => setWords(e.target.value)} className="form-control" required>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa similique dignissimos labore maxime blanditiis asperiores soluta tempora consectetur, expedita mollitia dolorum ullam sapiente minima voluptatum quis? Dicta ducimus nisi aspernatur optio aut eaque consequuntur ullam! Corrupti nostrum nesciunt praesentium voluptates, excepturi quae totam! Et inventore vel amet veniam.
            </textarea>
        </div>
        <div className="form-check">
            <div className="check-public">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={true} onChange={() => setPublic(!pub)}/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                This declaration is public
                </label>
            </div>
            <div className="check-anonymous">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" defaultChecked={false} onChange={() => setAnon(!anon)}/>
                <label className="form-check-label" htmlFor="flexCheckChecked2">
                    Your are anonymous?
                </label>
            </div>
        </div>
    <div className="button-register w-100 d-flex justify-content-center">
        <button type="submit" onClick={insertLetter} className="btn btn-primary text-secondary form-btn-submit mt-3">Send</button>
    </div>
    </form>
    </>
  )
}