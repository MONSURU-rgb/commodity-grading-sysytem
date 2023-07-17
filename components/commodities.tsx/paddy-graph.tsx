import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

const dataForTable = [
  { month: "Jan", level: "40", level1: "30", level2: "20", level3: "10" },
  { month: "Feb", level: "43", level1: "35", level2: "27", level3: "12" },
  { month: "March", level: "38", level1: "33", level2: "24", level3: "10" },
  { month: "Apr", level: "45", level1: "37", level2: "30", level3: "9" },
  { month: "May", level: "46", level1: "41", level2: "35", level3: "13" },
  { month: "Jun", level: "51", level1: "42", level2: "33", level3: "16" },
  { month: "Jul", level: "48", level1: "38", level2: "30", level3: "12" },
  { month: "Aug", level: "41", level1: "36", level2: "30", level3: "19" },
  { month: "Sep", level: "43", level1: "37", level2: "31", level3: "15" },
  { month: "Oct", level: "54", level1: "43", level2: "37", level3: "24" },
  { month: "Nov", level: "52", level1: "40", level2: "35", level3: "20" },
  { month: "Dec", level: "62", level1: "47", level2: "42", level3: "28" },
];

function PaddyGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={dataForTable}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="level"
          stroke="#3851DD"
          fill="##3851DD"
          fillOpacity={0.1}
        />
        <Area
          dataKey="level1"
          stroke="#195B3E"
          fill="#195B3E"
          fillOpacity={0.1}
          type="monotone"
        />

        <Area
          dataKey="level2"
          stroke="#AB3FD9"
          fill="#AB3FD9"
          fillOpacity={0.1}
          type="monotone"
        />

        <Area
          dataKey="level3"
          stroke="#FF6A00"
          fill="#FF6A00"
          fillOpacity={0.3}
          type="monotone"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default PaddyGraph;
