import { Button, Col, Row, Space } from "antd";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberControl from "../../components/MemberControl";
import { adminRoute } from "../../constants/route.constant";
import { showNotification } from "../../helper/showNotification";
import userAPI from "../../services/apis/userAPI";
import Breadcrumb from "../../components/Breadcrumb";

const UserInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await userAPI.getUserProfile();
      const userRecord = res.result.Record;
      setUserInfo({ ...userRecord });
      showNotification("success", "Cập nhập hồ sơ thông tin quân nhân thành công!")
    } catch (error) {
      console.log(error);
    }
  };

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
        user_id: memberData.user_id,
      };
      await userAPI.updateUserProfile({ ...data });
      showNotification("success", "Cập nhập mới thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  const renderActions = (onSubmit) => {
    return (
      <Space>
        <Button onClick={() => navigate(adminRoute.DASHBOARD)}>Hủy</Button>
        <Button type="primary" onClick={onSubmit}>
          Lưu &#38; Hiển thị
        </Button>
      </Space>
    );
  };

  return (
    <>
      <Row gutter={24} style={{ marginBottom: "15px" }}>
        <Col span={12}>
          <Breadcrumb title="Hồ sơ người dùng" />
        </Col>
      </Row>
      <div>
        <MemberControl
          flag="user-profile"
          renderActions={renderActions}
          onSubmit={handleSubmitEditMember}
          initialMember={userInfo}
        />
      </div>
    </>
  );
};

export default memo(UserInfo);
