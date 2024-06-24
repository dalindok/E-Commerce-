import React from 'react';

function Word() {
    return (
        <div>
            <div className='flex flex-col pt-48 pl-40'>
                <p className='text-6xl text-slate-800 font-medium'>Our Story</p>
            </div>
            <div className='flex flex-col pt-12 pl-40'>
                <p className='text-xl text-slate-700'>Hello from Studio Moone! We are a small group of passionate</p>
                <p className='text-xl text-slate-700'>jewelry makers who like making delicate and personalized </p>
                <p className='text-xl text-slate-700'>jewelry for meaningful moments such as weddings,</p>
                <p className='text-xl text-slate-700'>engagements, and other milestones.</p>
            </div>
            <div className='flex flex-col pt-12 pl-40'>
                <p className='text-xl text-slate-700'>Our pieces are thoughtfully designed and one of a kind. You can</p>
                <p className='text-xl text-slate-700'>assured that no two pieces are ever alike, making it even more</p>
                <p className='text-xl text-slate-700'>special as it is passed on from generation to generation.</p>
            </div>
        </div>
    );
}

export default Word;