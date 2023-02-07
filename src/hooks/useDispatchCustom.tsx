import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const useDispatchCustom = (props: Props) => {
  const dispatch = useDispatch();
  return () => {};
};

export default useDispatchCustom;
