import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "01/2022",
    uv: 35,
    color: "#85A5FF",
  },
  {
    name: "02/2022",
    uv: 95,
    color: "#ADC6FF",
  },
  {
    name: "03/2022",
    uv: 40,
    color: "#D6E4FF",
  },
  {
    name: "04/2022",
    uv: 95,
    color: "#ADC6FF",
  },
  {
    name: "05/2022",
    uv: 65,
    color: "#85A5FF",
  },
  {
    name: "06/2022",
    uv: 95,
    color: "#ADC6FF",
  },
  {
    name: "07/2022",
    uv: 80,
    color: "#D6E4FF",
  },
  {
    name: "08/2022",
    uv: 55,
    color: "#85A5FF",
  },
  {
    name: "09/2022",
    uv: 65,
    color: "#ADC6FF",
  },
  {
    name: "10/2022",
    uv: 85,
    color: "#85A5FF",
  },
  {
    name: "11/2022",
    uv: 95,
    color: "#ADC6FF",
  },
  {
    name: "12/2022",
    uv: 80,
    color: "#D6E4FF",
  },
];

const BarChartDashboard = () => {
  return (
    <ResponsiveContainer style={{width: "100%"}} height={400} >
      <BarChart   data={data}>
        <XAxis
          dataKey="name"
          interval={0}
          minTickGap={20}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        />
        <YAxis hide />
        <Bar
          dataKey="uv"
          fill="#85A5FF"
          radius={8}
          label={{
            position: "insideBottom",
            angle: -60,
            fill: "black",
            offset: 25,
          }}
        >
          <LabelList dataKey="name" />
          {data.map((entry, index) => (
            <Cell fill={entry.color} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartDashboard;
