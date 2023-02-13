import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEditForm from "../../components/Form/AddEditForm";
import CourseForm from "../../components/Form/CourseForm";
import LoginForm from "../../components/Form/LoginForm";
import Enrollment from "../../pages/UserManagement/Enrollment";
import { DispatchType, RootState } from "../../redux/configStore";
import { setEditType, hideModal } from "../../redux/reducer/modalReducer";
import { setForm } from "../../redux/reducer/userManageReducer";

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
    case "ADD_EDIT_COURSE":
      Component = CourseForm;
      break;
    case "ENROLL_USER":
      Component = Enrollment;
      break;
    default:
      break;
  }

  const handleCancel = () => {
    dispatch(hideModal());
    dispatch(setEditType(true));
    dispatch(setForm());
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        okButtonProps={{ hidden: true }}
        onCancel={handleCancel}
        cancelButtonProps={{ hidden: true }}
        width={modalContent.Component === "ENROLL_USER" ? 1000 : 600}
      >
        <Component />
      </Modal>
    </>
  );
};

export default ModalHOC;
