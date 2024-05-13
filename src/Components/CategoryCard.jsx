import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'


function CategoryCard({ name, qty, img }) {

    return (
        <div className='w-1/4 group duration-200 flex gap-5 ml-5 items-center'>
            <div className='w-32 h-32 cursor-pointer relative overflow-hidden rounded-full'>
                <div className='justify-center duration-200 items-center left-0 top-0 absolute h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] z-50 hidden group-hover:flex'>
                    <AiOutlineLink className='text-white text-2xl' />
                </div>
                <img src={img} alt="" className='absolute group-hover:scale-110 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]' />
            </div>
            <div>
                <h3 className='font-semibold cursor-pointer hover:text-red-600'>{name}</h3>
                <h4>{qty} products</h4>
            </div>
        </div>
    )
}

export default CategoryCard;