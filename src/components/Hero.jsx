import React from 'react';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to BookNov</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">Find and book the best hotels and experiences.</p>
      </div>
    </section>
  )
}

export default Hero;