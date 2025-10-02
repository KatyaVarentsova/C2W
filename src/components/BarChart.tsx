import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function BarChart() {
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Отзывы от месяца',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: '1 звезда',
        data: [10, 8, 3, 5, 6, 2, 6],
        backgroundColor: '#EE5555',
      },
      {
        label: '2 звезды',
        data: [5, 3, 6, 1, 4, 6, 2],
        backgroundColor: '#EB8E4B',
      },
      {
        label: '3 звезды',
        data: [3, 5, 6, 2, 1, 4, 2],
        backgroundColor: '#EEC159',
      },
      {
        label: '4 звезды',
        data: [1, 2, 1, 2, 1, 3, 2],
        backgroundColor: '#4FBFEF',
      },
      {
        label: '5 звёзд',
        data: [4, 2, 6, 5, 2, 4, 2],
        backgroundColor: '#4068E4',
      }
    ],
  };
  return <Bar options={options} data={data} width={400} height={300} />;
}
