import React from 'react';

const FooterBanner = () => {
    return (
        <div className='max-w-5xl mx-auto p-6 rounded-3xl min-h-96'>
            <div className='bg-linear-to-tr from-blue-200 to-orange-200 rounded-3xl text-center min-h-90 space-y-5 shadow-lg'>
                <h2 className='font-bold text-3xl pt-25'>
                    Subscribe to our Newsletter
                </h2>
                <h3 className='text-xl text-gray-600'>
                    Get the latest updates and news right in your inbox!
                </h3>
                <div className='flex gap-5 justify-center'>
                    <input type="email" name="" id=""
                        placeholder='  Enter Your Email'
                        className='border-2 border-gray-400 rounded-xl w-100' />
                    <button className='btn bg-linear-to-tr from-blue-500 to-orange-500 rounded-xl'>
                        Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default FooterBanner;