import React from 'react'

import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import javascript from '../Assets/javascript.png';
import react from '../Assets/react.png';
import tailwind from '../Assets/tailwind.png';
import flutter from '../Assets/flutter.png';

const Skill = () => {
    return (
        <div name='skill' className='w-full h-full bg-[#CFCFCF]'>
            {/*Container*/}
            <div className='flex flex-col w-full max-w-[1000px] min-h-full max-h-full mx-auto justify-center px-5 '>
                <div>
                    <p className='text-7xl mt-[150px] font-bold text-[#494949] tracking-widest '>Skills.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-20 mb-[100px] '>
                    <div className='shadow-md shadow-[#a7a7a7] hover:scale-110 duration-100'>
                        <img className='w-[100px] pt-5 mx-auto' src={javascript} alt='HTML icon'></img>
                        <h1 className='py-5 '>Javascript
                        <p className='p--bar animate-bar2 my-auto text-right font-bold '> 40%
                          <p className='p--bar--span w-[40%] animate-bar origin-left'></p>
                        </p>   
                        </h1>
                    </div>
                    <div className='shadow-md shadow-[#a7a7a7] hover:scale-110 duration-100'>
                        <img className='w-[100px] pt-5 mx-auto' src={HTML} alt='HTML icon'></img>
                        <h1 className='py-5 '>HTML
                        <p className='p--bar animate-bar2 my-auto text-right font-bold '> 60%
                          <p className='p--bar--span w-[60%] animate-bar origin-left'></p>
                        </p>   
                        </h1>
                    </div>

                    <div className='shadow-md shadow-[#a7a7a7] hover:scale-110 duration-100'>
                        <img className='w-[100px] pt-5 mx-auto' src={CSS} alt='CSS icon'></img>
                        <h1 className='py-5 '>CSS
                        <p className='p--bar animate-bar2 my-auto text-right font-bold '> 50%
                          <p className='p--bar--span w-[50%] animate-bar origin-left'></p>
                        </p>   
                        </h1>
                    
                    </div>
                    
                    <div className='shadow-md shadow-[#a7a7a7] hover:scale-110 duration-100'>
                        <img className='w-[100px] pt-5 mx-auto' src={react} alt='HTML icon'></img>
                        <h1 className='py-5 '>React
                        <p className='p--bar animate-bar2 my-auto text-right font-bold '> 55%
                          <p className='p--bar--span w-[55%] animate-bar origin-left'></p>
                        </p>   
                        </h1>

                    </div>
                    <div className='shadow-md shadow-[#a7a7a7] hover:scale-110 duration-100'>
                        <img className='w-[100px] pt-5 mx-auto' src={tailwind} alt='HTML icon'></img>
                        <h1 className='py-5 '>Tailwind
                        <p className='p--bar animate-bar2 my-auto text-right font-bold '> 65%
                          <p className='p--bar--span w-[65%] animate-bar origin-left'></p>
                        </p>   
                        </h1>
                    </div>
                    <div className='shadow-md shadow-[#a7a7a7] hover:scale-110 duration-100'>
                        <img className='w-[100px] pt-5 mx-auto' src={flutter} alt='HTML icon'></img>
                        <h1 className='py-5 '>Flutter
                        <p className='p--bar animate-bar2 my-auto text-right font-bold '> 40%
                          <p className='p--bar--span w-[40%] animate-bar origin-left'></p>
                        </p>   
                        </h1>
                    </div>
                </div>
                


            </div>
        </div>

    )
}

export default Skill
