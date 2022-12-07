import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

import styles from "./style.module.css";

const Bullet = ({ backgroundColor, size }) => {
  return (
    <div
      className="CirecleBullet"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};

const CustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <ul className={styles["LegendList"]}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>
          <div className={styles["BulletLabel"]}>
            <Bullet backgroundColor={entry.payload.fill} size="10px" />
            <div className={styles["BulletLabelText"]}>{entry.value}</div>
          </div>
          <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div>
        </li>
      ))}
    </ul>
  );
};
const data = [
  { name: "An toàn thông tin", value: 400 },
  { name: "Công nghệ thông tin", value: 300 },
  { name: "An toàn mạng", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartDashboard = () => {
  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="horizontal"
          align="right"
          content={<CustomizedLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartDashboard;
