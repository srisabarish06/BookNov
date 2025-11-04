import React from 'react';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-white">
        <p className='bg-[#49B9FF]/60 px-95 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:test-5xl md:text-[56px] md:leading-14 font-bold  md:font-extrabold max-w-x1 mt-4'>Discover Your Perfect Gateway Destination</h1>
        <p>Unparalleled luxury and comfort awaits at the world's most exclusive hotels and resorts. Start your journey today</p>
      </div>
    </section>
  )
}

export default Hero;