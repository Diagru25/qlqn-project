import { Affix, Space } from "antd";
import React from "react";
import MemberBasic from "./components/MemberBasic";
import MemberCorporate from "./components/MemberCorporate";
import MemberCyberWarfare from "./components/MemberCyberWarfare";
import MemberQualification from "./components/MemberQualification";
import styles from "./style.module.css";

const MemberControl = ({
    renderActions,
    onSubmit,
    initialMember = {},
}) => {
    return (
        <div className={styles["be-member-info"]}>
            <Space direction="vertical" style={{ width: "100%" }}>
                <MemberBasic/>
                <MemberCorporate/>
                <MemberQualification/>
                <MemberCyberWarfare/>
                <Affix offsetBottom={0}>
                    <div className={styles["be-member-info__action"]}>
                        {renderActions(onSubmit)}
                    </div>
                </Affix>
            </Space>
        </div>
    )
}

export default MemberControl;