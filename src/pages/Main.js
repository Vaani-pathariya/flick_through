import "./main.css"
import logo from "../logo.jpeg"
import { Outlet } from "react-router-dom";
const Main=()=>{
    return(
        <div>
            <nav className="main-navbar">
                <img src={logo}></img>
                <hr></hr>
                <h4>Blogs</h4>
                <Outlet></Outlet>
            </nav>
        </div>
    )
}
export default Main;