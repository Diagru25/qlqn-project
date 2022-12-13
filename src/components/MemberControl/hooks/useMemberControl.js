import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import * as Yup from "yup";

// const useMemberControl = ({
//     onSubmit
//     initData
// }) => {

//        tao formik
//        onsubmit cua formik = onSubmit
//     useEffect(() => {
//         set value formik
//     }, [initData])

//     handleChange = (obj={name: "son"}) => {//set laij vaule cho fomik}

// return {
//formik.values,
//formik error,
//formik.submit
// handleCHange
// }
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

const useMemberControl = (onSubmit, initialMember) => {
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
        user_id: initialMember.user_id,
      });
    }
  }, [initialMember]);

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
