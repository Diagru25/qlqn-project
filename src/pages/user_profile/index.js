import { Button, Col, Row, Space, Spin } from "antd";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import MemberControl from "../../components/MemberControl";
import { adminRoute } from "../../constants/route.constant";
import { showNotification } from "../../helper/showNotification";
import userAPI from "../../services/apis/userAPI";
import Breadcrumb from "../../components/Breadcrumb";
import useActions from "../../redux/useActions";
import { makeMilitaryPdf } from "../../helper/web";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { userActions } = useActions();
  const { verifyActions } = useActions();

  const verifyInfo = useSelector((state) => state.verifyReducer.verifyInfo);
  const userProfile = useSelector((state) => state.userReducer.userProfile);
  const userData = userProfile.userProfile;

  useEffect(() => {
    dispatch(userActions.actions.getUserProfile());
    dispatch(verifyActions.actions.getVerifyInfo(userData.user_id));
  }, [dispatch, userActions, verifyActions, userData.user_id]);

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
      setIsLoading(true);
      await userAPI.updateUserProfile({ ...data });
      setIsLoading(false);
      showNotification("success", "C???p nh???p m???i th??nh c??ng!");
    } catch (error) {
      setIsLoading(false);
      if (error.status === 403) {
        showNotification(
          "error",
          "L???i ph??n quy???n",
          "Ng?????i d??ng kh??ng c?? quy???n c???p nh???p h??? s?? qu??n nh??n!"
        );
      }
      if (error.status === 500) {
        showNotification(
          "error",
          "L???i server",
          "Y??u c???u ki???m tra l???i k???t n???i internet!"
        );
      }
    }
  };

  const printPdf = async () => {
    const docDefinition = await makeMilitaryPdf(userProfile);

    pdfMake.createPdf(docDefinition).print();
  };

  const renderActions = (onSubmit) => {
    return (
      <Space>
        <Button onClick={() => navigate(adminRoute.DASHBOARD)}>H???y</Button>
        <Button onClick={printPdf}>Xu???t file PDF</Button>
        <Button type="primary" onClick={onSubmit}>
          L??u &#38; Hi???n th???
        </Button>
      </Space>
    );
  };

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="H??? s?? ng?????i d??ng" />
        </Col>
      </Row>
      <Spin tip="??ang x??? l??..." spinning={isLoading}>
        <div>
          <MemberControl
            isLoading={isLoading}
            verifyInfo={verifyInfo}
            renderActions={renderActions}
            onSubmit={handleSubmitEditMember}
            initialMember={userData}
          />
        </div>
      </Spin>
    </>
  );
};

export default memo(UserInfo);
