import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div className="flex flex-row gap-2 p-2 justify-center md:justify-end w-fit rounded-lg bg-gray-300">
          <Link className="h-8 w-8 md:h-10 md:w-10 p-1" href="https://www.behance.net/abdninesix">
            <Image src="/behance.png" alt="" width={32} height={32}/>
          </Link>
          <Link className="h-8 w-8 md:h-10 md:w-10 p-1" href="https://github.com/abdninesix">
            <Image src="/github.png" alt="" width={32} height={32}/>
          </Link>
          <Link className="h-8 w-8 md:h-10 md:w-10 p-1" href="https://www.freelancer.com/u/abdninesix">
            <Image src="/freelancer.png" alt="" width={32} height={32}/>
          </Link>
          <Link className="h-8 w-8 md:h-10 md:w-10 p-1" href="https://www.upwork.com/freelancers/~0194244346098915a5">
            <Image src="/upwork.png" alt="" width={32} height={32}/>
          </Link>
          <Link className="h-8 w-8 md:h-10 md:w-10 p-1" href="">
            <Image src="/linkedin.png" alt="" width={32} height={32}/>
          </Link>
        </div>
  )
}

export default Socials