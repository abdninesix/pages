import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, alt, title, desc, link }) => {
    return (
        <div className="group flex flex-col max-w-[25rem] p-4 rounded-2xl bg-gray-300 dark:bg-slate-900 shadow-lg duration-200">
            <Image
                src={image}
                alt={alt}
                width={800}
                height={450}
                className="rounded-xl object-cover w-full h-fit mb-4"
            />
            <div className='flex justify-between'>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mytheme hover:bg-black text-white rounded-md p-2 w-fit"
                >
                    Demo
                </Link>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-200 overflow-hidden">{desc}</p>

        </div>
    );
};

export default Card;
