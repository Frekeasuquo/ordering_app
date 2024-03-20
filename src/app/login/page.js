"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {signIn} from "next-auth/react";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials', {email, password,})
        setLoginInProgress(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-primary text-center text-4xl uppercase mb-4">
                Login 
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="example@gmail.com" value={email} onChange={e => setEmail(e.target.value)} disabled={loginInProgress}/>
                <input type="password" placeholder="******" value={password} onChange={e => setPassword(e.target.value)} disabled={loginInProgress}/>
                <button type="submit" disabled={loginInProgress}>
                    Login
                </button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button type="button" onClick={() => signIn('google', {callbackUrl:'/'})} className="flex gap-4 justify-center"> 
                    <Image src={'/google.png'} alt="google" width='24' height='24' />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    {`Don't have an account?`} {' '}
                    <Link className="underline" href={'/register'}>Register here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}