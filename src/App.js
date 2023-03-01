import { Route, Routes } from "react-router-dom";
import "./app.css"
import Landing_page from "./pages/Landingpage";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}>
          <Route path="" element={<Landing_page/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
