import firebase, { db } from './config';
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc, where} from "firebase/firestore";

interface userInfo
{
    name: string,
    lastname: string,
    username: string,
    email: string,
    phone: string,
    password: string
}

interface letterInfo
{
    destinatary: string,
    body: string,
    allowPublic: boolean,
    anonymous: boolean,
    author: string
}

export const getUsers = async () =>
{
    const result = await getDocs(query(collection(db, 'users')));
    return result;
}

export const addUser = async (data: userInfo)=>
{
    await addDoc(collection(db, 'users'), data);
}

export const authUser = async(email: string, pass: string)=>
{
    const qry = query(collection(db, 'users'), where('email', '==', email), where('password', '==', pass));

    const result = await getDocs(qry);
    
    if(result.docs.length > 0)
        return result.docs[0].data();
    
    return false;
}

export const addLetter = async (data: letterInfo)=>
{
    await addDoc(collection(db, 'letters'), data);
}

export const getLetters = async (pub: boolean) =>
{
    let result;
    if(pub)
        result = await getDocs(query(collection(db, 'letters'), where('allowPublic', '==', pub)));
    else
        result = await getDocs(query(collection(db, 'letters')));
  
    return result.docs;
}