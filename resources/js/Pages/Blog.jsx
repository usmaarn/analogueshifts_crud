import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Blog(props) {
    return (
        <All>
            <Head title="Blog" />
            <div className="home py-16 px-2">

                
                <a href='#' className="grid md:grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className='grid justify-center items-center p-2'>
                        <img className="w-full h-80 rounded" src="images/ceo.jpeg" alt=""/>
                    </div>
                    <div className="grid md:col-span-2 p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Analogue shifts CEO Kenneth Malaka, Announces the Unveiling of the new Vetting Site 2022</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Analogue shifts CEO Kenneth Malaka, Announces the Unveiling of the new Vetting Site 2022 Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.
                            Analogue shifts CEO Kenneth Malaka, Announces the Unveiling of the new Vetting Site 2022 Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.
                            Analogue shifts CEO Kenneth Malaka, Announces the Unveiling of the new Vetting Site 2022 Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.
                            
                        </p>
                    </div>
                </a>
               
                
            </div>
        </All>
    );
}
