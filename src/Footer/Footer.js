// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='fitness'>
            <div >
                   <h3> Advice</h3>
                     <p>FitnessTrainer is the most convenient way to connect you with a local personal trainer. Whether you're looking to simply get healthier or get into a specific fitness activity, we will match you with a one-on-one trainer who can customize each session to meet your fitness goals.</p>
            </div>
            <div className='sucess'>
                <h3> Sucess</h3>
                <li>Success usually comes to those who are too busy to be looking for it</li>
                <li>All progress takes place outside the comfort zone.</li>
                <li>Whether you think you can, or you think you can’t, you’re right.</li>
                <li>‘The successful warrior is the average man, with laser-like focus.’</li>
            </div>
            <div className='contract'>
                <h3>Contract-me</h3>
                <h4> Phone : ++39849038</h4>
                <h4>Email :adeptshaharia@gmail.com</h4>
                
            </div>
            </div>
            <div>
                <p className='text-center text-white py-3 bg-primary'>@Copy Right By Shaharia 20202</p>
              
           
                
            </div>
        </div>
    );
};

export default Footer;