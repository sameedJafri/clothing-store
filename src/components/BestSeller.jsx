import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestSeller = products.filter((item) => (item.bestSeller));
        setBestSeller(bestSeller.slice(0,5));
    }, [])





  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3.4 m-auto text-xs sm:text-base text-grey-600'>
                lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi molestias veritatis quia tempora quisquam laboriosam non eaque accusamus facilis culpa tenetur itaque quod temporibus, ipsa, aut, vitae at quae.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller