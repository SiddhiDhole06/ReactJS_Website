import React from 'react'
import singleuser from '../assets/singleuser.png'
import partnership from '../assets/partnership.png'
import groupuser from '../assets/groupuser.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={singleuser} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>

                <button className=' bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto
                px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={partnership} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>

                <button className=' bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto
                px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={groupuser} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                </div>

                <button className=' bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto
                px-6 py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
