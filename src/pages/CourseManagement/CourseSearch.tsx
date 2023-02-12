import { Input, InputRef, Select } from "antd";
import Search from "antd/es/input/Search";
import { Option } from "antd/es/mentions";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { setCategoryCodeAction, getAllCategoryApi, getAllCourseApi, getCoursesPaginationApi, resetCourseFormAction, getCoursesByCategoryApi } from "../../redux/reducer/courseReducer";
import { openType, showModal } from "../../redux/reducer/modalReducer";

type Props = {};

const CourseSearch: React.FC = (props: Props) => {

  const { allCategory, allCourses } = useSelector((state: RootState) => state.courseReducer);
  const dispatch: DispatchType = useDispatch();

  // handle refresh after edit
  const { editType } = useSelector((state: RootState) => state.modalReducer);
  // handle group search change

  const handleGroupChange = (value: string, keyword: string) => {
    //
    const action = setCategoryCodeAction(value);
    dispatch(action);

    if (value) {
      const action1 = getCoursesByCategoryApi(value);
      dispatch(action1);
    }
    else {
      const action2 = getCoursesPaginationApi('', 1, 1000000);
      dispatch(action2);
    }
  };
  // on search event
  const onSearch = (values: string) => {

  };

  // get Option antd
  const { Option } = Select;
  // useEffect
  useEffect(() => {

  }, [editType]);

  useEffect(() => {
    const action = getAllCategoryApi();
    dispatch(action);
    //
    const action1 = getAllCourseApi();
    dispatch(action1);


    const action2 = getCoursesPaginationApi('', 1, 1000000);
    dispatch(action2);

  }, [])

  return (
    <>
      <div className="">
        <Input.Group compact>
          <Select
            size="large"
            defaultValue={"ALL"}
            onChange={(value: string) => {
              handleGroupChange(value, '');
            }}
            style={{ width: 200 }}
          >
            <Option value="">ALL</Option>
            {allCategory?.map(category => <Option key={category.maDanhMuc} value={category.maDanhMuc}>{category.tenDanhMuc}</Option>)}
          </Select>
          <Input.Search
            className="w-50"
            size="large"
            placeholder="Enter course name"
            enterButton="Search"
            onSearch={onSearch}
            onChange={(e) => {
            }}
          />
        </Input.Group>

        <button
          className="mt-3 d-inline-block"
          onClick={() => {
            dispatch(resetCourseFormAction(null));
            dispatch(openType("ADD_EDIT_COURSE"));
            dispatch(showModal());
          }}
        >
          Add new course
        </button>
      </div>
    </>
  );
};

export default CourseSearch;
