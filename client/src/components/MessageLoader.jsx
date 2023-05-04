import React from 'react';
import '../styles/Loader.css';
import { Vortex } from 'react-loader-spinner';

/* Message Loader Component */
const MessageLoader = () => {
    return (
        <div className='container'>
            <Vortex
                visible={true}
                height="150"
                width="150"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    );
}

export default MessageLoader;