import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../../redux/configStore'
import { getAllCategoryApi, setCategoryCodeAction } from '../../../redux/reducer/courseReducer';

type Props = {}

function SearchByCategory({ }: Props) {
    const { allCategory, categoryCode } = useSelector((state: RootState) => state.courseReducer);
    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        const action = getAllCategoryApi();
        dispatch(action);
    }, [])


    return (
        <div className='sidebar'>
            <div className='sidebar-box'>
                <div className='sidebar-box-inner'>
                    <h4 className='title'>Class Categories</h4>
                    <ul className='categories'>
                        {allCategory?.map(category => (
                            <li key={category.maDanhMuc} onClick={() => {
                                const action = setCategoryCodeAction(category.maDanhMuc);
                                dispatch(action);
                            }}
                                className={category.maDanhMuc === categoryCode ? "active" : ""}
                            >
                                {category.tenDanhMuc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchByCategory