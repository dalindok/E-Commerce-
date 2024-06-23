import React from 'react';
import Firstpic from '../../assets/pic_page2/Firstpic.png'
import Secondpic from '../../assets/pic_page2/Secondpic.png'
function Pictures() {
    return (
        <div className='flex flex-col pt-32 pr-40'>
                <img src={Secondpic} alt='secondpic' className=' w-96' />
                <img src={Firstpic} alt='firstpic'  className='w-96' />
        </div>
    );
}

export default Pictures;