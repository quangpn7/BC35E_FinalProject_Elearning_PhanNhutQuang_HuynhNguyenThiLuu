import React from 'react'

type Props = {}

function SearchByCategory({ }: Props) {
    return (
        <div className='sidebar'>
            <div className='sidebar-box'>
                <div className='sidebar-box-inner'>
                    <h4 className='title'>Class Categories</h4>
                    <ul className='categories'>
                        <li>
                            Lập trình Backend
                        </li>
                        <li>
                            Lập trình Frontend
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchByCategory