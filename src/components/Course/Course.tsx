import React from 'react'

function Course() {
    return (
        <div className='course'>
            <div className='wrapper'>
                <div className='img-wrapper'>
                    <img src='https://www.radiustheme.com/demo/html/academics/academics/img/course/2.jpg' alt='img' />
                    <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                </div>

                <div className='content-wrapper'>
                    <h3 className="item-title"><a href="#">GMAT</a></h3>
                    <p className="item-content">Rmply dummy text printing setting industry it’s free demo.</p>
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
        </div>
    )
}

export default Course