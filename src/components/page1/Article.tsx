import React from 'react';

function Article() {
    return (
        <div className='flex flex-col justify-between pl-12 pt-52'>
            <div className='flex flex-col '>
                <p className='text-6xl text-slate-800 font-bold'>Make</p>
                <p className='text-6xl text-slate-800 font-bold'>milestones</p>
                <p className='text-6xl text-slate-800 font-bold'>memorable</p>
            </div>
            <div className='flex flex-col pt-14'>
                <p className='text-lg text-slate-600 font-normal'>Celebrate with handmade</p>
                <p className='text-lg text-slate-600 font-normal'>Custom jewelry</p>
            </div>
        </div>
    );
}

export default Article;