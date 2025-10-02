import { useState, type FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, CardHeader, CardText, Form, Alert } from "react-bootstrap";
import style from "./DashboardPage.module.css";
import { LineChart } from "../../components/LineChart";
import { PieChart } from "../../components/PieChart";

interface ISentimentStatusState {
  year: number;
  month: string;
  monthNumber: number;
  negative: number;
  neutral: number;
  positive: number;
}

interface ISentimentTotal {
  negative: number;
  neutral: number;
  positive: number;
}

export const DashboardPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const topic = location.state?.topic || "Тема не выбрана";

  // 🔹 Основные данные
  const [sentimentStatusState] = useState<ISentimentStatusState[]>([
    { year: 2024, month: "Январь", monthNumber: 1, negative: 34, neutral: 4, positive: 8 },
    { year: 2024, month: "Февраль", monthNumber: 2, negative: 33, neutral: 3, positive: 7 },
    { year: 2024, month: "Март", monthNumber: 3, negative: 49, neutral: 4, positive: 8 },
    { year: 2024, month: "Апрель", monthNumber: 4, negative: 52, neutral: 6, positive: 9 },
    { year: 2024, month: "Май", monthNumber: 5, negative: 72, neutral: 2, positive: 8 },
    { year: 2024, month: "Июнь", monthNumber: 6, negative: 93, neutral: 4, positive: 7 },
    { year: 2024, month: "Июль", monthNumber: 7, negative: 104, neutral: 1, positive: 5 },
    { year: 2024, month: "Август", monthNumber: 8, negative: 120, neutral: 1, positive: 8 },
    { year: 2024, month: "Сентябрь", monthNumber: 9, negative: 131, neutral: 5, positive: 0 },
    { year: 2024, month: "Октябрь", monthNumber: 10, negative: 139, neutral: 3, positive: 3 },
    { year: 2024, month: "Ноябрь", monthNumber: 11, negative: 158, neutral: 4, positive: 7 },
    { year: 2024, month: "Декабрь", monthNumber: 12, negative: 111, neutral: 3, positive: 2 },
    { year: 2025, month: "Январь", monthNumber: 1, negative: 63, neutral: 1, positive: 2 },
    { year: 2025, month: "Февраль", monthNumber: 2, negative: 58, neutral: 0, positive: 5 },
    { year: 2025, month: "Март", monthNumber: 3, negative: 47, neutral: 1, positive: 0 },
    { year: 2025, month: "Апрель", monthNumber: 4, negative: 24, neutral: 0, positive: 2 },
    { year: 2025, month: "Май", monthNumber: 5, negative: 22, neutral: 0, positive: 7 },
  ]);

  const [sentimentTotalState] = useState<ISentimentTotal>({
    negative: 1310,
    neutral: 42,
    positive: 88,
  });

  // 🔹 Состояние фильтра
  const [filter, setFilter] = useState({ from: "", to: "" });
  const [filteredData, setFilteredData] = useState<ISentimentStatusState[]>(sentimentStatusState);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Обработчик фильтрации
  function handleFilter(e: React.FormEvent) {
    e.preventDefault();

    if (!filter.from || !filter.to) {
      setError("Пожалуйста, выберите обе даты.");
      return;
    }

    const fromDate = new Date(filter.from);
    const toDate = new Date(filter.to);

    if (fromDate > toDate) {
      setError("Дата начала не может быть позже даты окончания.");
      return;
    }

    const newData = sentimentStatusState.filter((item) => {
      const itemDate = new Date(item.year, item.monthNumber - 1);
      return itemDate >= fromDate && itemDate <= toDate;
    });

    if (newData.length === 0) {
      setError("Данные за выбранный период не найдены.");
      setFilteredData([]);
    } else {
      setError(null);
      setFilteredData(newData);
    }
  }

  return (
    <div className={style.container}>
      <CardHeader as="h2" className={style.title}>
        {topic}
      </CardHeader>

      {/* ===== LineChart + фильтр ===== */}
      <section className={style.section}>
        <div className={style.chartBox}>
          {error ? (
            <Alert variant="danger" className={style.alert}>
              {error}
            </Alert>
          ) : (
            <LineChart sentimentStatus={filteredData} />
          )}
        </div>

        <div className={style.infoBox}>
          <Form className={style.filterForm} onSubmit={handleFilter}>
            <Form.Group className={style.filterGroup}>
              <Form.Label>С:</Form.Label>
              <Form.Control
                type="month"
                value={filter.from}
                onChange={(e) => setFilter({ ...filter, from: e.target.value })}
              />
            </Form.Group>

            <Form.Group className={style.filterGroup}>
              <Form.Label>По:</Form.Label>
              <Form.Control
                type="month"
                value={filter.to}
                onChange={(e) => setFilter({ ...filter, to: e.target.value })}
              />
            </Form.Group>

            <Button type="submit" variant="outline-primary" className={style.filterButton}>
              Применить
            </Button>
          </Form>

          <CardText>
            Этот график показывает зависимость тональностей отзывов от времени за выбранный период.
          </CardText>
        </div>
      </section>

      {/* ===== PieChart ===== */}
      <section className={style.section}>
        <div className={`${style.chartBox} ${style.chartBox__pieChart}`}>
          <PieChart sentimentTotal={sentimentTotalState} />
        </div>
        <div className={style.infoBox}>
          <CardText>
            Эта круговая диаграмма показывает соотношение тональностей по теме за всё время.
          </CardText>
        </div>
      </section>

      <Button className={style.backButton} onClick={() => navigate("/topics")}>
        Вернуться назад
      </Button>
    </div>
  );
};
