import Image from 'next/image'
import React from 'react'
import './sectionOne.css'
import man1 from '../../assets/images/man1.svg';
import man2 from '../../assets/images/man2.svg';


function Section1Page() {
  return (
    <div className='container pdd'>
      <div className='row py-5'>
        <div className='col-md-7'>
          <div className="img">
            <Image src={man1} className='mt-5 img-fluid' />
            <Image src={man2} className='img-fluid ms-4' />
          </div>
          
        </div>

        <div className='col-md-5 mt-5'>
          <h3 className='text-size'>Learner outcomes through our awesome platform</h3>
          <p className='prgrph'>87% of people learning for professional development<br /> report career benefits like getting a promotion, a raise, or<br /> starting a new career.</p>
          <p>Lesson Impact Report (2022)</p>
          <button className='button text-white'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Section1Page