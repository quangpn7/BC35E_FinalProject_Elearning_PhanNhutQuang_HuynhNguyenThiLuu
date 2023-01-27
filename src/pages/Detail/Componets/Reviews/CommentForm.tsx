import React from 'react'

function CommentForm() {
    return (
        <div className='row'>
            <form className='comment'>
                <fieldset>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control" />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="rate-wrapper">
                                <div className="rate-label">Your Rating:</div>
                                <div className="rate">
                                    <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                    <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                    <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                    <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                    <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea placeholder="Comment" className="textarea form-control" id="form-message" rows={8} cols={20}></textarea>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <button type="submit" className="view-all-accent-btn">Post Comment</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default CommentForm