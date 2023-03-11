import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarChartTooltip from "../../../../components/BarChartTooltip";
import { useStatistic } from "../hook/useStatistic";

const BarChartDashboard = ({ handleFilterModal }) => {
  // const [newData, setNewData] = useState([]);

  const memberListStatistic = useSelector(
    (state) => state.memberListReducer.memberListStatistic
  );

  const { filter } = memberListStatistic;

  const data = [
    {
      name: "Chức vụ",
      field: "ChucVu",
      detail: filter.ChucVu,
      uv: isNaN(
        memberListStatistic.countChucVu / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countChucVu / memberListStatistic.countTotal) *
          100
        ),
      color: "#85A5FF",
    },
    {
      name: "Cấp bậc",
      field: "CapBac",
      detail: filter.CapBac,
      uv: isNaN(
        memberListStatistic.countCapBac / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countCapBac / memberListStatistic.countTotal) *
          100
        ),
      color: "#ADC6FF",
    },
    {
      name: "Đơn vị",
      field: "DonVi",
      detail: filter.DonVi,
      uv: isNaN(memberListStatistic.countDonVi / memberListStatistic.countTotal)
        ? "0"
        : Math.round(
          (memberListStatistic.countDonVi / memberListStatistic.countTotal) *
          100
        ),
      color: "#D6E4FF",
    },
    {
      name: "Trình độ học vấn",
      field: "TrinhDoHocVan",
      detail: filter.TrinhDoCMKT,
      // uv: isNaN(
      //   memberListStatistic.countTrinhDoCMKT / memberListStatistic.countTotal
      // )
      //   ? "0"
      //   : Math.round(
      //       (memberListStatistic.countTrinhDoCMKT /
      //         memberListStatistic.countTotal) *
      //         100
      //     ),
      color: "#ADC6FF",
    },
    {
      name: "Trình độ ngoại ngữ",
      field: "TrinhDoNgoaiNgu",
      detail: filter.TrinhDoNgoaiNgu,
      uv: isNaN(
        memberListStatistic.countTrinhDoNgoaiNgu /
        memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countTrinhDoNgoaiNgu /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#85A5FF",
    },
    {
      name: "Số năm nhập ngũ",
      field: "SoNamNhapNgu",
      detail: filter.SoNamNhapNgu,
      uv: isNaN(
        memberListStatistic.countSoNamNhapNgu / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countSoNamNhapNgu /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#ADC6FF",
    },
    {
      name: "Số tuổi",
      field: "SoTuoi",
      detail: filter.SoTuoi,
      uv: isNaN(
        memberListStatistic.countSoTuoi / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countSoTuoi / memberListStatistic.countTotal) *
          100
        ),
      color: "#D6E4FF",
    },
    {
      name: "Khu vực địa lý",
      field: "KhuVucDiaLy",
      detail: filter.KhuVucDiaLy,
      uv: isNaN(
        memberListStatistic.countKhuVucDiaLy / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countKhuVucDiaLy /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#85A5FF",
    },
    {
      name: "Chứng chỉ đào tạo",
      field: "ChungChiDaoTao",
      detail: filter.ChungChiDaoTao,
      uv: isNaN(
        memberListStatistic.countChungChiDaoTao / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countChungChiDaoTao /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#ADC6FF",
    },
    {
      name: "Chuyên môn kỹ thuật",
      field: "TrinhDoCMKT",
      detail: filter.TrinhDoCMKT,
      uv: isNaN(
        memberListStatistic.countTrinhDoCMKT / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countTrinhDoCMKT /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#85A5FF",
    },
    {
      name: "Loại hình đào tạo",
      field: "LoaiHinhDaoTao",
      detail: filter.LoaiHinhDaoTao,
      uv: isNaN(
        memberListStatistic.countLoaiHinhDaoTao / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countLoaiHinhDaoTao /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#ADC6FF",
    },
    {
      name: "Cơ sở đào tạo",
      field: "CoSoDaoTao",
      detail: filter.CoSoDaoTao,
      uv: isNaN(
        memberListStatistic.countCoSoDaoTao / memberListStatistic.countTotal
      )
        ? "0"
        : Math.round(
          (memberListStatistic.countCoSoDaoTao /
            memberListStatistic.countTotal) *
          100
        ),
      color: "#D6E4FF",
    },
  ];

  // console.log('data cahrt', data);

  const { newData } = useStatistic(data);


  return (
    <>
      <ResponsiveContainer style={{ width: "100%" }} height={500}>
        <BarChart
          data={newData.length === 0 ? [{ label: '' }] : newData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            interval={0}
            domain={[0, 12]}
            tick={{ width: 80, fontWeight: 500 }}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          />
          <YAxis
            label={{
              value: "Tỉ lệ thống kê quân nhân (%)",
              position: "insideLeft",
              angle: -90,
            }}
            domain={[0, 100]}
          />
          <Tooltip content={<BarChartTooltip />} />
          <Bar
            dataKey="uv"
            fill="#85A5FF"
            radius={6}
            // label={{
            //   position: "top",
            //   fill: "black",
            //   offset: 6,
            // }}
            barSize={80}
            onClick={({ payload }) => {
              handleFilterModal(payload.field, payload.detail);
            }}
            style={{ cursor: "pointer", paddingTop: "30px" }}
          >
            {newData.map((entry, index) => {
              let color = "#D6E4FF";
              if (entry.uv > 30) {
                color = "#85A5FF";
              }
              if (entry.uv > 60) {
                color = "#ADC6FF";
              }
              return <Cell fill={color} key={`cell-${index}`} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartDashboard;
