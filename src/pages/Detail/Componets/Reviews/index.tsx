import React from 'react'
import CommentForm from './CommentForm'
import Review from './Review'

function Reviews() {
    return (
        <div>
            <h4 className='title'>
                Student Reviews
            </h4>
            <Review />
            <h4 className='title'>Leave a comment</h4>
            <CommentForm />
        </div>
    )
}

export default Reviews