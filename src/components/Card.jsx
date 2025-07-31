'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Card = ({ image, alt, title, desc, cat, link }) => {
    const [showDesc, setShowDesc] = useState(false);

    return (
        <div
            className="flex flex-col max-w-[25rem] p-4 rounded-2xl bg-gray-300 dark:bg-slate-950 shadow-lg duration-200"
        >
            <Image
                src={image}
                alt={alt}
                width={800}
                height={450}
                priority
                className="rounded-xl object-cover w-full h-fit mb-4"
            />
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <span className='px-1 w-fit bg-white text-black font-semibold rounded-md text-xs'>{cat}</span>
                    {showDesc && (
                        <p className="text-sm text-justify text-gray-700 dark:text-gray-300 transition-all duration-200">
                            {desc}
                        </p>
                    )}
                    <button
                        onClick={() => setShowDesc(prev => !prev)}
                        className="text-xs text-blue-600 hover:underline w-fit"
                    >
                        {showDesc ? 'Hide' : 'Read more'}
                    </button>
                </div>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 bg-mytheme hover:bg-black text-white rounded-md p-2 h-fit w-fit"
                >
                    Demo
                </Link>
            </div>
        </div>
    );
};

export default Card;
