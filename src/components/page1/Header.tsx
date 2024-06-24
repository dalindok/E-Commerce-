import React from 'react';

function Header() {
    return (
        <div className='flex flex-row justify-between pt-10'>
            <div className='flex flex-col pl-20 uppercase'>
                <p className='text-lg text-slate-600 uppercase'>studio</p>
                <p className='text-lg text-slate-600 uppercase'>moone</p>
            </div>
            <div className='flex flex-row pr-20'>
                <button className='border-solid border-2 py-2 px-10 border-slate-500 hover:bg-black hover:text-white text-md text-slate-600'>Customize a design</button>
            </div>
        </div>
    );
}

export default Header;