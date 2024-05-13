import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Relative from '../Relative';
import { AiOutlineHeart } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook, BsPinterest } from 'react-icons/bs'

function AddToCart() {
  const [singleItem, setSingleItem] = useState(null);
  const { id } = useParams();

  // Define a state variable to track when the data is loaded
  const [dataLoaded, setDataLoaded] = useState(false);

  // Function to fetch single product data
  const fetchSingleProductData = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setSingleItem(res.data);

      // Set dataLoaded to true when data is loaded
      setDataLoaded(true);
    });
  };

  useEffect(() => {
    fetchSingleProductData();
  }, [id]);
  return (
    <>
      <div className='teak'>
        <ul>
          <li>/ Home</li>
          <li>/ Shop</li>
          <li>/ New & Now</li>
          <li>/ New Arrivals</li>
          <li>/ Teak Garden Chair With Armrests</li>
        </ul>
      </div>
      <div className='flex h-screen flex-col lg:flex-row justify-center items-center px-4 pt-32 pb-6 lg:pb-12 cart capitalize'>



        <div className='lg:w-1/2 h-full border lg:border-r-0'>

          {dataLoaded && (
            <img
              src={singleItem.image}
              alt={singleItem.title}
              className='w-full h-full max-h-80 object-contain'
            />
          )}
        </div>


        <div className='w-full lg:w-1/2 bg-white border lg:border-l-0'>

          {dataLoaded && (
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-4'>{singleItem.category}</h1>
              <h2 className='text-xl font-semibold mb-2'>{singleItem.title}</h2>
              <button></button>
              <div className='flex items-center text-yellow-500 mb-4'>

                {Array.from({ length: singleItem.rating.rate }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 fill-current'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 0a1 1 0 01.771.365l2.814 3.385 6.586.957a1 1 0 01.553 1.705l-4.69 4.096 1.122 6.609a1 1 0 01-1.451 1.055L10 16.268l-5.895 3.104a1 1 0 01-1.451-1.055l1.122-6.608-4.69-4.097a1 1 0 01.553-1.704l6.586-.958 2.814-3.384A1 1 0 0110 0zm0 2a1 1 0 01.857.485l2.315 2.787-.553 3.256a1 1 0 01.29.924l1.16 6.817-3.712-1.956a1 1 0 01-.928 0l-3.712 1.956 1.16-6.817a1 1 0 01.29-.924l-3.712-2.787L9.143 2.485A1 1 0 0110 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                ))}
                <span className='ml-2'>{singleItem.rating.rate}</span>
              </div>
              <h1 className='text-4xl font-semibol mt-4 pb-3'>${singleItem.price}</h1>
              <p>{singleItem.description}</p>
              <button className='addTo'>Add to cart</button>
              <button className='byBtn'>BUY NOW</button>
              <div className='w-full border flex px-5 py-5 justify-between'>
                <div className='flex text-md gap-5'><AiOutlineHeart /> Add to wishlist</div>
                <div className='flex text-md gap-5'><BiGitCompare /> Compare</div>
                <div className='flex text-md gap-5'><BsFacebook /> <AiOutlineTwitter /> <BsPinterest /></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Relative />
    </>
  );
}

export default AddToCart;
