import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function ChatScreen() {
    const intRef = useRef(null);
    const [finished, setFinished] = useState(false);
    const [userName, setUserName] = useState('');
    const [text, setText] = useState('');
    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetch('https://192.168.1.49:3005/api/chats')
    })




    return (
        <div>ChatScreen</div>
    )
}
