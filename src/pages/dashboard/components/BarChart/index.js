import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianAxis,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarChartTooltip from "../../../../components/BarChartTooltip";

const BarChartDashboard = () => {
  const memberListStatistic = useSelector(
    (state) => state.memberListReducer.memberListStatistic
  );

  console.log("Member list", memberListStatistic);
  const data = [
    {
      name: "Chức vụ",
      uv: Math.round((memberListStatistic.countChucVu / 98) * 100),
      color: "#85A5FF",
    },
    {
      name: "Cấp bậc",
      uv: Math.round((memberListStatistic.countCapBac / 98) * 100),
      color: "#ADC6FF",
    },
    {
      name: "Đơn vị",
      uv: Math.round((memberListStatistic.countDonVi / 98) * 100),
      color: "#D6E4FF",
    },
    {
      name: "Trình độ học vấn",
      uv: Math.round((memberListStatistic.countTrinhDoCMKT / 98) * 100),
      color: "#ADC6FF",
    },
    {
      name: "Trình độ ngoại ngữ",
      uv: Math.round((memberListStatistic.countTrinhDoNgoaiNgu / 98) * 100),
      color: "#85A5FF",
    },
    {
      name: "Số năm nhập ngũ",
      uv: Math.round((memberListStatistic.countSoNamNhapNgu / 98) * 100),
      color: "#ADC6FF",
    },
    {
      name: "Số tuổi",
      uv: Math.round((memberListStatistic.countSoTuoi / 98) * 100),
      color: "#D6E4FF",
    },
    {
      name: "Khu vực địa lý",
      uv: Math.round((memberListStatistic.countKhuVucDiaLy / 98) * 100),
      color: "#85A5FF",
    },
    {
      name: "Chứng chỉ đào tạo",
      uv: Math.round((memberListStatistic.countChungChiDaoTao / 98) * 100),
      color: "#ADC6FF",
    },
    {
      name: "Chuyên môn kỹ thuật",
      uv: Math.round((memberListStatistic.countTrinhDoCMKT / 98) * 100),
      color: "#85A5FF",
    },
    {
      name: "Loại hình đào tạo",
      uv: Math.round((memberListStatistic.countLoaiHinhDaoTao / 98) * 100),
      color: "#ADC6FF",
    },
    {
      name: "Cơ sở đào tạo",
      uv: Math.round((memberListStatistic.countCoSoDaoTao / 98) * 100),
      color: "#D6E4FF",
    },
  ];

  return (
    <ResponsiveContainer style={{ width: "100%" }} height={500}>
      <BarChart data={data} style={{ paddingTop: 0 }}>
        <XAxis
          dataKey="name"
          interval={0}
          tick={{ width: 80, fontWeight: 500 }}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        />
        <YAxis
          label={{
            value: "Tỉ lệ thống kê quân nhân (%)",
            position: "insideLeft",
            angle: -90,
          }}
        />
        <Tooltip content={<BarChartTooltip />} />
        <Bar
          dataKey="uv"
          fill="#85A5FF"
          radius={6}
          label={{
            position: "top",
            fill: "black",
            offset: 10,
          }}
          barSize={80}
        >
          {data.map((entry, index) => {
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
  );
};

export default BarChartDashboard;
