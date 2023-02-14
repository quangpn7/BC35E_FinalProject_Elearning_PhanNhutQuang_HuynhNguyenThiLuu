import { createSlice } from "@reduxjs/toolkit";

import { stateModalReducer } from "../../interfaces/others/ModalType";

const initialState: stateModalReducer = {
  Component: null,
  visible: false,
  editType: true, //true -> add, false -> edit
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    openType: (state, action) => {
      state.Component = action.payload;
    },
    setEditType: (state, action) => {
      state.editType = action.payload;
    },
    showModal: (state) => {
      state.visible = true;
    },
    hideModal: (state) => {
      state.visible = false;
    },
  },
});

export const { openType, showModal, hideModal, setEditType } =
  modalReducer.actions;

export default modalReducer.reducer;
