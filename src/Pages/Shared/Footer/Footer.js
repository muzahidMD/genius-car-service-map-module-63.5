import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 mb-4'>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;