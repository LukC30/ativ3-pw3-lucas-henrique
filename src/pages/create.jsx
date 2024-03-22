import axios from "axios";
import { useState } from "react";
import '../App.css'

export default function CreateUser() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setId] = useState("");

    const [json, setJson] = useState({
        "title": title,
        "body": body,
        "id": userId
    });

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", json) 
        .then((response)=>{
            console.log(`Usuario criado: ${response.data}`);
            alert("Usuario criado!")
        })
        .catch((error)=>{
            console.log(`erro na criação do usuario: ${error}`)
        })

    }


    return (
        <div className="App">
            <h1>Criar</h1>
            <div style={{ borderRadius: "10px", backgroundColor: "gray" }}>

                <form onSubmit={handleSubmit}>
                    <p><input
                        className="inputs"
                        type="text"
                        placeholder="Titulo????"
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                    /></p>
                
                    <p><input
                    className="inputs"
                        type="text"
                        placeholder="CORPOHAHAH"
                        value={body}
                        onChange={(event) => { setBody(event.target.value) }}
                    /></p>
                    <p><input
                    className="inputs"
                    type="number"
                    placeholder="digite seu id de usuario"
                    value={userId}
                    onChange={(event)=>{setId(event.target.value)}}
                    /></p>
                    <br/>
                    <button style={{fontSize:"larger"}} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}