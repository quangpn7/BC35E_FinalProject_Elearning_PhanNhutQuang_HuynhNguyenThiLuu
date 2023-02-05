import { Input, Select } from "antd";
import Search from "antd/es/input/Search";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
import { openType, showModal } from "../../redux/reducer/modalReducer";

type Props = {};

const UserSearch: React.FC = (props: Props) => {
  const [groupSelected, setGroupSelected] = useState<string>("GP01");

  // on search event
  const onSearch = (values: string) => {
    console.table({ keySearch: values, group: groupSelected });
  };
  // set up dispatch
  const dispatch: DispatchType = useDispatch();
  // get Option antd
  const { Option } = Select;
  return (
    <>
      <div className="">
        <Input.Group compact>
          <Select
            size="large"
            defaultValue={groupSelected}
            onChange={(value: string) => {
              setGroupSelected(value);
            }}
          >
            <Option value="GP01">GP01</Option>
            <Option value="GP02">GP02</Option>
            <Option value="GP03">GP03</Option>
          </Select>
          <Input.Search
            className="w-50"
            size="large"
            placeholder="Enter username or Name"
            enterButton="Search"
            onSearch={onSearch}
          />
        </Input.Group>

        <a
          className="mt-3 d-inline-block"
          onClick={() => {
            dispatch(openType("ADD_EDIT_USER"));
            dispatch(showModal());
          }}
        >
          Add new user
        </a>
      </div>
    </>
  );
};

export default UserSearch;
