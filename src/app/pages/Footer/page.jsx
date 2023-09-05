import React from 'react'
import './footer.css'
import Image from 'next/image'
import Social from '../../assets/images/Social.svg';

function FooterPage() {
  return (
    <div className='bg-clor'>
        <div className='container py-5 pb-5 '>
            <div className='row border-bottom border-secondary'>
                <div className='col-md-4 pb-4'>
                    <h2 className='text-white pb-3'>Lesson<span className='logo'>.</span></h2>
                    <p className='pragra'>Need to help for your dream Career?<br /> trust us. With Lesson, study becomes<br /> a lot easier with us.</p>
                    <Image src={Social} />
                </div>
                <div className='col-md-2 '>
                    <h4 className='text-white border-bottom border-secondary pb-3'>Company</h4>
                    <ul className='list'>
                        <li className='mb-2 pt-2'>About Us</li>
                        <li className='mb-2'>Features</li>
                        <li className='mb-2'>Our Pricing</li>
                        <li className='mb-2'>Latest News</li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <h4 className='text-white border-bottom border-secondary pb-3'>Support</h4>
                    <ul className='list'>
                        <li className='mb-2 pt-2'>FAQ’s</li>
                        <li className='mb-2'>Terms & Conditions</li>
                        <li className='mb-2'>Privacy Policy</li>
                        <li className='mb-2'>Contact Us</li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h4 className='text-white border-bottom border-secondary pb-3'>Address</h4>
                    <ul className='list'>
                        <li className='mb-2 pt-2'><span className='text-white'>Location:</span> 27 Division St, New York,<br /> NY 10002, USA</li>
                        <li className='mb-2'><span className='text-white'>Email:</span> email@gmail.com</li>
                        <li className='mb-2'><span className='text-white'>Phone:</span> + 000 1234 567 890</li>
                    </ul>
                </div>
            
            </div>
            <div className='pt-5 text-center'>
            <span className='color'> Copyright &copy;2022 webdesign.gdn All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export default FooterPage