import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Navbar() {
    return (
        <>
            <header className='absolute w-full'>
                <nav className=' px-4 sm:px-12 py-6 flex justify-between items-center bg-transparent'>
                    <div className='flex gap-1 sm:gap-7 '>
                        <AiOutlineMenu className='text-xl sm:text-2xl font-normal cursor-pointer hover:opacity-60' /> <AiOutlineSearch className='text-xl sm:text-2xl font-normal cursor-pointer hover:opacity-60' />
                    </div>
                    <div className=' h-8 sm:h-10'><img className='h-full w-full cursor-pointer' src={"https://nooni-be87.kxcdn.com/nooni/wp-content/themes/nooni/images/logo.png"} alt="" /></div>
                    <div className='  flex gap-1 sm:gap-7'>
                        <AiOutlineUser className='text-xl sm:text-2xl font-normal cursor-pointer hover:opacity-60' />
                        <AiOutlineHeart className='text-xl sm:text-2xl font-normal cursor-pointer hover:opacity-60' />
                        <AiOutlineShoppingCart className='text-xl sm:text-2xl font-normal cursor-pointer hover:opacity-60' />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
