import React from 'react';
import Textpag3 from '../components/page3/Textpag3';
import Pic from '../assets/pic_page3/Pic.png'
function Page3() {
    return (
        <div className='flex flex-row  justify-between h-screen bg-amber-50'>
            <img src={Pic} alt='picpag3' className='h-screen' />
            <Textpag3 />
        </div>
    );
}

export default Page3;