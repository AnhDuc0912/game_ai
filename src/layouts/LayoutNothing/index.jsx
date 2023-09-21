import React from 'react';
import './LayoutNothing.css';

function LayoutNothing({children}) {
    return ( 
        <div className='bg-full-screen'> 
            {children}
        </div>
     );
}

export default LayoutNothing;