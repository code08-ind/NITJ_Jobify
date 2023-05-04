import React from 'react';
import '../styles/Loader.css';
import { Blocks } from 'react-loader-spinner';

/* Map Loader Component */
const MapLoader = () => {
    return (
        <div className='container'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
}

export default MapLoader;