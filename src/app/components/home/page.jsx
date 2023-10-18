import Image from 'next/image'
import React from 'react'
import './home.css'
import guy from '../../assets/images/guy.svg';
import video from '../../assets/images/video.svg';
import uiux from '../../assets/images/uiux.svg';
import develop from '../../assets/images/develop.svg';
import market from '../../assets/images/market.svg';


function HomePage() {
  return (
    <>
      <div className='bg'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-md-6'>
              <div className='position-relative'>
                <Image src={guy} className='img-fluid' />
                <div className="card p-3 position-absolute bottom-0 end-0 mb-4">
                 <span><Image width={40} src={uiux} /> 20 Courses <p className='fw-bold ms-5'>UI/UX Design</p></span>
                 <span><Image width={40} src={develop} /> 20 Courses <p className='fw-bold ms-5'>Development</p></span>
                 <span><Image width={40} src={market} /> 30 Courses <p className='fw-bold ms-5'>Marketing</p></span>
                </div>
              </div>
            </div>

            <div className='col-md-6 p-5 '>
              <h1 className='font'>Learn without limits and spread knowledge.</h1>
              <p className='pragrph'>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p>
              <button className='btn-5 fw-bold text-white'>See Courses</button><span className='fw-bold spn'><Image src={video} className='img-fluid' />Watch Video</span>
              <p className='pt-4'>Recent engagement</p>
              <p><b className='fs-3'>50K</b> Students <span><b className='fs-3'>70+</b> Courses</span></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage