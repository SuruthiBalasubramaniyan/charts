import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

const NCharts = () => {
  // Data for the Pie Chart
  const pieData = [
    { id: "Cats", label: "Cats", value: 35, color: "hsl(74, 70%, 50%)" },
    { id: "Dogs", label: "Dogs", value: 40, color: "hsl(203, 70%, 50%)" },
    { id: "Birds", label: "Birds", value: 25, color: "hsl(42, 70%, 50%)" },
  ];

  // Data for the Bar Chart
  const barData = [
    { quarter: "Q1", earnings: 5000 },
    { quarter: "Q2", earnings: 8000 },
    { quarter: "Q3", earnings: 7000 },
    { quarter: "Q4", earnings: 9000 },
  ];

  return (
    <>
    <h2 style={{textAlign: 'center'}}>Nchart</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Pie Chart */}
      <div style={{ height: 400, width: 400 }}>
        <h3>Pet Ownership</h3>
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={5}
          colors={{ datum: 'data.color' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
        />
      </div>

      {/* Bar Chart */}
      <div style={{ height: 400, width: 600 }}>
        <h3>Quarterly Earnings</h3>
        <ResponsiveBar
          data={barData}
          keys={["earnings"]}
          indexBy="quarter"
          margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: 'nivo' }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Quarter',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Earnings',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        />
      </div>
    </div>
    </>
  );
};

export default NCharts;
