'use client'
import React, { useState } from "react";
import { Button, ButtonLink } from "../components/button";
import axios from "axios";
import Link from "next/link";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = async () => {
    try {
      const payload = { email: email, password: password, action: "login"};
      const res = await axios.post("http://localhost:80/login", payload);
      if (res.data.status) {
        window.location.href = "/home";
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex justify-between text-center">
      <div className="flex-1"></div>
      <div className="flex-1">
        
        <div className="flex-col flex mb-1 mt-20">
         <h1 className="text-3xl font-bold text-center mb-4">Welcome to Driver Login Page!</h1>
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Insert your email"
            className={error ? "bg-red-100 mb-1 p-2" : "mb-1 p-2 rounded"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Insert your password"
            className={error ? "bg-red-100 mb-1 p-2" : "mb-1 p-2 rounded"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center gap-1 mt-1"> {/* Align button at the end */}
            <Link href="/signup"><ButtonLink btnText="Sign Up" className="w-32 h-10"></ButtonLink></Link>
            <Button btnText="Login" onClick={login} className="w-32 h-10" />
           
          </div>
          {error && (
            <div className="bg-red-200 p-2 mt-2">
              <p className="text-red-700">Incorrect Credentials, Please Try Again...</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1"></div>
    </main>
  );
};

export default login;
