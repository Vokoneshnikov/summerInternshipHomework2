import "./styles.css";

import { useState } from "react";

export default function App() {
    const [name, setName] = useState("");

    const handleInputChange = (nm) => {
        setName(nm.target.value);
        console.log(`Имя изменено на ${nm.target.value}`);
    };
    const handleReset = () => {
        setName("");
        console.log("имя удалено");
    };
    return (
        <div className="App">
            <h1>Ваше имя: {name}</h1>
            <input
                type="text"
                placeholder="Введите ваше имя"
                onChange={handleInputChange}
                value={name}
            />
            <button onClick={handleReset}>Сбросить</button>
        </div>
    );
}
