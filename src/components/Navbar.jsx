import { Outlet, Link, Router } from "react-router-dom"
import "./navbar.css";


export default function Navbar(){

    return(
        <div>
            <ul className="list">
                <li className="item">
                    <Link to="/">Create</Link>
                </li>
                <li className="item">
                    <Link to="/read">Read</Link>
                </li>
                <li className="item">
                    <Link to="/update">Update</Link>
                </li>
                <li className="item">
                    <Link to="/delete">Delete</Link>
                </li>
            </ul>
            <Outlet/>
        </div>


    )
}