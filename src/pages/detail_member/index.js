import { Button, Col, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import MemberControl from "../../components/MemberControl";
import { adminRoute } from "../../constants/route.constant";
import { showNotification } from "../../helper/showNotification";
import useActions from "../../redux/useActions";
import memberApi from "../../services/apis/memberAPI";

const DetailMember = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { verifyActions } = useActions();

  const [memberDetail, setMemberDetail] = useState({});

  const verifyInfo = useSelector((state) => state.verifyReducer.verifyInfo);

  useEffect(() => {
    dispatch(verifyActions.actions.getVerifyInfo(state));
  }, [state, dispatch, verifyActions]);

  const handleSubmitEditMember = async (memberData) => {
    try {
      const {
        userBasicFormValue,
        userCorporateFormValue,
        userCyberWarfareFormValue,
        userOthersFormValue,
        userQualificationFormValue,
      } = memberData;
      const data = {
        HoVaTen: userBasicFormValue.HoVaTen,
        HoVaTenKhaiSinh: userBasicFormValue.HoVaTenKhaiSinh,
        NgaySinh: userBasicFormValue.NgaySinh,
        DanToc: userBasicFormValue.DanToc,
        BiDanh: userBasicFormValue.BiDanh,
        TonGiao: userBasicFormValue.TonGiao,
        TenKhac: userBasicFormValue.TenKhac,
        NgayNhapNgu: userBasicFormValue.NgayNhapNgu,
        SoHieuQuanNhan: userBasicFormValue.SoHieuQuanNhan,
        NgayXuatNgu: userBasicFormValue.NgayXuatNgu,
        SoCMND: userBasicFormValue.SoCMND,
        NgayTaiNgu: userBasicFormValue.NgayTaiNgu,
        GioiTinh: userBasicFormValue.GioiTinh,
        NguyenQuan: userBasicFormValue.NguyenQuan,
        NgayNhanCapBac: userBasicFormValue.NgayNhanCapBac,
        ThuongTru: userBasicFormValue.ThuongTru,
        NgayNhanChucVu: userBasicFormValue.NgayNhanChucVu,
        TPGiaDinh: userBasicFormValue.TPGiaDinh,
        TPBanThan: userBasicFormValue.TPBanThan,
        CapBac: userBasicFormValue.CapBac,
        ChucVu: userBasicFormValue.ChucVu,
        DonVi: userBasicFormValue.DonVi,
        NgayVaoDang: userCorporateFormValue.NgayVaoDang,
        NoiVaoDang: userCorporateFormValue.NoiVaoDang,
        NgayVaoDangChinhThuc: userCorporateFormValue.NgayVaoDangChinhThuc,
        NgayVaoDoan: userCorporateFormValue.NgayVaoDoan,
        ChucVuDoan: userCorporateFormValue.ChucVuDoan,
        ChucVuDang: userCorporateFormValue.ChucVuDang,
        TrinhDoVanHoa: userQualificationFormValue.TrinhDoVanHoa,
        TrinhDoQuanLy: userQualificationFormValue.TrinhDoQuanLy,
        HocHam: userQualificationFormValue.HocHam,
        TrinhDoLyLuanChinhTri: userQualificationFormValue.TrinhDoLyLuanChinhTri,
        HocVi: userQualificationFormValue.HocVi,
        TrinhDoCMKT: userQualificationFormValue.TrinhDoCMKT,
        TrinhDoNgoaiNgu: userQualificationFormValue.TrinhDoNgoaiNgu,
        CapToChucDaoTao: userCyberWarfareFormValue.CapToChucDaoTao,
        CoSoDaoTao: userCyberWarfareFormValue.CapToChucDaoTao,
        ChungChiDaoTao: userCyberWarfareFormValue.ChungChiDaoTao,
        NoiDungDaoTao: userCyberWarfareFormValue.NoiDungDaoTao,
        LoaiHinhDaoTao: userCyberWarfareFormValue.LoaiHinhDaoTao,
        NganhNgheDaoTao: userCyberWarfareFormValue.NganhNgheDaoTao,
        SucKhoe: userOthersFormValue.SucKhoe,
        BacLuong: userOthersFormValue.BacLuong,
        NhomMau: userOthersFormValue.NhomMau,
        HeSoLuong: userOthersFormValue.HeSoLuong,
        SoBHXH: userOthersFormValue.SoBHXH,
        TinhTrangHonNhan: userOthersFormValue.TinhTrangHonNhan,
        NganhQuanLy: userOthersFormValue.NganhQuanLy,
      };

      await memberApi.updateMemberList(state, { ...data });
      showNotification("success", "C???p nh???p m???i th??nh c??ng!");
    } catch (error) {
      showNotification("error", "Kh??ng th??? c???p nh???p th??ng tin qu??n nh??n");
    }
  };

  const renderActions = (onSubmit) => {
    return (
      <Space>
        <Button onClick={() => navigate(adminRoute.DASHBOARD)}>H???y</Button>
        <Button type="primary" onClick={onSubmit}>
          L??u &#38; Hi???n th???
        </Button>
      </Space>
    );
  };

  useEffect(() => {
    getMemberDetail();
  }, []);

  const getMemberDetail = async () => {
    try {
      const res = await memberApi.getMemberDetail(state);
      const memberRecord = res.result.Record;
      setMemberDetail(memberRecord);
    } catch (error) {}
  };

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="Chi ti???t h??? s??" />
        </Col>
      </Row>
      <div>
        <MemberControl
          verifyInfo={verifyInfo}
          initialMember={memberDetail}
          renderActions={renderActions}
          onSubmit={handleSubmitEditMember}
        />
      </div>
    </>
  );
};

export default DetailMember;
