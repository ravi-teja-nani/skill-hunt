import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip,Label } from 'recharts';

const data = [
  { name: 'Matching', value: 400 },
  { name: 'Matching', value: 100 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PercentagePieChart extends PureComponent {

  render() {
    return (
        <PieChart height={260} width={500}>
        <Pie startAngle={180}
             endAngle={0}
             innerRadius="55%"
             data={data}
             dataKey="value"
             labelLine={false}
             blendStroke
             isAnimationActive={false}
             cy={"70%"}>
          <Cell fill="#0088FE" />
          <Cell fill="#e5eaef" />
          <Label
              value="89%"
              position="centerBottom" //
              offset={-20}
              className="gauge-label"
              fontSize="30px"
              fontWeight="bold"
            />
        </Pie>
        <  Tooltip/>
        </PieChart>
    );
  }
}
