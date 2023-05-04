import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available config props
const config = {
    width: "400px",
    height: "500px",
    floating: true,
};

// all available theme props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Montserrat',
    headerBgColor: '#EE0A61',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#EE0A61',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

/* Chatbot is the component to support the External users and College students about the portal */
const Chatbot = () => {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                    {
                        id: 'intro',
                        message: 'Hello!! What Page You Want To Visit And Know About? Just Click The Option!!',
                        trigger: 'intro-user',
                    },
                    {
                        id: 'intro-user',
                        options: [
                            { value: 'h', label: 'Home', trigger: 'home-response' },
                            { value: 'a', label: 'About', trigger: 'about-response' },
                            { value: 'd', label: 'Dashboard', trigger: 'dashboard-response' },
                            { value: 'c', label: 'Contact', trigger: 'contact-response' },
                            { value: 'i', label: 'Testimonials', trigger: 'testimonials-response' },
                            { value: 't', label: 'Tests', trigger: 'tests-response' },
                            { value: 'p', label: 'Presentations', trigger: 'presentations-response' },
                            { value: 'm', label: 'More', trigger: 'more-response' },
                            { value: 's', label: 'Main Site', trigger: 'site-response' },
                            { value: 'l', label: 'Login', trigger: 'login-response' },
                        ]
                    },
                    {
                        id: 'home-response',
                        message: 'It is the home page about our Placement Portal!',
                        trigger: 'h-res'
                    },
                    {
                        id: 'about-response',
                        message: 'It is the about page about our Placement Portal! It Displays data and our excellent placement record!',
                        trigger: 'a-res'
                    },
                    {
                        id: 'dashboard-response',
                        message: 'It displays the companies that are visiting our college and the students who are eligible for the same!',
                        trigger: 'd-res'
                    },
                    {
                        id: 'contact-response',
                        message: 'It is the contact page and you can send any of your queries to us!',
                        trigger: 'c-res'
                    },
                    {
                        id: 'more-response',
                        message: 'It is the page that shows our Project Contributors and what technologies are used in building the portal!',
                        trigger: 'm-res'
                    },
                    {
                        id: 'testimonials-response',
                        message: 'It is the page that shows our Testimonials Submitted By Students!',
                        trigger: 'i-res'
                    },
                    {
                        id: 'tests-response',
                        message: 'It is the page that shows Tests of companies that are added along with test links and other details!',
                        trigger: 't-res'
                    },
                    {
                        id: 'presentations-response',
                        message: 'It is the page that shows Presentations that are added along with PPT links and other details!',
                        trigger: 'p-res'
                    },
                    {
                        id: 'site-response',
                        message: 'It is the link for Main Website!',
                        trigger: 's-res'
                    },
                    {
                        id: 'login-response',
                        message: 'It is the page for Login for TPO, PR\'s and IR\'s!',
                        trigger: 'l-res'
                    },
                    {
                        id: 'h-res',
                        message: 'Want To Know More Information?',
                        trigger: 'h-ans'
                    },
                    {
                        id: 'a-res',
                        message: 'Want To Know More Information?',
                        trigger: 'a-ans'
                    },
                    {
                        id: 'd-res',
                        message: 'Want To Know More Information?',
                        trigger: 'd-ans'
                    },
                    {
                        id: 'c-res',
                        message: 'Want To Know More Information?',
                        trigger: 'c-ans'
                    },
                    {
                        id: 'm-res',
                        message: 'Want To Know More Information?',
                        trigger: 'm-ans'
                    },
                    {
                        id: 'i-res',
                        message: 'Want To Know More Information?',
                        trigger: 'i-ans'
                    },
                    {
                        id: 't-res',
                        message: 'Want To Know More Information?',
                        trigger: 't-ans'
                    },
                    {
                        id: 'p-res',
                        message: 'Want To Know More Information?',
                        trigger: 'p-ans'
                    },
                    {
                        id: 's-res',
                        message: 'Want To Know More Information?',
                        trigger: 's-ans'
                    },
                    {
                        id: 'l-res',
                        message: 'Want To Know More Information?',
                        trigger: 'l-ans'
                    },
                    {
                        id: 'h-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'hy-res' },
                            { value: 'n', label: 'No', trigger: 'hn-res' },
                        ]
                    },
                    {
                        id: 'a-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'ay-res' },
                            { value: 'n', label: 'No', trigger: 'an-res' },
                        ]
                    },
                    {
                        id: 'd-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'dy-res' },
                            { value: 'n', label: 'No', trigger: 'dn-res' },
                        ]
                    },
                    {
                        id: 'c-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'cy-res' },
                            { value: 'n', label: 'No', trigger: 'cn-res' },
                        ]
                    },
                    {
                        id: 'm-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'my-res' },
                            { value: 'n', label: 'No', trigger: 'mn-res' },
                        ]
                    },
                    {
                        id: 'i-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'iy-res' },
                            { value: 'n', label: 'No', trigger: 'in-res' },
                        ]
                    },
                    {
                        id: 't-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'ty-res' },
                            { value: 'n', label: 'No', trigger: 'tn-res' },
                        ]
                    },
                    {
                        id: 'p-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'py-res' },
                            { value: 'n', label: 'No', trigger: 'pn-res' },
                        ]
                    },
                    {
                        id: 's-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'sy-res' },
                            { value: 'n', label: 'No', trigger: 'sn-res' },
                        ]
                    },
                    {
                        id: 'l-ans',
                        options: [
                            { value: 'y', label: 'Yes', trigger: 'ly-res' },
                            { value: 'n', label: 'No', trigger: 'ln-res' },
                        ]
                    },
                    {
                        id: 'hy-res',
                        message: 'Visit The Home Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'ay-res',
                        message: 'Visit The About Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'dy-res',
                        message: 'Visit The Dashboard Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'cy-res',
                        message: 'Visit The Contact Us Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'my-res',
                        message: 'Visit The More Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'iy-res',
                        message: 'Visit The Testimonials Page For More Information With Link On About Page!',
                        end: true,
                    },
                    {
                        id: 'ty-res',
                        message: 'Visit The Tests Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'py-res',
                        message: 'Visit The Presentations Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'sy-res',
                        message: 'Visit The Main Site Link For More Information!',
                        end: true,
                    },
                    {
                        id: 'ly-res',
                        message: 'Visit The Login Page For More Information!',
                        end: true,
                    },
                    {
                        id: 'hn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'an-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'dn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'cn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'mn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'in-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'tn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'pn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'sn-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                    {
                        id: 'ln-res',
                        message: 'Great. Thanks For Using Me!',
                        end: true,
                    },
                ]}
                {...config}
            />
        </ThemeProvider>
    );
}

export default Chatbot;