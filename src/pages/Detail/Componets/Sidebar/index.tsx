import React from 'react'
import Progress from './Progress'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* enroll */}
            <div className="sidebar-box">
                <div className="sidebar-box-inner">
                    <h3 className="title">Course Price</h3>
                    <div className="sidebar-course-price">
                        <span>$800.00</span>
                        <a href="#" className="enroll-btn">Enroll THis Course</a>
                        <a href="#" className="download-btn">Download PDF</a>
                    </div>
                </div>
            </div>
            {/* review */}
            <div className="sidebar-box">
                <div className="sidebar-box-inner">
                    <h3 className="title">Course Reviews</h3>
                    <div className="sidebar-course-reviews">
                        <h4>Average Rating<span>4.8</span></h4>
                        <ul>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                        <div className="skill-area">
                            <Progress />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar