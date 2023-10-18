import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <>
      <div className='bg'>
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">Lesson<span className='logo-color'>.</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse gap-3" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <a className="nav-link active fw-bold" aria-current="page" href="#"><span className='border1'>H</span>ome</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Reviews</a>
                </li>
              </ul>
              <div className='bootstrap'>
                <button className='header-btn text-white'>Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </>
  )
}

export default NavBar