"use server";

const urlLogin = process.env.NEXT_PUBLIC_LOGIN_URL;

export async function handleLogin(formLoginData: FormData) {
    const body = {
        username: formLoginData.get("username"),
        password: formLoginData.get("password"),
    };

    const res = await fetch(`${urlLogin}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        }
    );

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error);
    }

    /* 
        const data = await res.json();
        console.log(data);
    */

}