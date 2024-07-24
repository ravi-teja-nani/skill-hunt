import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "React.js",
    required: 5,
    actual: 3,
  },
  {
    name: "Node.js",
    required: 4,
    actual: 5,
  },
  {
    name: "React.js",
    required: 5,
    actual: 3,
  },
  {
    name: "Node.js",
    required: 4,
    actual: 5,
  },
  {
    name: "React.js",
    required: 5,
    actual: 3,
  },
  {
    name: "Node.js",
    required: 4,
    actual: 5,
  },
];

export default function CompareSkill() {
  return (
    <ResponsiveContainer width="95%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="required" fill="#8884d8" background={{ fill: "#eee" }} />
        <Bar dataKey="actual" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
