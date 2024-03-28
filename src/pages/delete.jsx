import { useState } from "react"
import axios from "axios";

export default function DeleteUser(){
const [id, setId] = useState("");

function handleSubmit(event) {
    event.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) =>{
        
        alert("Usuario deletado com sucesso!")
    }).catch((error)=>{
        alert("Problema na deleção do usuario" + error);
    })
}


    return(

        <div className="app">
            <h1>Delete User</h1>
            <form onSubmit={handleSubmit}>
            <input
            className="inputs"
            type="number"
            placeholder="digite o id do usuario a ser deletado"
            value={id}
            onChange={(event)=>{setId(event.target.value)}}
            />
            <button type="submit">Enviar</button>
            </form>
 
        </div>
    )

    
}