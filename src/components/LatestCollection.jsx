import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => { 
        setLatestProducts(products.slice(0,10))
    }, [products])

    //console.log(products)

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi molestias veritatis quia tempora quisquam laboriosam non eaque accusamus facilis culpa tenetur itaque quod temporibus, ipsa, aut, vitae at quae.
            </p>
        </div> 
        {/* rendering products */}
        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item.id} 
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

export default LatestCollection