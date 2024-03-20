"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {signIn} from "next-auth/react";

export default function RegisterPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            setUserCreated(true);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    }
    
    return (
        <section className="mt-8">
            <h1 className="text-primary text-center text-4xl uppercase mb-4">
                register 
            </h1>
            {userCreated && (
                <div className=" my-4 text-center">
                    User Created. <br />
                    Please login {' '}
                    <Link className="underline" href={'/login'}>Login &raquo; </Link> 
                </div>
            )}
            {error && (
                <div className=" my-4 text-center">
                    Error. <br />
                    Please try agin later
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} disabled={creatingUser}/>
                <input type="password" placeholder="******" value={password} onChange={e => setPassword(e.target.value)} disabled={creatingUser}/>
                <button type="submit" disabled={creatingUser}>
                    Register
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button onClick={() => signIn('google', {callbackUrl:'/'})}
                className="flex gap-4 justify-center"> 
                    <Image src={'/google.png'} alt="google" width='24' height='24' />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account? {' '}
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}