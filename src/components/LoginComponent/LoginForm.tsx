import './LoginForm.css';
import { authUser, getUsers } from '../../services/firebase/api';
import { FormEvent, useState } from 'react';
import { getSession, insertSession } from '../../services/localstorage/apiSession';
import { errorAlert, successAlert } from '../../utilities/alerts';
import { Navigate } from 'react-router-dom';

export default function LoginForm() {

    const [ email, setEmail ] = useState<string>('');
    const [ pass, setPass ] = useState<string>('');

    const authorization = async (e: FormEvent)=>
    {
        e.preventDefault();
        
        const res = await authUser(email, pass);

        if(res)
            insertSession(res) ? successAlert('Login'): errorAlert('User not found'); 
        else
            errorAlert('User not found');
    } 

  return (
      <>
      {getSession() && <Navigate replace to ="/perfil"/>}
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">Email</label>
            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={e => setPass(e.target.value)} className="form-control" id="exampleInputPassword1" required />
        </div>
    <div className="button-register w-100 d-flex justify-content-center">
        <button type="submit" onClick={authorization} className="btn btn-primary text-secondary form-btn-submit mt-3">Send</button>
    </div>
    </form>
    </>
  )
}