import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Оттенки комментариев от даты',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Положительно',
      data: [2, 4, 5, 3, 2, 5, 5],
      borderColor: '#8DAAFF',
      backgroundColor: '#8DAAFF',
    },
    {
      label: 'Нейтрально',
      data: [2, 4, 5, 3, 6, 2, 6],
      borderColor: '#FFDC89',
      backgroundColor: '#FFDC89',
    },
    {
      label: 'Отрицательно',
      data: [4, 3, 2, 6, 3, 6, 2],
      borderColor: '#FF8C8C',
      backgroundColor: '#FF8C8C',
    }
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
