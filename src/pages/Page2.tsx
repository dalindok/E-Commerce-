import React from 'react';
import Word from '../components/page2/Word';
import Pictures from '../components/page2/Pictures';
function Page2() {
    return (
        <div className='flex flex-row justify-between h-screen bg-amber-50'>
            <Word />
            <Pictures />
        </div>
    );
}

export default Page2;