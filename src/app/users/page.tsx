'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ButtonLink } from '../components/button';

interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get<{ users: User[] }>('/api/users');
            setUsers(res.data.users);
        } catch (error) {
            console.error(error);
        }
    }

    const getDataByID = async (id: number) => {
        try {
            const payload = { id: id };
            const res = await axios.get<{ user: User }>('/api/users/' + id); 
            setUser(res.data.user);
        } catch (error) {
            console.error(error);
        }
    }

    const update = async () => {
        try {
            const payload = { name, surname, email, password };
            const res = await axios.post('https://localhost:80/updateuser', payload);
            if (res.data.status) {
                console.log('User updated successfully!');
            } else {
                setError(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Users</h1>
            <div className="overflow-x-auto">
                {user ? (
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
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">Surname</th>
                                <th className="px-6 py-3 bg-gray-200 text-gray-700 border-b">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr onClick={() => getDataByID(user.id)} key={user.id} className="hover:bg-gray-100 cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.surname}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Users;
