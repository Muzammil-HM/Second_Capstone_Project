import React from 'react'
import './sectionThree.css'
import Image from 'next/image'
import man3 from '../../assets/images/man3.svg';
import man4 from '../../assets/images/man4.svg';
import girl from '../../assets/images/girl.svg';
import dots from '../../assets/images/dots.svg';
import dot from '../../assets/images/dot.svg';

const Section3Page = () => {
    const data = [
        {
            cardImage: man3,
            dotImage: dot,
            text: "21 November 2021",
            heading: "How to become a pro web designer in 2022 and get remot job?",
            button: "Book Now",
            style: "bg-btn ms-3"
        },
        {
            cardImage: man4,
            dotImage: dot,
            text: "21 November 2021",
            heading: "How to become a pro web designer in 2022 and get remot job?",
            button: "Book Now",
            style: "bg-btn1 ms-3"
        },
        {
            cardImage: girl,
            dotImage: dot,
            text: "21 November 2021",
            heading: "How to become a pro web designer in 2022 and get remot job?",
            button: "Book Now",
            style: "bg-btn2 ms-3"
        },

    ]

    return (
        <div className='bgg-color'>
            <div className='text-center'>
                <h1>Our blog</h1>
                <p className='pra'>Read our regular travel blog and know the latest update<br /> of tour and travel</p>
            </div>

            <div className='container'>
                <div className='row pb-5'>
                    {data.map((item) => {
                        return (
                            <div className='col-md-4 overflow-x-hidden'>
                                <div className="bg-card-color">
                                    <Image src={item.cardImage} className='mb-3' />
                                    <span className='ms-3 pb-2 border-bottom'><Image src={item.dotImage} /> {item.text} </span>
                                    <h5 className='fw-bold pt-4 ms-3'>{item.heading} </h5>
                                    <button className={item.style}>{item.button} </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <Image src={dots} />
                </div>
            </div>
        </div>
    )
}

export default Section3Page