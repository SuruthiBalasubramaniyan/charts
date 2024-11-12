import React from 'react';
import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import { Bar } from '@visx/shape';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';

// Data for the Pie Chart
const pieData = [
  { label: 'Cats', value: 35 },
  { label: 'Dogs', value: 40 },
  { label: 'Birds', value: 25 }
];

// Data for the Bar Chart
const barData = [
  { quarter: 'Q1', earnings: 5000 },
  { quarter: 'Q2', earnings: 8000 },
  { quarter: 'Q3', earnings: 7000 },
  { quarter: 'Q4', earnings: 9000 }
];

// Define dimensions for the charts
const pieWidth = 400;
const pieHeight = 400;
const barWidth = 500;
const barHeight = 400;

// Define color scale for Pie Chart
const colors = ['#4caf50', '#2196f3', '#ff9800'];

// Define scales for Bar Chart
const xScale = scaleBand({
  domain: barData.map(d => d.quarter),
  range: [0, barWidth],
  padding: 0.4
});

const yScale = scaleLinear({
  domain: [0, Math.max(...barData.map(d => d.earnings))],
  range: [barHeight, 0]
});

const ViChart = () => {
  return (
    <>
    <h2 style={{textAlign: 'center'}}>ViChart</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Pie Chart */}
      <div style={{ width: pieWidth, height: pieHeight }}>
        <h3>Pet Ownership</h3>
        <svg width={pieWidth} height={pieHeight}>
          <Group top={pieHeight / 2} left={pieWidth / 2}>
            <Pie
              data={pieData}
              pieValue={(d) => d.value}
              outerRadius={pieHeight / 2 - 10}
              innerRadius={pieHeight / 4}
              cornerRadius={3}
              padAngle={0.02}
            >
              {(pie) =>
                pie.arcs.map((arc, index) => (
                  <g key={`arc-${arc.data.label}`}>
                    <path d={pie.path(arc)} fill={colors[index]} />
                    <text
                      transform={`translate(${pie.path.centroid(arc)})`}
                      dy=".35em"
                      fill="#fff"
                      fontSize={12}
                      textAnchor="middle"
                    >
                      {arc.data.label}
                    </text>
                  </g>
                ))
              }
            </Pie>
          </Group>
        </svg>
      </div>

      {/* Bar Chart */}
      <div style={{ width: barWidth, height: barHeight }}>
        <h3>Quarterly Earnings</h3>
        <svg width={barWidth + 50} height={barHeight + 50}>
          <Group left={40} top={20}>
            {barData.map((d, i) => (
              <Bar
                key={`bar-${d.quarter}`}
                x={xScale(d.quarter)}
                y={yScale(d.earnings)}
                width={xScale.bandwidth()}
                height={barHeight - yScale(d.earnings)}
                fill="#673ab7"
              />
            ))}
            <AxisBottom top={barHeight} scale={xScale} />
            <AxisLeft scale={yScale} />
          </Group>
        </svg>
      </div>
    </div>
    </>
  );
};

export default ViChart;
