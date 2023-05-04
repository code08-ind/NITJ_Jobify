import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/List.css';
import React, { useEffect } from 'react';

/* List Of Companies Component */
const ListOfCompanies = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <div className='container' style={{ marginTop: '300px' }}>
            <h3 className='text-center' style={{ marginTop: '100px' }} data-aos="zoom-in">
                List Of Few Prominent Visiting Companies
            </h3>
            <div className="comps my-4 mt-3" data-aos="fade-down">
                <div className="row">
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Microsoft</li>
                            <li>Amazon</li>
                            <li>Increff</li>
                            <li>Oracle</li>
                            <li>Samsung</li>
                            <li>C-DOT</li>
                            <li>Intuit</li>
                            <li>Trilogy</li>
                            <li>Vardman</li>
                            <li>Honda</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Flipkart</li>
                            <li>Google</li>
                            <li>Byju's</li>
                            <li>AmEx</li>
                            <li>Tesco</li>
                            <li>Hexaware</li>
                            <li>Oracle</li>
                            <li>OLX</li>
                            <li>Incedo</li>
                            <li>MAQ</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Synopsys</li>
                            <li>Infineon</li>
                            <li>Cvent</li>
                            <li>Signify</li>
                            <li>Philips</li>
                            <li>Nineleaps</li>
                            <li>Daimler</li>
                            <li>Delhivery</li>
                            <li>EY</li>
                            <li>L&T</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Havells</li>
                            <li>Paytm</li>
                            <li>Natwest</li>
                            <li>Hero</li>
                            <li>Maruti</li>
                            <li>Accenture</li>
                            <li>Reliance</li>
                            <li>Jio</li>
                            <li>Cadence</li>
                            <li>Deloitte</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListOfCompanies;