import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import * as Yup from "yup";

const initialValues = {
  userBasicFormValue: {
    HoVaTen: "",
    HoVaTenKhaiSinh: "",
    BiDanh: "",
    TenKhac: "",
    SoHieuQuanNhan: "",
    SoCMND: "",
    GioiTinh: "",
    CapBac: "",
    NgayNhanCapBac: "",
    ChucVu: "",
    DonVi: "",
    NgayNhanChucVu: "",
    NgaySinh: "",
    DanToc: "",
    TonGiao: "",
    NgayNhapNgu: "",
    NgayXuatNgu: "",
    NgayTaiNgu: "",
    NguyenQuan: "",
    ThuongTru: "",
    TPGiaDinh: "",
    TPBanThan: "",
  },
  userCorporateFormValue: {
    NgayVaoDang: "",
    NoiVaoDang: "",
    NgayVaoDangChinhThuc: "",
    NgayVaoDoan: "",
    ChucVuDang: "",
    ChucVuDoan: "",
  },
  userQualificationFormValue: {
    TrinhDoVanHoa: "",
    HocHam: "",
    HocVi: "",
    TrinhDoQuanLy: "",
    TrinhDoLyLuanChinhTri: "",
    TrinhDoCMKT: "",
    TrinhDoNgoaiNgu: "",
  },
  userCyberWarfareFormValue: {
    CapToChucDaoTao: "",
    ChungChiDaoTao: "",
    CoSoDaoTao: "",
    NoiDungDaoTao: "",
    LoaiHinhDaoTao: "",
    NganhNgheDaoTao: "",
  },
  userOthersFormValue: {
    SucKhoe: "",
    NhomMau: "",
    SoBHXH: "",
    BacLuong: "",
    HeSoLuong: "",
    TinhTrangHonNhan: "",
    NganhQuanLy: "",
  },
  user_id: "",
};

const userValidSchema = Yup.object().shape({
  userBasicFormValue: Yup.object().shape({
    HoVaTen: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    HoVaTenKhaiSinh: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    BiDanh: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TenKhac: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    SoHieuQuanNhan: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    SoCMND: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NgayNhanCapBac: Yup.string().required("Yêu cầu nhập thông tin!"),
    ChucVu: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    CapBac: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    DonVi: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    GioiTinh: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NgayNhanChucVu: Yup.string().required("Yêu cầu nhập thông tin!"),
    NgaySinh: Yup.string().required("Yêu cầu nhập thông tin!"),
    DanToc: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TonGiao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NgayNhapNgu: Yup.string().required("Yêu cầu nhập thông tin!"),
    NguyenQuan: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    ThuongTru: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TPGiaDinh: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TPBanThan: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  }),
  userCorporateFormValue: Yup.object().shape({
    ChucVuDoan: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  }),
  userQualificationFormValue: Yup.object().shape({
    TrinhDoVanHoa: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    HocHam: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    HocVi: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TrinhDoQuanLy: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TrinhDoLyLuanChinhTri: Yup.string()
      .trim()
      .required("Yêu cầu nhập thông tin!"),
    TrinhDoCMKT: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TrinhDoNgoaiNgu: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  }),
  userCyberWarfareFormValue: Yup.object().shape({
    CapToChucDaoTao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    ChungChiDaoTao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    CoSoDaoTao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NoiDungDaoTao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    LoaiHinhDaoTao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NganhNgheDaoTao: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  }),
  userOthersFormValue: Yup.object().shape({
    SucKhoe: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NhomMau: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    SoBHXH: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    BacLuong: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    HeSoLuong: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    TinhTrangHonNhan: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
    NganhQuanLy: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  }),
});

const useMemberControl = (onSubmit, initialMember, verifyInfo) => {
  useEffect(() => {
    if (initialMember) {
      userFormik.setValues({
        userBasicFormValue: {
          HoVaTen: initialMember.HoVaTen,
          HoVaTenKhaiSinh: initialMember.HoVaTenKhaiSinh,
          BiDanh: initialMember.BiDanh,
          TenKhac: initialMember.TenKhac,
          SoHieuQuanNhan: initialMember.SoHieuQuanNhan,
          SoCMND: initialMember.SoCMND,
          GioiTinh: initialMember.GioiTinh,
          CapBac: initialMember.CapBac,
          NgayNhanCapBac: initialMember.NgayNhanCapBac,
          ChucVu: initialMember.ChucVu,
          DonVi: initialMember.DonVi,
          NgayNhanChucVu: initialMember.NgayNhanChucVu,
          NgaySinh: initialMember.NgaySinh,
          DanToc: initialMember.DanToc,
          TonGiao: initialMember.TonGiao,
          NgayNhapNgu: initialMember.NgayNhapNgu,
          NgayXuatNgu: initialMember.NgayXuatNgu,
          NgayTaiNgu: initialMember.NgayTaiNgu,
          NguyenQuan: initialMember.NguyenQuan,
          ThuongTru: initialMember.ThuongTru,
          TPGiaDinh: initialMember.TPGiaDinh,
          TPBanThan: initialMember.TPBanThan,
        },
        userCorporateFormValue: {
          NgayVaoDang: initialMember.NgayVaoDang,
          NoiVaoDang: initialMember.NoiVaoDang,
          NgayVaoDangChinhThuc: initialMember.NgayVaoDangChinhThuc,
          NgayVaoDoan: initialMember.NgayVaoDoan,
          ChucVuDang: initialMember.ChucVuDang,
          ChucVuDoan: initialMember.ChucVuDoan,
        },
        userQualificationFormValue: {
          TrinhDoVanHoa: initialMember.TrinhDoVanHoa,
          HocHam: initialMember.HocHam,
          HocVi: initialMember.HocVi,
          TrinhDoQuanLy: initialMember.TrinhDoQuanLy,
          TrinhDoLyLuanChinhTri: initialMember.TrinhDoLyLuanChinhTri,
          TrinhDoCMKT: initialMember.TrinhDoCMKT,
          TrinhDoNgoaiNgu: initialMember.TrinhDoNgoaiNgu,
        },
        userCyberWarfareFormValue: {
          CapToChucDaoTao: initialMember.CapToChucDaoTao,
          ChungChiDaoTao: initialMember.ChungChiDaoTao,
          CoSoDaoTao: initialMember.CoSoDaoTao,
          NoiDungDaoTao: initialMember.NoiDungDaoTao,
          LoaiHinhDaoTao: initialMember.LoaiHinhDaoTao,
          NganhNgheDaoTao: initialMember.NganhNgheDaoTao,
        },
        userOthersFormValue: {
          SucKhoe: initialMember.SucKhoe,
          NhomMau: initialMember.NhomMau,
          SoBHXH: initialMember.SoBHXH,
          BacLuong: initialMember.BacLuong,
          HeSoLuong: initialMember.HeSoLuong,
          TinhTrangHonNhan: initialMember.TinhTrangHonNhan,
          NganhQuanLy: initialMember.NganhQuanLy,
        },
      });
    }
  }, [initialMember]);

  useEffect(() => {
    if (verifyInfo.recover_data) {
      userFormik.setValues({
        userBasicFormValue: {
          HoVaTen: verifyInfo.recover_data.HoVaTen,
          HoVaTenKhaiSinh: verifyInfo.recover_data.HoVaTenKhaiSinh,
          BiDanh: verifyInfo.recover_data.BiDanh,
          TenKhac: verifyInfo.recover_data.TenKhac,
          SoHieuQuanNhan: verifyInfo.recover_data.SoHieuQuanNhan,
          SoCMND: verifyInfo.recover_data.SoCMND,
          GioiTinh: verifyInfo.recover_data.GioiTinh,
          CapBac: verifyInfo.recover_data.CapBac,
          NgayNhanCapBac: verifyInfo.recover_data.NgayNhanCapBac,
          ChucVu: verifyInfo.recover_data.ChucVu,
          DonVi: verifyInfo.recover_data.DonVi,
          NgayNhanChucVu: verifyInfo.recover_data.NgayNhanChucVu,
          NgaySinh: verifyInfo.recover_data.NgaySinh,
          DanToc: verifyInfo.recover_data.DanToc,
          TonGiao: verifyInfo.recover_data.TonGiao,
          NgayNhapNgu: verifyInfo.recover_data.NgayNhapNgu,
          NgayXuatNgu: verifyInfo.recover_data.NgayXuatNgu,
          NgayTaiNgu: verifyInfo.recover_data.NgayTaiNgu,
          NguyenQuan: verifyInfo.recover_data.NguyenQuan,
          ThuongTru: verifyInfo.recover_data.ThuongTru,
          TPGiaDinh: verifyInfo.recover_data.TPGiaDinh,
          TPBanThan: verifyInfo.recover_data.TPBanThan,
        },
        userCorporateFormValue: {
          NgayVaoDang: verifyInfo.recover_data.NgayVaoDang,
          NoiVaoDang: verifyInfo.recover_data.NoiVaoDang,
          NgayVaoDangChinhThuc: verifyInfo.recover_data.NgayVaoDangChinhThuc,
          NgayVaoDoan: verifyInfo.recover_data.NgayVaoDoan,
          ChucVuDang: verifyInfo.recover_data.ChucVuDang,
          ChucVuDoan: verifyInfo.recover_data.ChucVuDoan,
        },
        userQualificationFormValue: {
          TrinhDoVanHoa: verifyInfo.recover_data.TrinhDoVanHoa,
          HocHam: verifyInfo.recover_data.HocHam,
          HocVi: verifyInfo.recover_data.HocVi,
          TrinhDoQuanLy: verifyInfo.recover_data.TrinhDoQuanLy,
          TrinhDoLyLuanChinhTri: verifyInfo.recover_data.TrinhDoLyLuanChinhTri,
          TrinhDoCMKT: verifyInfo.recover_data.TrinhDoCMKT,
          TrinhDoNgoaiNgu: verifyInfo.recover_data.TrinhDoNgoaiNgu,
        },
        userCyberWarfareFormValue: {
          CapToChucDaoTao: verifyInfo.recover_data.CapToChucDaoTao,
          ChungChiDaoTao: verifyInfo.recover_data.ChungChiDaoTao,
          CoSoDaoTao: verifyInfo.recover_data.CoSoDaoTao,
          NoiDungDaoTao: verifyInfo.recover_data.NoiDungDaoTao,
          LoaiHinhDaoTao: verifyInfo.recover_data.LoaiHinhDaoTao,
          NganhNgheDaoTao: verifyInfo.recover_data.NganhNgheDaoTao,
        },
        userOthersFormValue: {
          SucKhoe: verifyInfo.recover_data.SucKhoe,
          NhomMau: verifyInfo.recover_data.NhomMau,
          SoBHXH: verifyInfo.recover_data.SoBHXH,
          BacLuong: verifyInfo.recover_data.BacLuong,
          HeSoLuong: verifyInfo.recover_data.HeSoLuong,
          TinhTrangHonNhan: verifyInfo.recover_data.TinhTrangHonNhan,
          NganhQuanLy: verifyInfo.recover_data.NganhQuanLy,
        },
      });
    }
  }, [verifyInfo.recover_data]);

  const userFormik = useFormik({
    initialValues: initialValues,
    validationSchema: userValidSchema,
    onSubmit: (data) => {
      onSubmit(data);
    },
  });

  const handleUserFormChange = useCallback((data = {}) => {
    userFormik.setValues((state) => {
      return {
        ...state,
        ...data,
      };
    });
  }, []);
  //const handleUserFormChange = useCallback();

  return {
    // userBasicFormValue: userFormik.values.userBasicFormValue,
    // userCorporateFormValue: userFormik.values.userCorporateFormValue,
    // userQualificationFormValue: userFormik.values.userQualificationFormValue,
    memberState: userFormik.values,
    userFormError: userFormik.errors,
    handleUserFormChange: handleUserFormChange,
    handleChange: userFormik.handleChange,
    handleSubmit: userFormik.handleSubmit,
  };
};

export default useMemberControl;
