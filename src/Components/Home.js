import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-scroll'
import Typical from 'react-typical'
import profie from '../Assets/profie.jpg'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white'>
        {/*container*/}
      <img src={profie} alt='profie pic' className='relative hidden lg:flex float-right align- top-[30%] mx-auto right-[150px] w-[400px] h-[400px]
       rounded-[100%] border-blue-500 border-[5px] hov' ></img>
        <div className='max-w-[1000px] mx-auto min-h-full max-h-full px-20 flex flex-col justify-center h-full'>
            <p className='text-2xl text-[#195cd1]'>Hi, I'm  </p>
            <h1 className=' text-4xl text-[#195cd1] font-bold' >
            <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              'Chanchat (Au) 👋',3000,
              ' ',1000,
            ]}
            />  
            </h1>
            <h2 className='text-5xl py-2 '>I'm a Frontend Developer.</h2>
            <p className='text-2xl py-4 max-w-[500px]'>I'm a Frontend Developer Who's turns from Electrical Engineer to be a Programmer
            
             </p>
            <div>
             <Link activeClass="active" to="about"  smooth={true} duration={500}  >
                <button className='text-[black] group border-2 px-6 py-5 flex items-center hover:bg-black hover:text-white duration-100 '>
                     View about
                <span className='group-hover:rotate-90 duration-200'>     
                <BsArrowRight className='ml-3'/>
                </span>
                </button>
                </Link>


            </div>
        </div>
    </div>
  )
}

export default Home
