import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../images/lab-1.jpg'
import img2 from '../images/lab-2.jpg'
import img3 from '../images/lab-3.jpg'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="px-4 sm:px-8 lg:px-20">
  <h1 className="text-[40px] pt-20 pl-4 sm:pl-8 lg:pl-20 font-semibold">
    Building a legacy takes it's time, effort, consistency, and dedication.
  </h1>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20 pt-12">
    With just a thought in mind to deliver with creativity and the taste Burger lovers crave, we started with a simple take-away outlet at
  </h2>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20">
    Khayaban-e-Rahat in Karachi.
  </h2>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20 pt-12">
    From introducing the American burger smash technique into the market, serving delicious mouth-watering burgers with saucy and
  </h2>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20">
    scrumptious fries, we’re doing it all!
  </h2>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20 pt-7">
    Our key to success has solely been innovating and experimenting, living up to our name "BURGER LAB".
  </h2>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20 pt-7">
    Growing to 32 outlets across 9 cities in Pakistan in just 10 years, the brand has become a household name.
  </h2>
  <h2 className="text-[21px] pl-4 sm:pl-8 lg:pl-20 pt-7">
    Not long from now, we wish to establish it in the near future as an International Burger Franchise.
  </h2>
  <div className="flex flex-wrap justify-center lg:justify-evenly mt-16 lg:mt-28 gap-4">
    <img
      src={img1}
      className="w-[90%] sm:w-[400px] h-[200px] sm:h-[250px] border-4 lg:border-8 border-red-900"
      alt=""
    />
    <img
      src={img2}
      className="w-[90%] sm:w-[400px] h-[200px] sm:h-[250px] border-4 lg:border-8 border-red-900"
      alt=""
    />
    <img
      src={img3}
      className="w-[90%] sm:w-[400px] h-[200px] sm:h-[250px] border-4 lg:border-8 border-red-900"
      alt=""
    />
  </div>
</div>

    <br />
    <br />
    <Footer/>
    </div>
  )
}

export default About