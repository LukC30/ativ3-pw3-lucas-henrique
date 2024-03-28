import { useState, useEffect } from "react";
import axios from 'axios'

export default function GetUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="app">
            {users.map((user) => (
                <div style={{backgroundColor: "gray", width: "10%"}}>
                    <h3>
                        id: {user.id}
                    </h3>
                    <p>
                        titulo: {user.title}
                    </p>
                </div>
            ))
            }

        </div>
    )
}