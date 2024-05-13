import React from 'react'
import CategoryCard from './CategoryCard';

function Category() {


    const categoryData = [
        {
            name: "Bed",
            qty: 7,
            img: "/img/bed.jpg"
        },
        {
            name: "Lamp",
            qty: 7,
            img: "/img/lamp-1.jpg"
        },
        {
            name: "Chair",
            qty: 12,
            img: "/img/chair-1.jpg"
        },
        {
            name: "Table",
            qty: 5,
            img: "/img/table.jpg"
        },
    ];

    return (
        <>
            <div className='flex w-full px-10 py-16'>
                {categoryData.map((ele, index) => (
                    <CategoryCard key={index} name={ele.name} qty={ele.qty} img={ele.img} />
                ))}
            </div>
        </>
    )
}

export default Category;