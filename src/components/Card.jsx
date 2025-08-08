'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Card = ({ image, alt, title, desc, cat, link, isOpen, onToggle }) => {
    return (
        <div
            className="flex flex-col max-w-[25rem] gap-3 p-3 rounded-2xl bg-gray-300 dark:bg-slate-950 shadow-lg duration-200"
        >
            <Image
                src={image}
                alt={alt}
                width={800}
                height={450}
                priority
                className="rounded-xl object-cover w-full h-fit"
            />
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <span className='px-1 w-fit bg-white text-black font-semibold rounded-md text-xs'>{cat}</span>
                </div>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 bg-mytheme hover:bg-black dark:hover:bg-gray-200 dark:hover:text-black text-white rounded-md p-2 h-fit w-fit"
                >
                    Demo
                </Link>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.p
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-gray-700 dark:text-gray-300 overflow-hidden"
                    >
                        {desc}
                    </motion.p>
                )}
            </AnimatePresence>
            <button
                onClick={onToggle}
                className="text-xs font-semibold text-blue-500 hover:underline w-fit"
            >
                {isOpen ? 'Hide' : 'Read more'}
            </button>
        </div>
    );
};

export default Card;
