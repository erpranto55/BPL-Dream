import React from 'react';
import shadow from '../../../assets/bg-shadow.png';
import logo from '../../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='min-h-100 bg-black max-w-[80%] mx-auto rounded-3xl relative flex items-center justify-center text-center'>
            <div>
                <img src={shadow} alt="" className='absolute inset-0 w-full h-full object-cover rounded-3xl' />
            </div>
            <div className='relative z-10 text-white space-y-4 p-30'>
                <img src={logo} alt="" className='w-50 mx-auto' />
                <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-2xl text-gray-600 font-bold'>Beyond Boundaries Beyond Limits</h3>
                <button className='btn bg-[#E7FE29]'>Claim Free Credit</button>  
            </div>

        </div>
    );
};

export default Banner;