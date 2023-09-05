import Image from 'next/image'
import React from 'react'
import './sectionTwo.css'
import image from '../../assets/images/image.svg';

function Section2Page() {
    return (
        <div className='container py-5'>
            <div className='row py-5'>
                <div className='col-md-7 mt-5 pb-3'>
                    <h1 className='text-heading'>Take the next step toward your personal and professional goals with Lesson.</h1>
                    <p className='paragrph'>Take the next step toward. Join now to receive personalized  and more recommendations from the full Coursera catalog.</p>
                    <button className='text-white button mt-2'>Join Now</button>
                </div>

                <div className='col-md-5'>
                    <Image src={image} className='img-fluid' />

                </div>
            </div>
        </div>
    )
}

export default Section2Page