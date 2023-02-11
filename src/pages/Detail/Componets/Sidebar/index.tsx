import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/configStore';
import Progress from './Progress'

function Sidebar() {
    const { currentCourse } = useSelector((state: RootState) => state.courseReducer);
    console.log(currentCourse);

    return (
        <div className='sidebar'>
            {/* enroll */}
            <div className="sidebar-box">
                <div className="sidebar-box-inner">
                    <h3 className="title">Course Price</h3>
                    <div className="sidebar-course-price">
                        <span>$800.00</span>
                        <button className="enroll-btn">Enroll This Course</button>
                        <button className="download-btn">Download PDF</button>
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
                            <Progress />
                            <Progress />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar