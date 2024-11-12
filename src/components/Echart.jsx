import React from 'react';
import ReactECharts from 'echarts-for-react';

const EChartsComponent = () => {
  // Data for the Pie Chart
  const pieOptions = {
    title: {
      text: 'Pet Ownership',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Ownership',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 35, name: 'Cats' },
          { value: 40, name: 'Dogs' },
          { value: 25, name: 'Birds' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // Data for the Bar Chart
  const barOptions = {
    title: {
      text: 'Quarterly Earnings',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
      axisTick: { alignWithLabel: true },
      name: 'Quarter'
    },
    yAxis: {
      type: 'value',
      name: 'Earnings'
    },
    series: [
      {
        name: 'Earnings',
        type: 'bar',
        barWidth: '50%',
        data: [5000, 8000, 7000, 9000],
        itemStyle: {
          color: '#3398DB'
        }
      }
    ]
  };

  return (
    <>
    <h2 style={{textAlign: 'center'}}>Echart</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Pie Chart */}
      <div style={{ width: '45%' }}>
        <ReactECharts option={pieOptions} style={{ height: 400, width: '100%' }} />
      </div>

      {/* Bar Chart */}
      <div style={{ width: '45%' }}>
        <ReactECharts option={barOptions} style={{ height: 400, width: '100%' }} />
      </div>
    </div>
    </>
  );
};

export default EChartsComponent;
