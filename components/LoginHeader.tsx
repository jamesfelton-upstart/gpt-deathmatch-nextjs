import React, {useState} from "react";
import {useCookies} from 'react-cookie';

export function LoginHeader() {
    const setCookies = useCookies(['sessionToken'])[1]
    const [email, setEmail] = useState('');

    async function login() {
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: email }),
        }
        let response = await fetch(process.env.API_HOSTNAME + "/session", reqOptions)
        response = response.json();
        console.log(response)
        setCookies('sessionToken', response.sessionToken);
    }

    return (
        <form onSubmit={login}>
            <label>Log in:
                <input type="text" value={email} onChange={setEmail} placeholder="email"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}



