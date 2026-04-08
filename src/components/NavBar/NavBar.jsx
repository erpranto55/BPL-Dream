import React, { useState } from 'react';
import dollarImage from "../../assets/Currency.png"
import logo from '../../assets/logo.png'
import { Menu, Pointer } from 'lucide-react';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar bg-base-100 container mx-auto ">
            <div className='md:hidden relative'>
                <button onClick={() => setOpen(!open)}>
                    <Menu />
                </button>

                {
                    open && (
                        <ul className='absolute top-10 left-0 bg-white shadow-md p-4 flex flex-col gap-4 text-gray-500 w-40 z-50'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a href="">Teams</a></li>
                            <li><a href="">Schedules</a></li>
                        </ul>
                    )
                }
            </div>
            <div className="flex-1">
                <img src={logo} alt="" className='max-h-20 pl-5'/>
            </div>

            <div className='flex gap-10'>
                <ul className='text-gray-500 hidden md:flex md:gap-10' >
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>
                <button className="flex-no flex justify-between items-center gap-2 font-bold text-xl">
                    0 Coins
                    <img src={dollarImage} alt="" />
                </button>
            </div>
        </div >
    );
};

export default NavBar;