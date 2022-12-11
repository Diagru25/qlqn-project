import { useEffect, useState } from "react";
import memberApi from "../services/apis/memberAPI";
import userAPI from "../services/apis/userAPI";

export const usePermission = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const getAdminPermission = async () => {
    const getPermission = await memberApi.getMemberPosition(1, 100);
    const getUserProfile = await userAPI.getUserProfile();

    const { items } = getPermission.result;
    const { Record } = getUserProfile.result;

    const adminIndex = items.findIndex(
      (el) => el.Id === "3509DE02-52DD-4BA7-E244-08DA44747730"
    );

    const adminUser = items[adminIndex];

    if (Record.ChucVu === adminUser.Ten) {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    getAdminPermission();
  }, []);

  return isAdmin;
};
