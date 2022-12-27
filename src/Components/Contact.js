import React from 'react'
import email from '../Assets/sendemail.png';

function Contact() {
  return (
    <div name='contact' className='w-full h-full bg-[#999999] '>
      
      <div className='flex max-w-[1000px] min-h-full max-h-full mx-auto justify-center px-5  '>
        <div className='flex flex-col max-w-[1000px] w-full'>
        <p className='text-7xl mt-[150px] font-bold text-[#494949] tracking-widest h-[150px] my-auto   '>Contact. 
        <img src={email} alt='mail pic' className='hidden lg:inline w-[200px] h-[200px] mx-[100px]
       rounded-[100%] border-black border-[5px] ' ></img>
        </p>
        <p className='text-3xl mt-[50px] font-bold text-[#494949]'>Send me a message</p>
        <div className='pb-10'>
            </div>
        <form method='POST' action='https://getform.io/f/a244a656-4487-4c78-92c8-d2f028c54f7c' className='lg: flex flex-col max-w-[800px] w-full mb-[75px] px-8 '>

            <input type="text" placeholder='Name' name='Name' required className='bg-slate-200 py-4 my-6 p-3'/>    
            <input type="text" placeholder='Email' name='Email' required pattern='@.com' className='bg-slate-200 py-4 my-2 p-3'/>  
            <textarea placeholder='Messages' rows={10} name='message ' required className='bg-slate-200 py-2 my-6  p-3'></textarea> 
            <button className='px-4 py-3 mx-auto rounded bg-white hover:bg-black hover:text-white '>Send</button>
        </form>

            
        </div>        
      </div>

    </div>
  )
}
export default Contact
