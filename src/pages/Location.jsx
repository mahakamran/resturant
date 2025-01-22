import React from 'react'
import Navbar from '../components/Navbar'
import map1 from '../images/map1.png'
import map2 from '../images/map2.png'
import map3 from '../images/map3.png'
import map4 from '../images/map4.png'
import map5 from '../images/map5.png'
import map6 from '../images/map6.png'
import Footer from '../components/Footer'

const Location = () => {
  return (
    <>
        <Navbar/>
        <div>
            <h1 className='text-4xl font-semibold pl-24 pt-[100px]'>FIND OUR BRANCHES</h1>
            <h1 className='text-4xl font-semibold pl-24 pt-11'>BURGER LAB BRANCHES IN KARACHI</h1>
            <div className='flex flex-wrap justify-evenly mt-[100px]'>
                {/* Branch Card 1 */}
                <div className='w-[380px] h-[450px] bg-white rounded border-2 border-black shadow-2xl relative m-2'>
                    <h2 className='text-3xl font-semibold text-center pt-5'>Sindhi Muslim</h2>
                    <img src={map1} className='w-[320px] h-[350px] mx-auto mt-5' alt="" />
                    <div className='absolute bottom-5 right-5 bg-white p-2 rounded'>
                        <h1 className='text-[35px] font-bold'> +</h1>
                        <h1 className='text-[35px] font-bold'> -</h1>
                    </div>
                </div>

                {/* Branch Card 2 */}
                <div className='w-[380px] h-[450px] bg-white rounded border-2 border-black shadow-2xl relative m-2'>
                    <h2 className='text-3xl font-semibold text-center pt-5'>(Innovation Kitchen)</h2>
                    <img src={map2} className='w-[320px] h-[350px] mx-auto mt-5' alt="" />
                    <div className='absolute bottom-5 right-5 bg-white p-2 rounded'>
                        <h1 className='text-[35px] font-bold'> +</h1>
                        <h1 className='text-[35px] font-bold'> -</h1>
                    </div>
                </div>

                {/* Branch Card 3 */}
                <div className='w-[380px] h-[450px] bg-white rounded border-2 border-black shadow-2xl relative m-2'>
                    <h2 className='text-3xl font-semibold text-center pt-5'>Malir Cantt</h2>
                    <img src={map3} className='w-[320px] h-[350px] mx-auto mt-5' alt="" />
                    <div className='absolute bottom-5 right-5 bg-white p-2 rounded'>
                        <h1 className='text-[35px] font-bold'> +</h1>
                        <h1 className='text-[35px] font-bold'> -</h1>
                    </div>
                </div>
            </div>

            {/* Branches in Islamabad */}
            <h1 className='text-4xl font-semibold pl-24 pt-[100px]'>BURGER LAB BRANCHES IN ISLAMABAD</h1>
            <div className='flex flex-wrap justify-evenly mt-[100px]'>
                {/* Branch Card 4 */}
                <div className='w-[380px] h-[450px] bg-white rounded border-2 border-black shadow-2xl relative m-2'>
                    <h2 className='text-3xl font-semibold text-center pt-5'>Centaurus Mall</h2>
                    <img src={map4} className='w-[320px] h-[350px] mx-auto mt-5' alt="" />
                    <div className='absolute bottom-5 right-5 bg-white p-2 rounded'>
                        <h1 className='text-[35px] font-bold'> +</h1>
                        <h1 className='text-[35px] font-bold'> -</h1>
                    </div>
                </div>

                {/* Branch Card 5 */}
                <div className='w-[380px] h-[450px] bg-white rounded border-2 border-black shadow-2xl relative m-2'>
                    <h2 className='text-3xl font-semibold text-center pt-5'>Giga Mall Sector C</h2>
                    <img src={map5} className='w-[320px] h-[350px] mx-auto mt-5' alt="" />
                    <div className='absolute bottom-5 right-5 bg-white p-2 rounded'>
                        <h1 className='text-[35px] font-bold'> +</h1>
                        <h1 className='text-[35px] font-bold'> -</h1>
                    </div>
                </div>

                {/* Branch Card 6 */}
                <div className='w-[380px] h-[450px] bg-white rounded border-2 border-black shadow-2xl relative m-2'>
                    <h2 className='text-3xl font-semibold text-center pt-5'>PWD</h2>
                    <img src={map6} className='w-[320px] h-[350px] mx-auto mt-5' alt="" />
                    <div className='absolute bottom-5 right-5 bg-white p-2 rounded'>
                        <h1 className='text-[35px] font-bold'> +</h1>
                        <h1 className='text-[35px] font-bold'> -</h1>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <Footer/>
    </>
  )
}

export default Location