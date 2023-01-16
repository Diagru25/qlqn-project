import { Button, Modal } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useActions from "../../redux/useActions";
import MemberFilter from "./components/MemberFilter";

const initData = {
  DonVi: "",
  ChucVu: "",
  CapBac: "",
  TrinhDoNgoaiNgu: "",
  KhuVucDiaLy: "",
  ChungChiDaoTao: "",
  TrinhDoCMKT: "",
  LoaiHinhDaoTao: "",
  CoSoDaoTao: "",
  SoNamNhapNgu: "",
  SoTuoi: "",
  HocVi: "",
};

const FilterModal = ({ filterData }) => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (filterData) {
      statisticFormik.setValues({
        DonVi: filterData.DonVi,
        ChucVu: filterData.ChucVu,
        CapBac: filterData.CapBac,
        TrinhDoNgoaiNgu: filterData.TrinhDoNgoaiNgu,
        KhuVucDiaLy: filterData.KhuVucDiaLy,
        ChungChiDaoTao: filterData.ChungChiDaoTao,
        TrinhDoCMKT: filterData.TrinhDoCMKT,
        LoaiHinhDaoTao: filterData.LoaiHinhDaoTao,
        CoSoDaoTao: filterData.CoSoDaoTao,
        SoNamNhapNgu: filterData.SoNamNhapNgu,
        SoTuoi: filterData.SoTuoi,
        HocVi: filterData.HocVi,
      });
    }
  }, [filterData]);

  const statisticFormik = useFormik({
    initialValues: initData,
    onSubmit: (data) => {
      if (data) {
        const {
          DonVi,
          ChucVu,
          CapBac,
          TrinhDoNgoaiNgu,
          KhuVucDiaLy,
          ChungChiDaoTao,
          TrinhDoCMKT,
          LoaiHinhDaoTao,
          CoSoDaoTao,
          SoNamNhapNgu,
          SoTuoi,
          HocVi,
        } = data;

        dispatch(
          memberActions.actions.getListStatistic(
            DonVi,
            ChucVu,
            CapBac,
            TrinhDoNgoaiNgu,
            KhuVucDiaLy,
            ChungChiDaoTao,
            TrinhDoCMKT,
            LoaiHinhDaoTao,
            CoSoDaoTao,
            SoNamNhapNgu,
            SoTuoi,
            HocVi
          )
        );
      }
      setIsModalOpen(false);
    },
  });

  const handleUpdateStatistic = (value = {}) => {
    statisticFormik.setValues((state) => {
      return {
        ...state,
        ...value,
      };
    });
  };

  // const handleClearFilter = () => {
  //   dispatch(memberActions.actions.setDefaultFilter());
  //   console.log("Member filter clear", memberList.filter);
  // };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <FilterOutlined /> Thống kê
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        bodyStyle={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
        footer={false}
      >
        <MemberFilter
          statisticFormik={statisticFormik}
          handleUpdateStatistic={handleUpdateStatistic}
          // handleClearFilter={handleClearFilter}
        />
      </Modal>
    </>
  );
};

export default FilterModal;
