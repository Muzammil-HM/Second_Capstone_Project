import React from 'react'
import Image from 'next/image'
import './card.css'
import Icons from '../../assets/images/Icons.svg';
import penImage from '../../assets/images/penImage.svg';
import cameraImage from '../../assets/images/cameraImage.svg';
import pageImage from '../../assets/images/pageImage.svg';
import Rating from '../../assets/images/Rating.svg';

const CardPage = () => {

    const data = [
        {
            FirstImage: penImage,
            ratingImage: Rating,
            heading: "Basic web design",
            text: "Get the best course, gain knowledge and shine for your future career.",
            price: "120.75",
            button: "Book Now",
            cardStyle: "bg-color float-end"

        },
        {
            FirstImage: cameraImage,
            ratingImage: Rating,
            heading: "UI/UX design",
            text: "Get the best course, gain knowledge and shine for your future career.",
            price: "120.75",
            button: "Book Now",
            cardStyle: "bg-color1 float-end"

        },
        {
            FirstImage: pageImage,
            ratingImage: Rating,
            heading: "Web App design",
            text: "Get the best course, gain knowledge and shine for your future career.",
            price: "120.75",
            button: "Book Now",
            cardStyle: "bg-color2 float-end"

        },

    ]

    return (

        <div className='container pd overflow-x-hidden'>
            <h1 className='fw-bold'>Our popular courses </h1> <Image src={Icons} className='float-end d_none' />
            <p className='prag'>Build new skills with new trendy courses and shine for the next future career.</p>

            <div className='row'>
                {data.map((item) => {
                    return (
                        <div className='col-md-4'>
                            <div className="bg-card card-resp">
                                <Image src={item.FirstImage} className='img-fluid'/>
                                <div className='p-3'>
                                    <h4 className='fw-bold'>{item.heading} <Image src={item.ratingImage} className='d-flex float-end' /> </h4>
                                    <p>{item.text} </p>
                                    <span className='fw-bold'>${item.price}</span> <button className={item.cardStyle} >{item.button}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>


    )

}


export default CardPage;