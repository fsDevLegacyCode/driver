'use client'
import React, {useState} from 'react';
import { ButtonLink } from '../components/button';
import Link from "next/link";
import axios from 'axios';





const Home = () => {

    const [news, setNews] = useState('');

    const getNews = async () => {
        try {
            const res = await axios.get('url');
            setNews(res.data.news);
        }catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex justify-between'>

            
            <div className="flex-2/3 p-4">
                <h3 className="text-3xl font-bold text-center mb-4">Welcome to Driver Dashboard!</h3>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="border border-gray-200 rounded-lg p-4 mb-2">
                        <h2 className="text-xl font-semibold mb-2">Driver Onboarding</h2>
                        <p>Simplify the driver onboarding process with customizable forms and automated document verification. From background checks to licensing, Driver ensures that all necessary paperwork is completed accurately and efficiently.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 mb-2">
                        <h2 className="text-xl font-semibold mb-2">Driver Onboarding</h2>
                        <p>Simplify the driver onboarding process with customizable forms and automated document verification. From background checks to licensing, Driver ensures that all necessary paperwork is completed accurately and efficiently.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 mb-2">
                        <h2 className="text-xl font-semibold mb-2">Driver Onboarding</h2>
                        <p>Simplify the driver onboarding process with customizable forms and automated document verification. From background checks to licensing, Driver ensures that all necessary paperwork is completed accurately and efficiently.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
