import { Button, Modal } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useState } from "react";
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
  SoNamNhapNgu: 25,
  SoTuoi: 30,
};

const FilterModal = () => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const statisticFormik = useFormik({
    initialValues: initData,
    onSubmit: (values = {}) => {
      console.log(values);
      if (values) {
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
        } = values;

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
            SoTuoi
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
