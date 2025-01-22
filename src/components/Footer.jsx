import React from 'react'
import mobile from '../images/mobile.webp'
import star from '../images/star.webp'
import chem from '../images/chem.webp'
import burger from '../images/burger.webp'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import play from '../images/122.webp';
import world from '../images/world.webp'
import store from '../images/123.webp';

const Footer = () => {
  return (
    <div>



<div className="w-full h-auto mt-20 bg-[#fbeddb] rounded-t-2xl lg:h-[400px] p-4 sm:p-6 md:p-9">
  {/* Top Section */}
  <div className="flex flex-wrap justify-between">
    {/* Burger Title */}
    <div>
      <h1 className="text-[100px] font-[none]">Burger</h1>
      <img
      src={burger}
      className="w-[100px] h-[100px] "
      alt="Burger icon"
    />
    </div>

    {/* Information Section */}
    <div className="mt-6 lg:mt-0">
      <h2 className="text-3xl font-semibold pt-5">Information</h2>
      <h2 className="text-lg font-serif pt-5">Our Values</h2>
      <h2 className="text-lg font-serif pt-1">Our Location</h2>
      <h2 className="text-lg font-serif pt-1">Lab's Story</h2>
      <h2 className="text-lg font-serif pt-1">Restaurant Jobs</h2>
    </div>

    {/* Contact Section */}
    <div className="mt-6 lg:mt-0">
      <h2 className="font-semibold text-3xl pt-5">Contact Us</h2>
      <h2 className="font-serif text-lg pt-5">0314-3449955</h2>
      <div className="flex mt-5">
        <FaInstagram className="text-3xl" />
        <FaFacebook className="text-3xl ml-5" />
      </div>
    </div>

    {/* Mobile Image - Hidden on Small Devices */}
    <img
      src={mobile}
      className="hidden lg:block w-[200px] h-[350px] mt-[-100px]"
      alt="Mobile display"
    />

    {/* Get the App Section */}
    <div className="mt-6 lg:mt-0">
      <h2 className="font-semibold text-3xl pt-5">Get The App!</h2>
      <h2 className="text-lg font-serif pt-5">App is where the fun is! It's Easy,</h2>
      <h2 className="text-lg font-serif">Fast and Convenient.</h2>
      <div className="flex mt-5">
        <img
          src={store}
          alt="App Store"
          className="w-32"
        />
        <img
          src={play}
          alt="Google Play Store"
          className="ml-5 w-32"
        />
      </div>
    </div>

    {/* World Image */}
    <img
      src={world}
      className="hidden sm:block w-[100px] h-[100px] mt-[-60px]"
      alt="World globe"
    />
  </div>

  {/* Bottom Section */}
  <div className="flex justify-between mt-6">
    <img
      src={chem}
      className="w-[100px] h-[100px]"
      alt="Chemistry icon"
    />
    <img
      src={star}
      className="w-[100px] h-[100px] "
      alt="Burger icon"
    />
  </div>
</div>
    </div>
  )
}

export default Footer