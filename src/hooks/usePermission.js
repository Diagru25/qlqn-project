import { useEffect, useState } from "react";
import memberApi from "../services/apis/memberAPI";
import userAPI from "../services/apis/userAPI";

export const usePermission = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const getAdminPermission = async () => {
    const getUserProfile = await userAPI.getUserProfile();

    // console.log(getUserProfile);

    const { result } = await getUserProfile;

    const userId = await result.Record.user_id;

    if (userId === "FE3CAD63-5187-4F4B-ADAA-798FF932B5C4") {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    getAdminPermission();
  }, []);

  return isAdmin;
};
