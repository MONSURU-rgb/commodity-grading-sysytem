import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { PureComponent } from "react";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

export const dataForTable = [
  { month: "Jan", level: "60" },
  { month: "Feb", level: "42" },
  { month: "March", level: "38" },
  { month: "Apr", level: "40" },
  { month: "May", level: "45" },
  { month: "Jun", level: "50" },
  { month: "Jul", level: "48" },
  { month: "Aug", level: "41" },
  { month: "Sep", level: "43" },
  { month: "Oct", level: "52" },
  { month: "Nov", level: "55" },
  { month: "Dec", level: "58" },
];

export const dataForTable1 = [
  { month: "Jan", level1: "28" },
  { month: "Feb", level1: "27" },
  { month: "March", level1: "39" },
  { month: "Apr", level1: "40" },
  { month: "May", level1: "70" },
  { month: "Jun", level1: "40" },
  { month: "Jul", level1: "80" },
  { month: "Aug", level1: "50" },
  { month: "Sep", level1: "90" },
  { month: "Oct", level1: "40" },
  { month: "Nov", level1: "25" },
  { month: "Dec", level1: "28" },
];

export const dataForTable2 = [
  { month: "Jan", level2: "20" },
  { month: "Feb", level2: "50" },
  { month: "March", level2: "35" },
  { month: "Apr", level2: "55" },
  { month: "May", level2: "52" },
  { month: "Jun", level2: "44" },
  { month: "Jul", level2: "56" },
  { month: "Aug", level2: "50" },
  { month: "Sep", level2: "54" },
  { month: "Oct", level2: "60" },
  { month: "Nov", level2: "54" },
  { month: "Dec", level2: "74" },
];

export const dataForTable3 = [
  { month: "Jan", level2: "20" },
  { month: "Feb", level2: "50" },
  { month: "March", level2: "48" },
  { month: "Apr", level2: "59" },
  { month: "May", level2: "63" },
  { month: "Jun", level2: "60" },
  { month: "Jul", level2: "80" },
  { month: "Aug", level2: "70" },
  { month: "Sep", level2: "86" },
  { month: "Oct", level2: "92" },
  { month: "Nov", level2: "88" },
  { month: "Dec", level2: "100" },
];

export function RechartGraph() {
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
          stroke="#195B3E"
          fill="#195B3E"
          fillOpacity={0.3}
        />
        <Area dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RechartGraph1() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={dataForTable1}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="level1"
          stroke="#0D3423"
          fill="#0D3423"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RechartGraph2() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={dataForTable2}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="level2"
          stroke="#7738DD"
          fill="#7738DD"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RechartGraph3() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={dataForTable3}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="level2"
          stroke="#E1891C"
          fill="#E1891C"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
