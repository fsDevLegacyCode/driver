'use client'
import React, { useState } from "react";
import { Button, ButtonLink } from "../components/button";
import Link from "next/link";
import axios from 'axios';

const registerUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
 

  const register = async () => {
    try {
      const payload = { name: name, surname: surname, email: email, password: password};
      const res = await axios.post("http://localhost:80/registeruser", payload);
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
          <h1 className="text-3xl font-bold mb-4 text-center">Register User</h1>
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
          <label><span>Email:</span></label>
          <input
            name="email"
            type="email"
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
          <div className="flex justify-center gap-1 mt-1"> {/* Align button at the end */}
            <Link href="/home"><ButtonLink btnText="Go Back" className="w-32 h-10"></ButtonLink></Link>
            <Button btnText="Save" onClick={register} className="w-32 h-10" />
          </div>
          {error && (
            <div className="bg-red-200 p-2 mt-2">
              <p className="text-red-700">Registration failed, please try again...</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1"></div>
    </main>
  );
};

export default registerUser;
