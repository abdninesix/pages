import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, alt, title, desc, link }) => {
  return (
    <div className="group flex flex-col max-w-[25rem] gap-3 p-6 rounded-2xl bg-gray-300 dark:bg-slate-900 transition duration-200">
      <Image
        src={image}
        alt={alt}
        width={800}
        height={450}
        className="rounded-xl object-cover w-fit h-48"
      />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-base text-gray-700 dark:text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-200 overflow-hidden">{desc}</p>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit bg-mytheme hover:bg-black text-white rounded-md px-4 py-2 mt-2"
        >
          Demo
        </Link>
      )}
    </div>
  );
};

export default Card;
