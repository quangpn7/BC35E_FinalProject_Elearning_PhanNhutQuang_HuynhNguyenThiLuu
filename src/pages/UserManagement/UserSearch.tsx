import { Input, InputProps, InputRef, Select } from "antd";

import React, {
  EventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { DispatchType, RootState } from "../../redux/configStore";
import { openType, showModal } from "../../redux/reducer/modalReducer";
import { getAllUserInfoApi } from "../../redux/reducer/userManageReducer";

type Props = {};

const UserSearch: React.FC<Props> = () => {
  // set up dispatch
  const dispatch: DispatchType = useDispatch();
  const [groupSelected, setGroupSelected] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const { maLoaiNguoiDung } = useSelector(
    (state: RootState) => state.userReducer.userInfo
  );

  // handle refresh after edit
  const { editType } = useSelector((state: RootState) => state.modalReducer);
  // handle group search change
  const handleGroupChange = (value: string, keyword: string): void => {
    setGroupSelected(value);
    const getAllUserByGroup = getAllUserInfoApi(value, keyword);
    dispatch(getAllUserByGroup);
  };
  // handle change keyword
  const handleKeywordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    []
  );

  // on search event
  const onSearch = (values: string): void => {
    const getAllUserByName = getAllUserInfoApi(groupSelected, values);
    dispatch(getAllUserByName);
  };
  // handle add new user
  const handleAddUser = (auth: string): void => {
    if (auth === "HV") {
      toast.error("You don't have permission to perform this action!");
      return;
    }
    dispatch(openType("ADD_EDIT_USER"));
    dispatch(showModal());
  };

  // get Option antd
  const { Option } = Select;
  // useEffect
  useEffect(() => {
    const refeshListAction = getAllUserInfoApi(groupSelected, keyword);
    dispatch(refeshListAction);
  }, [editType]);

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
            placeholder="Enter name"
            enterButton="Search"
            onSearch={onSearch}
            onChange={handleKeywordChange}
          />
        </Input.Group>

        <a
          className={`mt-3 d-inline-block ${
            maLoaiNguoiDung === "HV" ? "d-none" : ""
          }`}
          // className="mt-3 d-inline-block"
          onClick={() => {
            handleAddUser(maLoaiNguoiDung);
          }}
        >
          Add new user
        </a>
      </div>
    </>
  );
};

export default UserSearch;
