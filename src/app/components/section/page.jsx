import Image from 'next/image'
import React from 'react'
import './section.css'
import man from '../../assets/images/man.svg';
import dots from '../../assets/images/dots.svg';
import Vector from '../../assets/images/Vector.svg';

function SectionPage() {
    return (
        <div className='back-color'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4 pt-4'>
                        <Image src={man} />
                        <p className='text-white fw-bold pt-3'>Peter Moor</p>
                        <p className='text'>Student of Web Design</p>
                        <Image src={dots} />
                    </div>

                    <div className='col-md-8 pt-5'>
                        <Image src={Vector} /> 
                        <p className='para'>Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned." </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionPage