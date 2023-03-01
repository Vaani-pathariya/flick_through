import { Route, Routes } from "react-router-dom";
import "./app.css"
import AboutUs from "./pages/AboutUs";
import Landing_page from "./pages/Landingpage";
import Main from "./pages/Main";
import Title from "./pages/Title";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}>
          <Route path="" element={<Landing_page/>}></Route>
          <Route path="about" element={<AboutUs/>}></Route>
          <Route path="review/title" element={<Title/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
