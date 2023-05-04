import React from 'react';
import '../styles/Loader.css';
import { Dna } from 'react-loader-spinner';

/* Loader Component */
const Loader = () => {
    return (
        <div className='container'>
            <Dna
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
}

export default Loader;