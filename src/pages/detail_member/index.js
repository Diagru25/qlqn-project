import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MemberControl from "../../components/MemberControl";
import memberApi from "../../services/apis/memberAPI";

const DetailMember = () => {
  const [memberDetail, setMemberDetail] = useState({});

  const { state } = useLocation();

  const handleSubmitEditMember = () => {};
  const renderActions = () => {};

  useEffect(() => {
    getMemberDetail();
  }, []);

  const getMemberDetail = async () => {
    try {
      const res = await memberApi.getMemberDetail(state);
      const memberRecord = res.result.Record;
      setMemberDetail(memberRecord);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div>
        <MemberControl
          flag="member-detail"
          initialMember={memberDetail}
          onSubmit={handleSubmitEditMember}
          renderActions={renderActions}
        />
      </div>
    </>
  );
};

export default DetailMember;