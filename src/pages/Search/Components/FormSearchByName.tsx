import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCourseNameAction } from '../../../redux/reducer/courseReducer';

type Props = {}

function FormSearchByName({ }: Props) {
    interface ISearch {
        courseName: string
    }

    const dispatch = useDispatch();

    const [search, setSearch] = useState<ISearch>({ courseName: '' });
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const action = setCourseNameAction(search.courseName);
        dispatch(action);
    }
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch({ courseName: e.currentTarget.value })
    }
    return (
        <div className='sidebar'>
            <div className='sidebar-box'>
                <div className='sidebar-box-inner'>
                    <h4 className='title'>Find your course</h4>
                    <form onSubmit={handleSubmit}>
                        <input name="courseName" placeholder='Course Name'
                            style={{ margin: '0 0 1rem 0' }}
                            onChange={handleInputChange}
                            value={search.courseName}
                        />
                        <button type='submit' className='btn-search' onClick={handleSubmit}>Search course</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormSearchByName