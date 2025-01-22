import React from 'react';
import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import img4 from '../images/4.webp';
import img6 from '../images/6.webp';
import img8 from '../images/8.webp';
import img9 from '../images/ali.webp';
import img10 from '../images/kkkkkk.webp';
import all from '../images/oo.webp';
import alls from '../images/ok.webp';
import a from '../images/a.webp'
import e from '../images/e.webp'
import i from '../images/i.webp'
import oer from '../images/oer.webp'
import fries from '../images/fries.webp'
import tend from '../images/tend.webp'
import tenders from '../images/tenders.webp'
import imgj from '../images/image.webp'
import ice from '../images/ice.webp'
import ice1 from '../images/ice1.webp'
import Footer from '../components/Footer';

import ice2 from '../images/ice2.webp'
import ice3 from '../images/ice3.webp'
import ice4 from '../images/ice4.webp'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
         <div className='bg-black'>
         <Navbar/>
         </div>
      <br />
      <div className='bg-black p-4'>
        
        {/* Burger Section - Non-Responsive */}
        <div className='w-full h-[680px]' id='burger'>
          <img className='w-full h-[680px] mt-5 object-cover' src={imgj} alt="" />
        </div>

        {/* Deals Section */}
        <div className='w-full h-auto bg-[#97bc9b] mt-2 rounded'>
          {/* Add responsive image classes */}
          <img src={all} className='w-full max-w-full h-auto mx-auto mt-5' alt="" />

          <br />

          {/* Product Cards - Responsive */}
          <div className='flex flex-wrap justify-evenly mt-3'>
            <div  id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-white mb-5 mx-auto rounded-lg'>
              <img src={img1} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3'>Simple Burger</h1>
              <h2 className='text-3xl font-[none] text-center pt-3'>RS:1000</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#97bc9b] block'>
                Buy now
              </button>
            </div>
            <div id='flex'  className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-white mb-5 mx-auto rounded-lg'>
              <img src={img2} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3'>Zinger Burger</h1>
              <h2 className='text-3xl font-[none] text-center pt-3'>RS:1100</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#97bc9b] block'>
                Buy now
              </button>
            </div>
            <div id='flex'  className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-white mb-5 mx-auto rounded-lg'>
              <img src={img3} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3'>Big Zinger</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3'>RS:900</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#97bc9b] block'>
                Buy now
              </button>
            </div>
            <div  id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-white mb-5 mx-auto rounded-lg'>
              <img src={img4} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3'>Family Combo Zinger</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3'>RS:1200</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#97bc9b] block'>
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* Zinger Burger Section */}
        <div className='w-full h-auto bg-pink-400 mt-2 rounded'>
          {/* Add responsive image classes */}
          <img src={alls} className='w-full max-w-full h-auto mx-auto mt-5' alt="" />

          <br />

          {/* Product Cards - Responsive */}
          <div className='flex flex-wrap justify-evenly mt-3 ' >
            <div id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={img6} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Simple Burger</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:1000</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-pink-400 block'>
                Buy now
              </button>
            </div>
            <div   id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={img8} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Zinger Burger</h1>
              <h2 className='text-3xl font-[none] text-center pt-3 text-white'>RS:1100</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-pink-400 block'>
                Buy now
              </button>
            </div>
            <div  id='flex'  className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={img9} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto bg-white' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Big Zinger</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:900</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-pink-400 block'>
                Buy now
              </button>
            </div>
            <div   id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={img10} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto bg-white' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Family Combo Zinger</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:1200</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-pink-400 block'>
                Buy now
              </button>
            </div>
          </div>
        </div>
        {/* Fries Section */}
        <div className='w-full h-auto bg-yellow-300 mt-2 rounded'>
          {/* Add responsive image classes */}
          <img src={fries} className='w-full max-w-full h-auto mx-auto mt-5' alt="" />

          <br />

          {/* Product Cards - Responsive */}
          <div className='flex flex-wrap justify-evenly mt-3 ' >
            <div id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={a} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Simple Fries</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:1000</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-yellow-300 block'>
                Buy now
              </button>
            </div>
            <div   id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={e} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Spicy Fries</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:1100</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-yellow-300 block'>
                Buy now
              </button>
            </div>
            <div  id='flex'  className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={i} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto bg-white' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Cheesey Fries</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:900</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-yellow-300 block'>
                Buy now
              </button>
            </div>
            <div   id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={oer} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto bg-white' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Chicago Fries</h1>
              <h2 className='text-3xl font-[none] text-center pt-3 text-white'>RS:1200</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-yellow-300 block'>
                Buy now
              </button>
            </div>
          </div>
        </div>
       
                          {/* tenders */}
<div className='w-full h-auto lg:h-[750px] bg-orange-300 mt-2 rounded p-4 sm:p-6 md:p-9'>
  <img 
    src={tend} 
    className='w-full h-auto mx-auto mt-5' 
    alt="Tenders" 
  />
  <div className='w-full h-auto lg:h-[450px] bg-white rounded flex flex-col lg:flex-row lg:space-x-8 p-4'>
    <img 
      src={tenders} 
      className='w-full lg:w-[550px] h-auto lg:h-[438px] object-cover rounded-lg' 
      alt="Chicken Tenders" 
    />
    <div className='flex flex-col justify-center items-start lg:items-start px-4 lg:px-8 mt-6 lg:mt-0'>
      <h1 className='font-semibold text-3xl sm:text-4xl lg:text-4xl pt-5 lg:pt-10 text-center lg:text-left'>
        Chicken Tenders
      </h1>
      <h2 className='font-sans text-base sm:text-lg lg:text-xl pt-3 text-center lg:text-left'>
        Three chicken tenders, each marinated in a unique flavor: <br />
        classic, spicy Nashville, and tangy Korean.
      </h2>
      <h2 className='font-[none] text-2xl sm:text-3xl lg:text-4xl pt-5 lg:pt-9 text-center lg:text-left'>
        From Rs:900
      </h2>
      <button className='px-8 sm:px-12 lg:px-20 py-3 sm:py-4 lg:py-4 rounded border-2 border-black bg-orange-300  mt-4 w-full lg:w-auto'>
        Buy more
      </button>
    </div>
  </div>
</div>
   {/* Zinger Burger Section */}
   <div className='w-full h-auto bg-[#f54526] mt-2 rounded'>
          {/* Add responsive image classes */}
          <img src={ice} className='w-full max-w-full h-auto mx-auto mt-5' alt="" />

          <br />

          {/* Product Cards - Responsive */}
          <div className='flex flex-wrap justify-evenly mt-3 ' >
            <div id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={ice1} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Butter Shake</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:800</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#f54526] block'>
                Buy now
              </button>
            </div>
            <div   id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={ice2} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Icecream Shake</h1>
              <h2 className='text-3xl font-[none] text-center pt-3 text-white'>RS:400</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#f54526] block'>
                Buy now
              </button>
            </div>
            <div  id='flex'  className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={ice3} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto bg-white' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Oreo Shake</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:500</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#f54526] block'>
                Buy now
              </button>
            </div>
            <div   id='flex' className='w-full sm:w-[350px] md:w-[300px] lg:w-[350px] h-[500px] bg-black mb-5 mx-auto rounded-lg'>
              <img src={ice4} className='h-[320px] w-[320px] rounded mt-2 object-cover mx-auto bg-white' alt="" />
              <h1 className='text-3xl font-semibold text-center pt-3 text-white'>Choco Shake</h1>
              <h2 className='text-3xl font-[none]  text-center pt-3 text-white'>RS:1000</h2>
              <button className='px-8 py-3 sm:px-10 sm:py-3 rounded-lg mx-auto mt-5 bg-[#f54526] block'>
                Buy now
              </button>
            </div>
          </div>
        </div>
<br />
<br />
<Footer/>

      </div>
    </>
  );
}

export default Home;
