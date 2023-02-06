import { Input, Select } from "antd";
import Search from "antd/es/input/Search";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CLIENT_RENEG_LIMIT } from "tls";
import { DispatchType } from "../../redux/configStore";
import { openType, showModal } from "../../redux/reducer/modalReducer";
import { getAllUserInfoApi } from "../../redux/reducer/userManageReducer";

type Props = {};

const UserSearch: React.FC = (props: Props) => {
  // set up dispatch
  const dispatch: DispatchType = useDispatch();
  const [groupSelected, setGroupSelected] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  // handle group search change
  const handleGroupChange = (value: string, keyword: string) => {
    setGroupSelected(value);
    const getAllUserByGroup = getAllUserInfoApi(value, keyword);
    dispatch(getAllUserByGroup);
  };
  // on search event
  const onSearch = (values: string) => {
    const getAllUserByName = getAllUserInfoApi(groupSelected, values);
    dispatch(getAllUserByName);
  };

  // get Option antd
  const { Option } = Select;
  return (
    <>
      <div className="">
        <Input.Group compact>
          <Select
            size="large"
            defaultValue={"ALL"}
            onChange={(value: string) => {
              handleGroupChange(value, keyword);
            }}
          >
            <Option value="">ALL</Option>
            <Option value="GP01">GP01</Option>
            <Option value="GP02">GP02</Option>
            <Option value="GP03">GP03</Option>
            <Option value="GP04">GP04</Option>
            <Option value="GP05">GP05</Option>
            <Option value="GP06">GP06</Option>
            <Option value="GP07">GP07</Option>
            <Option value="GP08">GP08</Option>
            <Option value="GP09">GP09</Option>
            <Option value="GP10">GP10</Option>
          </Select>
          <Input.Search
            className="w-50"
            size="large"
            placeholder="Enter username or Name"
            enterButton="Search"
            onSearch={onSearch}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
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
