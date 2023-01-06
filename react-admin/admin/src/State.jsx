import { useState } from 'react';
import './styles/bootstrap.min.css';
const PlusIcon = () => (
    <svg
        style={styles.PlusIcon}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z">
        </path>
    </svg>
);
const styles = {
    wrapper: {
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 580,
        margin: '0 auto',
    },
    input: {
        width: '100%',
        height: 45,
        paddingLeft: 30,
        paddingRight: 60,
        borderRadius: 50,
        boxShadow: '0 1px 6px 0 rgb(0 0 0 / 38 %)',
        border: 0,
    },
    PlusIcon: {
        color: 'darkcyan',
        fontSize: 20,
    },
    button: {
        position: 'absolute',
        right: 0,
        lineHeight: '20px',
        padding: '12.5px 20px',
        margin: 0,
        background: 'transparent',
        boxShadow: 'none',
        border: 0,
    },
    form: {
        position: 'relative',
        borderRadius: 50,
        width: '100%',
        marginBottom: 40,
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width: '100%'
    },
    li: {
        borderBottom: '1px solid #eaeaea',
        padding: '17px 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    check: {
        marginRight: 15,
    }

};
export default function State() {
    const [todos, setTodos] = useState([
        { value: 'egg', checked: false, editing: false },
        { value: 'meat', checked: false, editing: false },
        { value: 'pc', checked: false, editing: false }
    ]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        const newList = [...todos, { value: input, checked: false, editing: false }];
        setTodos(newList);
        setInput('');
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((k, i) => i !== index));
    };
    const handleCheck = (index) => {
        const newList = todos.map((todo, i) => {
            if (i === index) {
                const newTodo = { ...todo };
                newTodo.checked = !newTodo.checked;
                return newTodo;
            }
            return todo;
        });
        setTodos(newList);
    }


    const doubleClick = (index) => {
        const newList = todos.map((todo, i) => {
            if (i === index) {
                const newTodo = { ...todo };
                newTodo.editing = !newTodo.editing;
                return newTodo;
            }
            return todo;
        });
        setTodos(newList);
    }
    const [editing, setEditing] = useState(true);



    return (
        <>
            <div style={styles.wrapper}>
                <h1>todos</h1>
                <form style={styles.form} onSubmit={(e) => {
                    e.preventDefault();
                    addTodo();
                }}>
                    <input
                        style={styles.input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add todo..." />
                    <button type='submit' style={styles.button}><PlusIcon /></button>
                </form>
                <ul style={styles.ul}>
                    {todos.map((todo, index) => (
                        <li style={styles.li} key={`list-item-${index}`}>
                            {todo.editing ?
                                <>
                                    <input defaultValue={todo.value}  ></input>
                                </> :
                                <>
                                    <div>
                                        <input
                                            type='checkbox'
                                            style={styles.check}
                                            checked={todo.checked}
                                            onChange={() => {
                                                handleCheck(index);
                                            }}
                                        >
                                        </input>
                                        <span
                                            onDoubleClick={() => { doubleClick(index) }}
                                            style={{ textDecoration: todo.checked ? 'line-through' : '' }
                                            }>
                                            {todo.value}
                                        </span>
                                    </div>
                                    <button onClick={() => { removeTodo(index); }}></button>
                                </>}

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}