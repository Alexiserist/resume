import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../Assets/logo3.png';
import Resume from '../Assets/Resume.pdf';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[white] text-black z-40'>
            <div>
                <img src={Logo} alt="Logo Images" style={{ width: '200px' }} />
            </div>

            {/*menu*/}
            <ul className='hidden md:flex'>
                <li className='li--nav text-2xl hover:underline '>
                <Link activeClass="active" to="home"  smooth={true} duration={1000}>
                     Home
                </Link>
                </li>
                <li className='li--nav text-2xl hover:underline '>
                <Link activeClass="active" to="about"  smooth={true} duration={500}>
                     About
                </Link>
                </li>
                <li className='li--nav text-2xl hover:underline '>
                <Link activeClass="active" to="skill"  smooth={true} duration={500}>
                     Skills
                </Link>
                </li>
                <li className='li--nav text-2xl hover:underline '>
                <Link activeClass="active" to="contact" smooth={true} duration={500}>
                     Contact
                </Link>
                </li>
            </ul>

            {/*Hanburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/*Mobile menue*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[white] flex flex-col justify-center items-center '}>
                    
                <li className='li--nav py-6 text-4xl w-full hover:bg-black text-center hover:text-white duration-1000'>
                <Link onClick={handleClick} to="home"  smooth={true} duration={500}>
                     Home
                </Link>                    
                </li>
                <li className='li--nav py-6 text-4xl w-full hover:bg-black text-center hover:text-white duration-1000'>
                <Link onClick={handleClick} to="about"  smooth={true} duration={500}>
                     About
                </Link>      
                </li>
                <li className='li--nav py-6 text-4xl w-full hover:bg-black text-center hover:text-white duration-1000'>
                <Link onClick={handleClick} to="skill"  smooth={true} duration={500}>
                     Skills
                </Link>      
                </li>
                
                <li className='li--nav py-6 text-4xl w-full hover:bg-black text-center hover:text-white duration-1000 '>
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
                     Contact
                </Link>      
                </li> 
                <div className='flex flex-col-5 gap-3 justify-center items-center w-full '>
                <a href='https://www.linkedin.com/in/chanchat-thanaphan-04066b235/' target="_blank" rel="noreferrer noopener" 
                className='py-8 px-5 hover:bg-[#41b3ffcc] hover:text-white duration-500 '> <FaLinkedin size={35} /> </a> 

                <a href='https://github.com/Alexiserist ' target="_blank" rel="noreferrer noopener" className='py-8 px-5 hover:bg-[black] hover:text-white duration-500'> <FaGithub size={35} /> </a> 
                <a href='https://www.facebook.com/chanchat.thanaphan/'target="_blank" rel="noreferrer noopener"n className='py-8 px-5 hover:bg-blue-600 hover:text-white duration-500'> <FaFacebook size={35} /> </a> 
                <a href='mailto:chanchatthanaphan@gmail.com' className='py-8 px-5 hover:bg-blue-400 hover:text-white duration-500'> <HiOutlineMail size={35} /> </a> 
                <a href={Resume} download="Resume" className='py-8 px-5 hover:bg-[#979797] hover:text-white duration-500'> <BsFillPersonLinesFill size={35} /> </a> 
                </div>
                  
                   
                    
            </ul>

            {/*Social Icon*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='li--nav w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#41b3ffcc]'>
                    <a className='flex justify-between items-center w-full text-[white] '
                     href='https://www.linkedin.com/in/chanchat-thanaphan-04066b235/' target="_blank" rel="noreferrer noopener">
                        Linkendin
                        <FaLinkedin size={35} />
                    </a>
                </li>
                <li className='li--nav w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-black'>
                    <a className='flex justify-between items-center w-full text-[#ffffff] '
                     href='https://github.com/Alexiserist ' target="_blank" rel="noreferrer noopener" >
                        Github
                        <FaGithub size={35} />
                    </a>
                </li>
                <li className='li--nav w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-[#ffffff] '
                     href='https://www.facebook.com/chanchat.thanaphan/' target="_blank" rel="noreferrer noopener" > 
                        Facebook
                        <FaFacebook size={35} />
                    </a>
                </li>
                <li className='li--nav w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-400'>
                    <a className='flex justify-between items-center w-full text-[#ffffff] '
                     href="mailto:chanchatthanaphan@gmail.com">
                        Email
                        <HiOutlineMail size={35} />
                    </a>
                </li>
                                <li className='li--nav w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#979797]'>
                    <a className='flex justify-between items-center w-full text-[#ffffff] '
                     href={Resume} download="Resume">
                        Resume
                        <BsFillPersonLinesFill size={35} />
                    </a>
                </li>
            </ul>

            </div>
        </div>

    )
}

export default Navbar
