import { Modal } from "antd";
import { ModalFunc } from "antd/es/modal/confirm";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEditForm from "../../components/Form/AddEditForm";
import LoginForm from "../../components/Form/LoginForm";
import { DispatchType, RootState } from "../../redux/configStore";
import { setEditType, hideModal } from "../../redux/reducer/modalReducer";

type Props = {};

const ModalHOC: React.FC<Props> = () => {
  // Setup state open modal
  const isModalOpen = useSelector(
    (state: RootState) => state.modalReducer.visible
  );

  // Setup dispatch - useSelector
  const dispatch: DispatchType = useDispatch();
  const modalContent = useSelector((state: RootState) => state.modalReducer);

  // Setup which inner content of modal
  let Component: React.FC = () => null;

  switch (modalContent.Component) {
    case "LOGIN_FORM":
      Component = LoginForm;
      break;
    case "ADD_EDIT_USER":
      Component = AddEditForm;
      break;
    default:
      break;
  }

  const handleCancel = () => {
    dispatch(hideModal());
    dispatch(setEditType(true));
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        okButtonProps={{ hidden: true }}
        onCancel={handleCancel}
        cancelButtonProps={{ hidden: true }}
      >
        <Component />
      </Modal>
    </>
  );
};

export default ModalHOC;
