import type { FC } from "react";
import { Button, CardHeader } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./TopicsPage.module.css"

export const TopicsPage: FC = () => {
  const topics = [
    "Акции и бонусные программы / Кэшбэк",
    "Банкоматы и терминалы",
    "Вклады и депозиты",
    "Дебетовые карты",
    "Интернет банкинг",
    "Кредитные карты",
    "Кредиты и займы",
    "Мобильное приложение",
    "Навязывание услуг",
    "Обслуживание в офисах",
    "Переводы и платежи",
    "Тарифы и комиссии",
    "Техническая поддержка",
  ];

  const navigate = useNavigate();

  const handleClick = (topic: string) => {
    console.log("Выбрана тема:", topic);
    navigate("/dashboard");
  };

  return (
    <div className={style.topicsPage}>
      <CardHeader as="h2" className={style.topicsPage__title}>
        Выберите тему
      </CardHeader>

      <div className={style.topicsPage__grid}>
        {topics.map((item) => (
          <Button
            key={item}
            onClick={() => handleClick(item)}
            variant="outline-primary"
            className={style.topicsPage__button}
          >
            {item}
          </Button>
        ))}
      </div>

      <Button
        className={style.topicsPage__backButton}
        onClick={() => navigate("/common")}
      >
        Вернуться назад
      </Button>
    </div>
  );
};