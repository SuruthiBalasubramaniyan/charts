import React from 'react';
import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const CombinedChart = () => {
  const pieData = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 25 },
  ];

  const barData = [
    { quarter: 1, earnings: 5000 },
    { quarter: 2, earnings: 8000 },
    { quarter: 3, earnings: 7000 },
    { quarter: 4, earnings: 9000 },
  ];

  return (
    <>
     <h2 style={{textAlign: 'center'}}>Vchart</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
      {/* Pie Chart */}
      <div style={{ width: '40%' }}>
        <h3>Pet Ownership</h3>
        <VictoryPie
          data={pieData}
          colorScale={["#4caf50", "#2196f3", "#ff9800"]}
          innerRadius={50}
          labels={({ datum }) => `${datum.x}: ${datum.y}%`}
          style={{
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>

      {/* Bar Chart */}
      <div style={{ width: '50%' }}>
        <h3>Quarterly Earnings</h3>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Q1", "Q2", "Q3", "Q4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `$${x / 1000}k`}
          />
          <VictoryBar
            data={barData}
            x="quarter"
            y="earnings"
            style={{ data: { fill: "#673ab7" } }}
            barWidth={20}
          />
        </VictoryChart>
      </div>
    </div>
    </>
  );
};

export default CombinedChart;
