import React from 'react'
import { CourseDetailModal } from '../../redux/reducer/courseReducer'

type CourseProps = {
    course: CourseDetailModal
}

function Course({ course }: CourseProps) {
    return (
        <div className='course'>
            <div className='wrapper'>
                <div className='img-wrapper'>
                    <img src={`${course.hinhAnh}`} alt='img' style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover'
                    }} />
                    <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                </div>

                <div className='content-wrapper'>
                    <h3 className="item-title"><a href="#">{course.tenKhoaHoc}</a></h3>
                    <div className="item-content" style={{
                        height: '40px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}>{course.moTa}</div>
                    <ul className="courses-info">
                        <li>3 Months
                            <br /><span> Course</span></li>
                        <li>30
                            <br /><span> Classes</span></li>
                        <li>10 am - 11 am
                            <br /><span> Classes</span></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Course