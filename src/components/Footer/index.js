import React from 'react';

function Footer() {
    return (
        <footer className='flex-row space-between'>
            <div>&copy;2022 by Brad Kuhne</div>
            <a href={'https://github.com/bradkuhne'}> GitHub Profile</a>
            <a href={'https://www.linkedin.com/in/bkuhne/'}>LinkedIn Profile</a>
        </footer>
    );
}
export default Footer;