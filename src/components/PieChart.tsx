import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['положительно', 'нейтрально', 'отрицательно'],
  datasets: [
    {
      label: 'Кол-во комментариев',
      data: [12, 19, 3],
      backgroundColor: [
        '#8DAAFF',
        '#FFDC89',
        '#FF8C8C',
      ],
      borderColor: [
        '#365FDB',
        '#D9AF4E',
        '#A63C3C',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} width={400} height={300}/>;
}
