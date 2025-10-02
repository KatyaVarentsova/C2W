import type { FC } from "react";
import { Button, CardText } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/common")
    }

    return (
        <>
            <CardText>Все комментарии для анализа взяты с <a href="https://www.sravni.ru/bank/gazprombank/otzyvy/" target="_blank">sravni.ru</a> и <a href="https://www.banki.ru/services/responses/bank/gazprombank/?is_countable=on" target="_blank">banki.ru</a>.</CardText>
            <Button onClick={handleClick}>Провести анализ комментариев</Button>
        </>

    )
}