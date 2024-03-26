'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ButtonLink } from '../components/button';

interface Car {
    id: number;
    name: string;
    brand: string;
    gas: string;
    motor: string;
}

const Cars: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [car, setCar] = useState<Car | null>(null);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [gas, setGas] = useState('');
    const [motor, setMotor] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get<{ cars: Car[] }>('/api/cars');
            setCars(res.data.cars);
        } catch (error) {
            console.error(error);
        }
    }

    const getDataByID = async (id: number) => {
        try {
            const payload = { id: id };
            const res = await axios.get<{ car: Car }>('/api/cars/' + id); 
            setCar(res.data.car);
        } catch (error) {
            console.error(error);
        }
    }

    const update = async () => {
        try {
            const payload = { name, brand, gas, motor };
            const res = await axios.post('https://localhost:80/updatecar', payload);
            if (res.data.status) {
                console.log('Car updated successfully!');
            } else {
                setError(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Cars</h1>
            <div className="overflow-x-auto">
                {car ? (
                    <div className="flex-1">
                        <div className="flex-col flex mb-1 mt-20">
                            <h1 className="text-3xl font-bold mb-4 text-center">Register Car</h1>
                            <label><span>Name:</span></label>
                            <input
                                name="name"
                                type="text"
                                value={name}
                                placeholder="Insert car name"
                                className={error ? "bg-red-100 mb-1 p-2 rounded" : "mb-1 p-2 rounded"}
                                onChange={(e) => setName(e.target.value)}
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
                                <button onClick={update} className="w-32 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">ID</th>
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">Name</th>
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">Brand</th>
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">Gas</th>
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">Motor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map(car => (
                                <tr onClick={() => getDataByID(car.id)} key={car.id} className="hover:bg-gray-100 cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap">{car.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{car.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{car.brand}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{car.gas}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{car.motor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Cars;

