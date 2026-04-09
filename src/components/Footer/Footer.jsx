import React from 'react';
import FooterBanner from './FooterBanner/FooterBanner'


const Footer = () => {
    return (
        <div className='bg-black pt-40 relative mt-70'>
            <div className='absolute -top-50 left-1/2 transform -translate-x-1/2 w-full max-w-5xl'>
                <FooterBanner />
            </div>
            <div className='pt-32 text-white text-center'>
                Footer
            </div>
        </div>

    );
};

export default Footer;