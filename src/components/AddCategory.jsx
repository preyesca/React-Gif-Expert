import { useState } from "react"

export const AddCategory = ({ onNewCategoria }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChage = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        // setCategoria(categories => [inputValue, ...categories]);
        onNewCategoria(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // onChange={(event) => onInputChage(event)}
                onChange={onInputChage}
            />
        </form>
    )
}
