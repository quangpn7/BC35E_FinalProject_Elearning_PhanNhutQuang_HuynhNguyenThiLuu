import React from 'react'

function Review() {
    return (
        <div className='review'>
            <a href="#">
                <img alt="Comments" src="https://www.radiustheme.com/demo/html/academics/academics/img/course/16.jpg" className="media-object" />
            </a>
            <div className="body">
                <h3><a href="#">Greg Christman</a></h3>
                <h4>Excellent course!</h4>
                <p>Rimply dummy text of the printinwhen an unknown printer took eype and scramb relofeletog and typesetting industry. Lorem </p>
                <div className="replay-area">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Review