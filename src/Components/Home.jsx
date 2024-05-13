import React from 'react'

function Home() {
  return (
    <>
        <div className='h-[125vh] bg-gray-100 w-full flex justify-center px-20 items-center'>
            <div className='h-3/5 flex flex-col justify-center gap-5'>
                <h3 className='text-lg'>SALE OFF 25%</h3>
                <h1 className='text-7xl w-4/5'>Discover Living Room Tables</h1>
                <h5 className='font-semibold'>Free standard shipping <span className='font-bold'>with $45</span></h5>

                <a className='  text-sm underline underline-offset-4 pt-10' href="#">SHOP NOW</a>
            </div>
            <div className='bounce h-5/6 py-10 w-[50vw] mt-14'>
                <img className='h-full w-full' src="/img/slide.png" alt="" />
            </div>
        </div>
        </>
  )
}

export default Home
