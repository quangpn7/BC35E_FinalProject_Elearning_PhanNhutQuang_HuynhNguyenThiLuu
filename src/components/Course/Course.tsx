import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DispatchType } from '../../redux/configStore'
import { CourseDetailModal, getCourseDetailApi } from '../../redux/reducer/courseReducer'

type CourseProps = {
    course: CourseDetailModal
}

function Course({ course }: CourseProps) {
    const dispatch: DispatchType = useDispatch();
    return (
        <div className='course'>
            <div className='wrapper'>
                <div className='img-wrapper'>
                    <img
                        src={`${course.hinhAnh}`}
                        alt='img'
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/img/brand-1.jpg';
                        }}
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                        }} />
                    <NavLink
                        onClick={() => {
                            const action = getCourseDetailApi(course.maKhoaHoc);
                            dispatch(action);
                        }}
                        to={`/detail/${course.maKhoaHoc}`}
                    >
                        <i className="fa fa-link" aria-hidden="true"></i>
                    </NavLink>
                </div>

                <div className='content-wrapper'>
                    <h3 className="item-title">{course.tenKhoaHoc}</h3>
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