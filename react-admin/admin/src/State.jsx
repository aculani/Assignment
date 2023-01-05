import { useState } from 'react';

const styles = {
    wrapper: {
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
};
export default function State() {
    const [toDo, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        const newList = [...toDo, input];
        setTodos(newList);
        setInput('');
    };

    const handleDelete = (index) => {
        let newArr = [];
        let i = 0;
        for (const el of toDo) {
            if (i !== index) {
                newArr[i] = toDo[i];
            }
            i++;
        }
        setTodos(newArr);

    }
    console.log(toDo);
    return (
        <>
            <div style={styles.wrapper}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {toDo.map((todo, index) => (
                        <li id={index} key={index} onClick={() => handleDelete(index)}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}