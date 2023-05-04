import '../styles/EditTestimonial.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editTestimonial, getTestimonial } from '../service/api';

/* Default Value for form data */
const defaultValue = {
    name: '',
    company: '',
    desc: '',
    imgLink: ''
};

/* Edit Testimonial Page */
const EditTestimonial = () => {
    document.title = 'Edit Testimonial | NITJ\'s Jobify';
    const [testimonial, setTestimonial] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Edit Testimonial Details');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadTestimonialDetails();
    }, []);

    /* Load testimonial details for get request */
    const loadTestimonialDetails = async () => {
        const response = await getTestimonial(id);
        setTestimonial(response.data[0]);
    }

    /* On value change of the form data input */
    const onValueChange = (e) => {
        setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
    }

    /* Edit Testimonial details function */
    const editTestimonialDetails = async (e) => {
        e.preventDefault();
        await editTestimonial(testimonial, id);
        setBtnText('Edited Testimonial Details!');
        navigate("/testimonial/testimonials");
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head text-center mt-4'>Edit Testimonial Details</motion.h1>
            <div className='container'>
                <form onSubmit={(e) => editTestimonialDetails(e)} method="post">
                    <input value={testimonial.name} autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='name' placeholder='Enter Name For Testimonial' onChange={(e) => onValueChange(e)} />
                    <input value={testimonial.imgLink} autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='imgLink' placeholder='Enter Image Link For Testimonial' onChange={(e) => onValueChange(e)} />
                    <select style={{ color: "black" }} value={testimonial.company} required name="company" onChange={(e) => onValueChange(e)} className='dateInp'>
                        <option value="Select Company">Select Company</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Google">Google</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Oracle">Oracle</option>
                        <option value="American Express">American Express</option>
                        <option value="Deloitte">Deloitte</option>
                        <option value="Hexaware">Hexaware</option>
                        <option value="Havells">Havells</option>
                        <option value="Nineleaps">Nineleaps</option>
                        <option value="Flipkart">Flipkart</option>
                        <option value="PWC">PWC</option>
                        <option value="Honda">Honda</option>
                        <option value="Maruti Suzuki">Maruti Suzuki</option>
                        <option value="BPCL">BPCL</option>
                        <option value="O9 Solutions">O9 Solutions</option>
                        <option value="Nvidia">Nvidia</option>
                        <option value="Synopsis">Synopsis</option>
                        <option value="Natwest">Natwest</option>
                        <option value="CDOT">CDOT</option>
                        <option value="HPCL">HPCL</option>
                        <option value="Byju's">Byju's</option>
                    </select>
                    <textarea value={testimonial.desc} autoComplete="off" className='desc' name='desc' onChange={(e) => onValueChange(e)} id="msg" cols="40" rows={5} placeholder='Enter Your Testimonial Description' required />
                    <button className='add' type='submit'>{btnText}</button>
                </form>
            </div>
        </>
    );
}

export default EditTestimonial;