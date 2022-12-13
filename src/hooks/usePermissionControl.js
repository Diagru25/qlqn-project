import { useEffect } from "react";
import { select } from "redux-saga/effects";
import permissionApi from "../services/apis/permissionApi";
import userAPI from "../services/apis/userAPI";

export const usePermissionControl = () => {
  useEffect(() => {
    handlePermissionList()
  }, [])

  const handlePermissionList = async () => {
    try {
      const currentModule = await select(
        (state) => state.permissionReducer.currentModule
      );

      console.log("qwer",currentModule);

      const getUserProfile = await userAPI.getUserProfile();
    } catch (error) {}
  };
  return {};
};
