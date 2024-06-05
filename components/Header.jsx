import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex h-20 justify-between items-center mx-28 w-auto'>
        <div className='flex gap-12 items-center'>
        <Image src="/hero/Group.png" width={90} height={60} alt='logo'/>
            <a className='text-red-500 font-extrabold' href="/">Home</a>
            <a href="/">AboutUs</a>
            <a href="/">Pricing</a>
            <a href="/">Features</a>
        </div>
        <button className='bg-black text-white py-3 px-10 rounded-md' >Download</button>
    </div>
  )
}

export default Header