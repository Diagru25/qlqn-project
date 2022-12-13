import { Affix, Space } from "antd";
import React, { memo } from "react";
import MemberBasic from "./components/MemberBasic";
import MemberCorporate from "./components/MemberCorporate";
import MemberCyberWarfare from "./components/MemberCyberWarfare";
import MemberOthers from "./components/MemberOthers";
import MemberQualification from "./components/MemberQualification";
import styles from "./style.module.css";
import useMemberControl from "./hooks/useMemberControl";

const MemberControl = ({ flag, renderActions, onSubmit, initialMember }) => {
  // let disabled = false;
  const { handleSubmit, memberState, userFormError, handleUserFormChange } =
    useMemberControl(onSubmit, initialMember);

  // if (flag === "member-detail") {
  //   disabled = true;
  // }
  return (
    <div className={styles["be-member-info"]}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <MemberBasic
          // disabled={disabled}
          userBasicFormValue={memberState.userBasicFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberCorporate
          // disabled={disabled}
          userCorporateFormValue={memberState.userCorporateFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberQualification
          // disabled={disabled}
          userQualificationFormValue={memberState.userQualificationFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberCyberWarfare
          // disabled={disabled}
          userCyberWarfareFormValue={memberState.userCyberWarfareFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberOthers
          // disabled={disabled}
          userOthersFormValue={memberState.userOthersFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />

        <Affix offsetBottom={0}>
          <div className={styles["be-member-info__action"]}>
            {renderActions(handleSubmit)}
          </div>
        </Affix>
      </Space>
    </div>
  );
};

export default memo(MemberControl);
