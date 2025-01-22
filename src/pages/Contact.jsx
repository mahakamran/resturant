import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Last from '../images/Last.jpg'
import Footer from '../components/Footer';


const Contact = () => {
  const [name, setname] = useState('')
  const [em, setem] = useState('')
  const [phone, setphone] = useState('')
  const [mess, setmess] = useState('')
  const SumbitHandler = (e)=>{
    e.preventDefault()
    console.log(name);
    setname('')
    console.log(em);
    setem('')
    console.log(phone);
    setphone('')
    console.log(mess);
    setmess('')
    
  }
  return (
    <div>
      <Navbar/>

    <div className='w-full h-400px mt-5'>
      <img    className='w-full h-400px'src={Last} alt="" />
    </div>
    <div className="mt-16 lg:mt-28 px-4">
  <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly gap-12">
    {/* Contact Form */}
    <div className="w-full lg:w-auto">
      <form action="" onSubmit={SumbitHandler}>
        <h1 className="text-3xl font-semibold text-center lg:text-left pl-0 lg:pl-14">
          Contact Us
        </h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="Your Name"
          className="w-full lg:w-[350px] h-[42px] border-2 border-black px-4"
          value={name}
          onChange={(e)=>{
           setname(e.target.value)
          }}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full lg:w-[350px] h-[42px] border-2 border-black px-4"
          value={em}
          onChange={(e)=>{
           setem(e.target.value)
          }}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Your Phone Number"
          className="w-full lg:w-[350px] h-[42px] border-2 border-black px-4"
          value={phone}
          onChange={(e)=>{
           setphone(e.target.value)
          }}
        />
        <br />
        <br />
        <textarea
          placeholder="Your Message"
          className="w-full lg:w-[350px] h-[150px] border-2 border-black px-4 resize-none"
          value={mess}
          onChange={(e)=>{
           setmess(e.target.value)
          }}
        ></textarea>
        <br />
        <br />
        <button className="w-full lg:w-[350px] h-[42px] bg-orange-400 rounded text-white">
          Send Me
        </button>
      </form>
    </div>

    {/* Address Section */}
    <div className="w-full lg:w-auto">
      <h1 className="text-3xl font-semibold text-center lg:text-left">
        Address
      </h1>
      <br />
      <h2 className="text-2xl font-semibold text-center lg:text-left">
        DHA PHASE 2:
      </h2>
      <br />
      <h2 className="text-center lg:text-left">
        Plot 38 C, Commercial Area A Phase 2
      </h2>
      <h2 className="pt-4 text-center lg:text-left">
        Defence Housing Authority, Karachi,
      </h2>
      <h2 className="pt-4 text-center lg:text-left">Karachi City, Sindh</h2>
      <h2 className="pt-4 text-center lg:text-left">Call: ‎‎+92 21 35312211,</h2>
      <h2 className="pt-4 text-center lg:text-left">+92 21 35312222,</h2>
      <h2 className="pt-4 text-center lg:text-left">+92 334 2874373</h2>
    </div>
  </div>
</div>
<br />
<br />
 <Footer/>
    </div>
  )
}

export default Contact