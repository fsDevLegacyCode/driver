'use client'
import React, { useState } from "react";
import { Button, ButtonLink } from "../components/button";
import axios from "axios";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  
  const [error, setError] = useState(false);

  const register = async () => {
    try {
      const payload = { email: email, password: password, name: name, surname: surname, number: number , action: "signup" };
      const res = await axios.post("http://www.driver-db.rf.gd/services.php", payload);
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
    <main className="flex justify-between">
      <div className="flex-1"></div>
      <div className="flex-1">
        
        <div className="flex-col flex mb-1 mt-20">
         <h1 className="text-3xl font-bold mb-4">Welcome to Driver Sign Up Page!</h1>
         <label><span>Email:</span></label>
          <input
            name="email"
            type="text"
            value={email}
            placeholder="Insert your email"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label><span>Password:</span></label>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Insert your password"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label><span>Name:</span></label>
            <input
            name="name"
            type="text"
            value={name}
            placeholder="Insert your name"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setName(e.target.value)}
          />
          <label><span>Surname:</span></label>
            <input
            name="surname"
            type="text"
            value={surname}
            placeholder="Insert your surname"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label><span>Number:</span></label>
            <input
            name="number"
            type="number"
            value={number}
            placeholder="Insert your email"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="flex justify-center gap-1 mt-1"> {/* Align button at the end */}
            <Link href="/login"><ButtonLink btnText="Go Back" className="w-32 h-10"></ButtonLink></Link>
            <Button btnText="Send" onClick={register} className="w-32 h-10" />
           
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

export default Signup;