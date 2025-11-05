import React from 'react';
import { assets, cities } from '../assets/assets.js';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-white">
        <p className='bg-[#49B9FF]/60 px-5 py-1 rounded-full mt-20 inline-block'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-tight font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>
        <p className="mt-3 max-w-2xl">Unparalleled luxury and comfort awaits at the world's most exclusive hotels and resorts. Start your journey today</p>
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto mt-6'>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4 '/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id="destinations">
                  {cities.map((city, index) => (
                    <option key={index} value={city} />
                  ))}

                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4 '/>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className='h-4 '/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer w-full md:w-auto' >
                <img src={assets.searchIcon} alt="search" className='h-7' />
                <span>Search</span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Hero;