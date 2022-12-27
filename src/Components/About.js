import React from 'react'

const About = () => {
    return (
        <div name='about' className=' w-full h-full bg-[#EBECEB] bg-cover text-[grey]' >

            <div className='flex flex-col w-full min-h-full max-h-full items-center  '>
                <section className='max-w-[1000px] '>
                    <div className='sticky top-0 px-20 py-3 z-10 mt-[150px]  '>
                    </div>
                    <h2 className='text-7xl h-screen text-[grey] px-3 inline font-bold tracking-widest shadow-xl shadow-[#ffffff0a]  '>
                        About me. 
                    </h2>
                    
                    {/*Education Detail */}

                    <div className=' pl-10 border-l-4 border-[#5e5e5e] ml-3 py-10 mt-[50px] mb-[100px] '>
                        <h1 className='text-5xl pb-7 italic underline '> Education </h1>
                        <h2 className='h2--dot relative left-[-53px] top-[50px]'> 
                        <h2 className='h2--dot left-[-4px] top-[-3px] relative animate-ping'> </h2>
                        </h2>
                        <h2 className='text-3xl py-5  '>King mongkut's university of technology north bangkok </h2>
                        <h3 className='text-2xl  '>Major in Electrical and Power Electronics Engineering Technology </h3>
                        <p className='text-2xl pt-7'>2019-2022 <br/> GPA: 3.75 (First Class Hornors) <br/> Earned a scholarship of academic excellence </p>
                     {/*Education Detail */}
                        <h2 className='h2--dot relative left-[-53px] top-[70px]'> 
                        <h2 className='h2--dot left-[-4px] top-[-3px] relative animate-ping'> </h2>
                        </h2>
                        <h2 className='text-3xl pt-10 py-5 '>Matthayom Watnairong</h2>
                        <h3 className='text-2xl  '>Major in Math-Science | GPA: 3.23  </h3>
                        <p className='text-2xl pt-7'>2012-2018 </p>
                    </div>

                    {/*Experience Detail */}

                    <div className=' pl-10 border-l-4 border-[#5e5e5e] ml-3 mt-2 py-10 mb-[100px] '>
                        <h1 className='text-5xl pb-7 italic underline '> Experience </h1>
                        <h2 className='h2--dot relative left-[-53px] top-[50px]'> 
                        <h2 className='h2--dot left-[-4px] top-[-3px] relative animate-ping'> </h2>
                        </h2>
                        <h2 className='text-3xl py-5'> Stark Energy | Position : Design Engineer </h2>                            
                        

                        <h3 className='text-2xl pb-4'> June-September 2022 </h3>
                        <li className='li--text'>Design Solar Rooftop Layout and Single line Diagram Electrical System</li>
                        <li>Calculate sizing cable & Modeling equipment with Autocad</li>
                        <li>BOQ & Contact supplier </li>                            

                    {/*Experience Detail */}
                        <h2 className='h2--dot relative left-[-53px] top-[70px]'> 
                        <h2 className='h2--dot left-[-4px] top-[-3px] relative animate-ping'> </h2>
                        </h2>
                        <h2 className='text-3xl pt-10 py-5'>Metropolitan Electricity Authority (MEA) | Position : Intern Student </h2>
                        <h3 className='text-2xl pb-4'> January-April 2022 </h3>
                        <h4 className='text-1xl'>
                        <li>Creating a flutter application to connect to MQTT servers also publisher and subscriber to the topic </li>
                        <li className='max-w-[900px]'>Creating a flutter application to open website, counting number with collect in Database and Pop-up app notification </li>
                        <li>Creating Flutter application To do list with Database  </li>
                        <li>Creating a chat board website with React.Js </li>
                        <li>Coding Python on Raspberry pi to receive temperature and humidity by using sensor</li>                            
                        </h4>
                    </div>
                </section >
            </div>
        </div>
    )
}
export default About
