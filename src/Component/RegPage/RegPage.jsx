//ok
import { useNavigate } from "react-router-dom";

export default function RegPage({ setUser }) {
    const navigate = useNavigate();

    const regHandler = (e) => {
        e.preventDefault();
        setUser({ name: e.target[0].value })
        navigate('/')
    }

    return (
        <>
            <form className="form" onSubmit={regHandler}>
                <h1 className="two">Регистрация</h1>
                <input className="input" type='text' placeholder="Введите имя" />
                <button>Регистрация</button>
            </form>
        </>
    )
}