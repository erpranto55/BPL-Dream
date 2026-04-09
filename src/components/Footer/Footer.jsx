import React from 'react';
import FooterBanner from './FooterBanner/FooterBanner'
import FooterLogo from '../../assets/logo-footer.png'


const Footer = () => {
    return (
        <div className='bg-black pt-40 relative mt-70'>
            <div className='absolute -top-50 left-1/2 transform -translate-x-1/2 w-full max-w-5xl'>
                <FooterBanner />
            </div>

            <div className='text-white text-center mx-auto pt-32 py-10 px-50'>
                <img src={FooterLogo} className='mx-auto mb-10'></img>
                <div className='grid md:grid-cols-3 gap-10 text-left'>
                    <div classname=''>
                        <h3 className='font-semibold mb-2'>About Us</h3>
                        <p className='text-gray-400'>We are a passionate team <br />dedicated to providing the best<br /> services to our customers.</p>
                    </div>
                    <div>
                        <h3 className='font-semibold mb-2'>Quick Links</h3>
                        <ul className='text-gray-400 space-y-2'>
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About</a></li>
                            <li><a>Contract</a></li>
                        </ul>
                    </div>

                    <div >
                        <h3 className='font-semibold mb-2'>Subscribe</h3>
                        <p className='text-gray-400 mb-3'>Subscribe to our newsletter for the<br />latest updates.</p>
                        <div className='flex mx-auto'>
                            <input type="email" name="" id=""
                                placeholder='Enter Your Email'
                                className='px-3 py-2 w-full rounded-l-lg border border-gray-500 bg-transparent' />
                            <button className='px-4 bg-linear-to-r from-blue-500 to-orange-500 rounded-r-lg'>
                                Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='text-gray-500 text-sm mt-10'>
                    ©2024 Your Company All Rights Reserved.
                </p>
            </div>
        </div>

    );
};

export default Footer;