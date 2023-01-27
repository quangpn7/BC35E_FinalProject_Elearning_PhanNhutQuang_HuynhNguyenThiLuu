import React from 'react'

function Lecture() {
    return (
        <li className='lecture'>
            <div className="img">
                <a href=''><img src="https://www.radiustheme.com/demo/html/academics/academics/img/sidebar/1.jpg" className="img-responsive" alt="skilled" /></a>
            </div>
            <div className="content">
                <h4><a href=''>Kazi Fahim</a></h4>
                <p>Senior UI Designer</p>
            </div>
            <div className="schedule">
                <ul>
                    <li>
                        <h4>Day</h4>
                        <p>Wed Day</p>
                    </li>
                    <li>
                        <h4>Time</h4>
                        <p>9 am - 11 am</p>
                    </li>
                </ul>
            </div>
            <div className="details">
                <a href="#" className="btn">Details</a>
            </div>
        </li>
    )
}

export default Lecture