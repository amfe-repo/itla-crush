import { FormEvent, FormEventHandler, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { addUser } from '../../services/firebase/api';
import { getSession } from '../../services/localstorage/apiSession';
import { successAlert, errorAlert } from '../../utilities/alerts';

import './FormRegister.css';

export default function FormRegister() {

    const [name, setName] = useState<string>("");
    const [last, setLast] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [vefPass, setVefPass] = useState<string>("");

    const createUser = (e: FormEvent)=>
    {
        e.preventDefault();

        if(password != vefPass)
        {
            errorAlert('Passwords do not match');
            return;
        } 

        try {
            addUser({
                name: name,
                lastname: last,
                username: user,
                email: email,
                phone: phone,
                password: password
            });

            successAlert('User registered');
        } catch (error) {
            errorAlert('User not registered');
        }
    }

  return (
      <>
      {getSession() && <Navigate replace to ="/perfil"/>}
    <form className="mx-auto my-0 border border-info shadow-lg text-info mb-5 p-4" onSubmit={createUser}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" onChange={ e => setName(e.target.value) } className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">Lastname</label>
            <input type="text" onChange={ e => setLast(e.target.value) } className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">User</label>
            <input type="text" onChange={ e => setUser(e.target.value) } className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">Email</label>
            <input type="email" onChange={ e => setEmail(e.target.value) } className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">Phone number</label>
            <input type="text" onChange={ e => setPhone(e.target.value) } className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={ e => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Verify password</label>
            <input type="password" onChange={ e => setVefPass(e.target.value) } className="form-control" id="exampleInputPassword2" required />
        </div>
        <div className="button-register w-100 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary text-secondary form-btn-submit mt-3">Send</button>
        </div>
    </form>
    </>
  )
}
