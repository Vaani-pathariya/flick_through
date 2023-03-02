import "./main.css"
import logo from "../logo.jpeg"
import { Outlet } from "react-router-dom";
const Main=()=>{
    return(
        <div>
            <nav className="main-navbar">
                <img src={logo}></img>
                <hr></hr>
                <h3>Blogs</h3>
                <h3>Authors</h3>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Main;