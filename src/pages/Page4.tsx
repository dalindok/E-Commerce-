import React from 'react';
import Textpag4 from '../components/page4/Textpag4';
import Pic1 from '../assets/pic_page4/Pic1.png'
function Page4() {
    return (
        <div className='flex flex-row justify-between h-screen bg-amber-50'>
            <img src={Pic1} alt='Picpag4' className='h-screen' />
            <Textpag4 />
        </div>
    );
}

export default Page4;