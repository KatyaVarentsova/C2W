import type { FC } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/common")
    }

    return (
        <>
            <Button onClick={handleClick}>Провести анализ комментариев</Button>
        </>

    )
}