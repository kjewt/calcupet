import { useRef, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    email: string;
    name: string;
}

interface UsersResponse {
    users: User[];
}

export const API_test = () => {
    const userNameRef = useRef<HTMLDivElement>(null);
    const [userEmail, setUserEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    const getUserHandler = () => {
        if (userNameRef.current) {
            const userId = userNameRef.current.innerText;

            axios.get<UsersResponse>('https://my-json-server.typicode.com/kjewt/json-server/db')
                .then(function (response) {
                    const user = response.data.users.find(user => user.id.toString() === userId);
                    if (user) {
                        setUserEmail(user.email);
                        setUserName(user.name);
                    } else {
                        console.log("User not found");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return (
        <>
            <div ref={userNameRef}>2</div>
            <button onClick={getUserHandler} className="btn btn-secondary">유저 조회</button>
            <div>유저 이메일: {userEmail}</div>
            <div>유저 이름: {userName}</div>
        </>
    );
};
