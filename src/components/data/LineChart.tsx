import { ApexOptions } from 'apexcharts';
import React from 'react';
import Chart from 'react-apexcharts';

interface LineChartProps {
  categories: (string | number)[] | undefined;
  series: { name: string; data: number[] }[] | undefined;
}

const LineChart = ({ categories, series }: LineChartProps): JSX.Element => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    colors: ['black'],
    fill: {
      colors: ['black'],
    },
    markers: {
      colors: 'black',
    },
    xaxis: {
      categories,
    },
  };

  return <Chart options={options} series={series} type="line" width="100%" height={320} />;
};

export default LineChart;
