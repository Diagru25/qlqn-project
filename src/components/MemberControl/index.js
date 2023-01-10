import { Affix, Space } from "antd";
import React, { memo } from "react";
import MemberBasic from "./components/MemberBasic";
import MemberCorporate from "./components/MemberCorporate";
import MemberCyberWarfare from "./components/MemberCyberWarfare";
import MemberOthers from "./components/MemberOthers";
import MemberQualification from "./components/MemberQualification";
import styles from "./style.module.css";
import useMemberControl from "./hooks/useMemberControl";

const MemberControl = ({
  renderActions,
  onSubmit,
  initialMember,
  verifyInfo,
}) => {
  // let disabled = false;
  const { handleSubmit, memberState, userFormError, handleUserFormChange } =
    useMemberControl(onSubmit, initialMember, verifyInfo);

  return (
    <div className={styles["be-member-info"]}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <MemberBasic
          userBasicFormValue={memberState.userBasicFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberCorporate
          userCorporateFormValue={memberState.userCorporateFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberQualification
          userQualificationFormValue={memberState.userQualificationFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberCyberWarfare
          userCyberWarfareFormValue={memberState.userCyberWarfareFormValue}
          errors={userFormError}
          handleUserFormChange={handleUserFormChange}
        />
        <MemberOthers
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
