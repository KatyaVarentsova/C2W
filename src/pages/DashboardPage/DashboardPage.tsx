import { type FC } from "react";
import style from "./DashboardPage.module.css"
import { PieChart } from "../../components/PieChart";
import { LineChart } from "../../components/LineChart";
import { useNavigate } from "react-router-dom";
import { Button, CardHeader, CardText, Form } from "react-bootstrap";


export const DashboardPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <CardHeader as="h2" className={style.title}>
        Акции и бонусные программы / Кэшбэк
      </CardHeader>

      {/* Вторая секция — LineChart, фильтр и описание */}
      <section className={style.section}>
        <div className={style.chartBox}>
          <LineChart />
        </div>

        <div className={style.infoBox}>
          <Form className={style.filterForm}>
            <Form.Group className={style.filterGroup}>
              <Form.Label>С:</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
            <Form.Group className={style.filterGroup}>
              <Form.Label>По:</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
            <Button variant="outline-primary" className={style.filterButton}>
              Применить
            </Button>
          </Form>

          <CardText>
            Этот график показывает зависимость оттенков от времени в течение выбранного периода.
          </CardText>
        </div>
      </section>

      {/* Первая секция — PieChart и описание */}
      <section className={style.section}>
        <div className={style.chartBox}>
          <PieChart />
        </div>
        <div className={style.infoBox}>
          <CardText>
            Эта круговая диаграмма показывает все оттенки по теме и их количество за всё время.
          </CardText>
        </div>
      </section>

      <Button
        className={style.backButton}
        onClick={() => navigate("/topics")}
      >
        Вернуться назад
      </Button>
    </div>
  );
};