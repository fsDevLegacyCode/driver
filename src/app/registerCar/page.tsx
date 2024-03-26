'use client'
import React, { useState } from "react";
import { Button, ButtonLink } from "../components/button";
import axios from "axios";
import Link from "next/link";

const RegisterCar = () => {
  const [plate, setPlate] = useState("");
  const [carName, setCarName] = useState("");
  const [brand, setBrand] = useState("");
  const [gas, setGas] = useState("");
  const [motor, setMotor] = useState("");
  
  const [error, setError] = useState(false);

  const register = async () => {
    try {
      const payload = { plate: plate, carName: carName, brand: brand, gas: gas, motor: motor};
      const res = await axios.post("http://localhost:80/registercar", payload);
      if (res.data.status) {
        
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
         <h1 className="text-3xl font-bold mb-4 text-center">Register Car</h1>
         <label><span>Plate:</span></label>
          <input
            name="plate"
            type="text"
            value={plate}
            placeholder="Insert car plate"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setPlate(e.target.value)}
          />
          <label><span>Name:</span></label>
          <input
            name="name"
            type="text"
            value={carName}
            placeholder="Insert car name"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setCarName(e.target.value)}
          />
          <label><span>Brand:</span></label>
            <input
            name="brand"
            type="text"
            value={brand}
            placeholder="Insert car brand"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setBrand(e.target.value)}
          />
          <label><span>Gas:</span></label>
            <input
            name="gas"
            type="text"
            value={gas}
            placeholder="Insert car gas type"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setGas(e.target.value)}
          />
          <label><span>Motor:</span></label>
            <input
            name="motor"
            type="text"
            value={motor}
            placeholder="Insert car motor power"
            className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
            onChange={(e) => setMotor(e.target.value)}
          />
          <div className="flex justify-center gap-1 mt-1"> {/* Align button at the end */}
            <Link href="/home"><ButtonLink btnText="Go Back" className="w-32 h-10"></ButtonLink></Link>
            <Button btnText="Save" onClick={register} className="w-32 h-10" />
           
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

export default RegisterCar;
