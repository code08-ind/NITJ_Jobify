import '../styles/AddTestimonial.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTestimonial } from '../service/api';

/* Default Value for form data */
const defaultValue = {
    name: '',
    company: '',
    desc: '',
    imgLink: ''
};

/* Add Testimonial Page */
const AddTestimonial = () => {
    document.title = 'Add Testimonial | NITJ\'s Jobify';
    const [testimonial, setTestimonial] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Add Testimonial Details');
    const navigate = useNavigate();

    /* On value change of the form data input */
    const onValueChange = (e) => {
        setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
    }

    /* Add testimonial functions */
    const addTestimonialDetails = async (e) => {
        e.preventDefault();
        await addTestimonial(testimonial);
        setBtnText('Added Testimonial!');
        navigate("/testimonialRequests");
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head text-center mt-4'>Add Testimonial Details</motion.h1>
            <div className='container'>
                <form onSubmit={(e) => addTestimonialDetails(e)} method="post">
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='name' placeholder='Enter Name For Testimonial' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='imgLink' placeholder='Enter Image Link For Testimonial' onChange={(e) => onValueChange(e)} />
                    <select style={{ color: "black" }} value={testimonial.company} required name="company" onChange={(e) => onValueChange(e)} className='dateInp'>
                    <option value="Select Company">Select Company</option>
                            <option value="Select Company">Select Company</option>
                            <option value="Microsoft">Microsoft</option>
                            <option value="Google">Google</option>
                            <option value="Jio">Jio</option>
                            <option value="Optum">Optum</option>
                            <option value="Delhivery">Delhivery</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Oracle">Oracle</option>
                            <option value="American Express">American Express</option>
                            <option value="Hexaware">Hexaware</option>
                            <option value="Havells">Havells</option>
                            <option value="Nineleaps">Nineleaps</option>
                            <option value="Flipkart">Flipkart</option>
                            <option value="PWC">PWC</option>
                            <option value="Maruti Suzuki">Maruti Suzuki</option>
                            <option value="BHEL">BHEL</option>
                            <option value="Genpact">Genpact</option>
                            <option value="BPCL">BPCL</option>
                            <option value="O9 Solutions">O9 Solutions</option>
                            <option value="Nvidia">Nvidia</option>
                            <option value="Synopsis">Synopsis</option>
                            <option value="Natwest">Natwest</option>
                            <option value="CDOT">CDOT</option>
                            <option value="HPCL">HPCL</option>
                            <option value="Accolite India Pvt. Ltd.">Accolite India Pvt. Ltd.</option>
                            <option value="Adobe">Adobe</option>
                            <option value="Affine Analytics">Affine Analytics</option>
                            <option value="Amazon.in">Amazon.in</option>
                            <option value="Anglo Eastern">Anglo Eastern</option>
                            <option value="Asahi Glass Limited">Asahi Glass Limited</option>
                            <option value="Ashok Leyland">Ashok Leyland</option>
                            <option value="Axtria">Axtria</option>
                            <option value="Bharat Oman Refinery Limited">Bharat Oman Refinery Limited</option>
                            <option value="Bharat Petroleum Corporation Limited">Bharat Petroleum Corporation Limited</option>
                            <option value="Bridge i2i">Bridge i2i</option>
                            <option value="BYJU'S">BYJU'S</option>
                            <option value="Capgemini">Capgemini</option>
                            <option value="Career Point">Career Point</option>
                            <option value="Cause code">Cause code</option>
                            <option value="Cevent Miles software">Cevent Miles software</option>
                            <option value="Cognizant Technology">Cognizant Technology</option>
                            <option value="Cummins">Cummins</option>
                            <option value="Deepak Nitrite">Deepak Nitrite</option>
                            <option value="Deloitte">Deloitte</option>
                            <option value="Directi">Directi</option>
                            <option value="Eclerx">Eclerx</option>
                            <option value="Edwisor">Edwisor</option>
                            <option value="Edynamic">Edynamic</option>
                            <option value="EXL Analytics">EXL Analytics</option>
                            <option value="Freewill Sports Pvt. Limited (Nivia)">Freewill Sports Pvt. Limited (Nivia)</option>
                            <option value="Gaia Smart Cities">Gaia Smart Cities</option>
                            <option value="Gail India Limited">Gail India Limited</option>
                            <option value="GSK">GSK</option>
                            <option value="General Electric">General Electric</option>
                            <option value="Hero Motocorp.">Hero Motocorp.</option>
                            <option value="HP">HP</option>
                            <option value="High Performance Textile Technology">High Performance Textile Technology</option>
                            <option value="HMEL">HMEL</option>
                            <option value="Honda">Honda</option>
                            <option value="HSBC">HSBC</option>
                            <option value="Indian Navy">Indian Navy</option>
                            <option value="IBM">IBM</option>
                            <option value="Infoobjects">Infoobjects</option>
                            <option value="Infosys">Infosys</option>
                            <option value="Interra systems">Interra systems</option>
                            <option value="iNurture Education Solutions Pvt. Ltd.">iNurture Education Solutions Pvt. Ltd.</option>
                            <option value="IOLCP">IOLCP</option>
                            <option value="Ion Trading group">Ion Trading group</option>
                            <option value="Jaro Education">Jaro Education</option>
                            <option value="Jayesh Enterprise">Jayesh Enterprise</option>
                            <option value="KEC International">KEC International</option>
                            <option value="KISKO">KISKO</option>
                            <option value="KPIT">KPIT</option>
                            <option value="L&T">L&T</option>
                            <option value="L&T Construction">L&T Construction</option>
                            <option value="L&T Infotech">L&T Infotech</option>
                            <option value="Lakshya Institute">Lakshya Institute</option>
                            <option value="LMW">LMW</option>
                            <option value="Mahindra">Mahindra</option>
                            <option value="Maruti Suzuki">Maruti Suzuki</option>
                            <option value="Marwadi University">Marwadi University</option>
                            <option value="Mindinfotech">Mindinfotech</option>
                            <option value="Mu-Sigma">Mu-Sigma</option>
                            <option value="Nagarro">Nagarro</option>
                            <option value="Nahar Textile">Nahar Textile</option>
                            <option value="Nestle">Nestle</option>
                            <option value="Newgen">Newgen</option>
                            <option value="Nuvoco Vistas Corp. Ltd. (Lafarg)">Nuvoco Vistas Corp. Ltd. (Lafarg)</option>
                            <option value="Oceaneering">Oceaneering</option>
                            <option value="OFSS">OFSS</option>
                            <option value="Ola Cab">Ola Cab</option>
                            <option value="Oracle">Oracle</option>
                            <option value="Paytm">Paytm</option>
                            <option value="People Strong">People Strong</option>
                            <option value="Penny base Technology Solutions Pvt.Ltd.">Penny base Technology Solutions Pvt.Ltd.</option>
                            <option value="Persistent Systems">Persistent Systems</option>
                            <option value="Playbuff">Playbuff</option>
                            <option value="Potencia Academy">Potencia Academy</option>
                            <option value="Pradan">Pradan</option>
                            <option value="Rao IIT">Rao IIT</option>
                            <option value="Reliance Industires">Reliance Industires</option>
                            <option value="Reliance Jio Infocom">Reliance Jio Infocom</option>
                            <option value="Reliance Manufacturing">Reliance Manufacturing</option>
                            <option value="Reliance petrochemical">Reliance petrochemical</option>
                            <option value="Resonance Eduventures Limited">Resonance Eduventures Limited</option>
                            <option value="Robert Bosch">Robert Bosch</option>
                            <option value="Roots Anaylsis">Roots Anaylsis</option>
                            <option value="SAGACIOUS RESEARCH">SAGACIOUS RESEARCH</option>
                            <option value="Saint Gobain">Saint Gobain</option>
                            <option value="Samsung R&D Banglore">Samsung R&D Banglore</option>
                            <option value="Samsung R&D Noida">Samsung R&D Noida</option>
                            <option value="Simplex Infra">Simplex Infra</option>
                            <option value="Skilrock">Skilrock</option>
                            <option value="Smart Prix">Smart Prix</option>
                            <option value="Spectrum Eduventures">Spectrum Eduventures</option>
                            <option value="Spinks World">Spinks World</option>
                            <option value="Sportking">Sportking</option>
                            <option value="Square">Square</option>
                            <option value="SRF Limited">SRF Limited</option>
                            <option value="Subros Limited">Subros Limited</option>
                            <option value="Sun Pharma">Sun Pharma</option>
                            <option value="Technip">Technip</option>
                            <option value="Tata Hitachi">Tata Hitachi</option>
                            <option value="Tata Motors">Tata Motors</option>
                            <option value="TMU">TMU</option>
                            <option value="Trident Group">Trident Group</option>
                            <option value="Uber">Uber</option>
                            <option value="Va Tech Wabag">Va Tech Wabag</option>
                            <option value="Vardhman">Vardhman</option>
                            <option value="Vedanta">Vedanta</option>
                            <option value="Vedanta Hindustan Zinc Limited">Vedanta Hindustan Zinc Limited</option>
                            <option value="Virtusa">Virtusa</option>
                            <option value="Vodafone">Vodafone</option>
                            <option value="Whirlpool">Whirlpool</option>
                            <option value="Wipro limited">Wipro limited</option>
                            <option value="Xenon Stack">Xenon Stack</option>
                            <option value="Yodlee">Yodlee</option>
                            <option value="ZS Associates">ZS Associates</option>
                    </select>
                    <textarea autoComplete="off" name='desc' className='desc' onChange={(e) => onValueChange(e)} id="msg" rows={5} placeholder='Enter Your Testimonial Description' required />
                    <button className='add' type='submit'>{btnText}</button>
                </form>
            </div>
        </>
    );
}

export default AddTestimonial;