import React, { useState } from 'react';
import shadow from '../../../assets/bg-shadow.png';
import logo from '../../../assets/banner-main.png'
import { toast } from 'react-toastify';

const Banner = ({ setCoin }) => {

    const [freeCredit, setFreeCredit] = useState(false);

    const claimCredit = () => {
        setCoin(500000);
        setFreeCredit(true);
        { !freeCredit ? toast("Free Credit Claimed") : toast("Free Credit Already Claimed") }
        ;
    }

    return (
        <div className='min-h-100 bg-black container mx-auto rounded-3xl relative flex items-center justify-center text-center'>
            <div>
                <img src={shadow} alt="" className='absolute inset-0 w-full h-full object-cover rounded-3xl' />
            </div>
            <div className='relative z-10 text-white space-y-4 p-30'>
                <img src={logo} alt="" className='w-50 mx-auto' />
                <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-2xl text-gray-600 font-bold'>Beyond Boundaries Beyond Limits</h3>
                <button className="group relative inline-flex items-center justify-center rounded-3xl border-2 border-[#D9F925] bg-[#1A1A1A] p-2 cursor-pointer">
                    <div className="rounded-2xl bg-linear-to-b from-[#E6FF4D] to-[#D9F925] px-8 py-4"
                        onClick={claimCredit}>
                        {!freeCredit
                            ? <span
                                className="text-xl font-bold text-black"
                            >Claim Free Credit</span>
                            : <span
                                className="text-xl font-bold text-black"
                            >Free Credit Claimed</span>}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Banner;