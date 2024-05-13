import React from 'react'

function Sale() {
    return (
        <>
            <div className='grid grid-cols-2 gap-8 px-20 py-5'>
                <div className='border h-screen group overflow-hidden'>
                    <div className='h-[55%] flex flex-col justify-center relative'>
                        <h1 className='text-5xl tracking-widest capitalize z-10'>
                            up to 40% off top lamp brands
                        </h1>
                        <img className='absolute w-1/2 h-[4/5] right-0 top-28 -z-1 group-hover:scale-125' src="/img/banner.jpg" alt="" />
                        <a className='  text-sm underline underline-offset-4 pt-10' href="#">SHOP NOW</a>
                    </div>
                    <div className='px-10 py-8 h-[45%] z-50 relative bg-cover bg-banner-1'>
                        <h3 className='text-md uppercase'>new products</h3>
                        <h1 className='text-3xl tracking-widest capitalize font-bold'>up to 25% off cabinets</h1>
                        <a className='  text-sm underline underline-offset-4 relative font-semibold top-10' href="#">SHOP NOW</a>
                    </div>

                </div>
                <div className='bg-cover bg-banner-2 flex justify-start items-center gap-4 flex-col text-white py-16'>
                    <h3 className='text-lg uppercase font-semibold'>big sale</h3>
                    <h1 className='text-5xl text-center uppercase'>up to 70% off furniture & decor</h1>
                    <a className='text-sm underline underline-offset-4 relative font-semibold top-10' href="#">SHOP NOW</a>

                </div>
                <div className='border col-start-1 col-end-3 bg-banner-3 h-52 bg-[90%] hover:bg-right-top flex items-center px-12 gap-8'>
                    <div className='text-7xl font-bold'>
                        <h1>10%</h1>
                    </div>
                    <div>
                        <h2 className='text-4xl tracking-widest'>Get More Pay Less</h2>
                        <h3 className=' text-2xl'>On orders $500 + Use Coupon Code: <span className='font-bold'>WSD10</span></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sale
