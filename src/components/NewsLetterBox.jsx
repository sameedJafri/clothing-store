import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }



  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-grey-800'>Subscribe now & get 20% off</p>
        <p className='text-grey-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga accusamus, dolore distinctio minus accusantium consequuntur dignissimos incidunt, nostrum nisi officia placeat. Optio molestiae esse modi facere adipisci consequuntur voluptatem.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' />
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox