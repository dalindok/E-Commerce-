import React from 'react';
import Header from '../components/page1/Header'
import Picture from '../components/page1/Picture';
import Article from '../components/page1/Article';
function Page1() {
    return (
        <div className='h-full bg-amber-50 '>
            <Header />
            <div className='flex justify-between h-2/4'>
                <div className='mt-10'>
                    <Article /></div>
                <Picture />
            </div>
        </div>
    );
}

export default Page1;