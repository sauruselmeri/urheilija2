import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilijatieto from "./components/LisaaUrheilijatieto";
import MuokkaaUrheilijatieto from "./components/MuokkaaUrheilijatieto";
import Urheilijatiedot from "./components/Urheilijatiedot";
import Urheilijatieto from "./components/Urheilijatieto";
import Ylatunniste from "./components/Ylatunniste";
import GlobalState from "./context/GlobalState";

//import Posts from "./components/Posts";

function App() {
  return (
    <GlobalState>
      {" "}
      <Router>
        {" "}
        <div className="App">
          {" "}
          <Ylatunniste turvataso="keskisuuri" />{" "}
          <div className="container">
            {" "}
            <Routes>
              {" "}
              <Route path="/" element={<Urheilijatiedot />} />{" "}
              <Route
                path="/urheilijatieto/lisaa"
                element={<LisaaUrheilijatieto />}
              />{" "}
              <Route
                path="/urheilijatieto/muokkaa/:id"
                element={<MuokkaaUrheilijatieto />}
              />{" "}
              <Route path="/tietoa" element={<Tietoa />} />{" "}
            </Routes>{" "}
          </div>{" "}
        </div>{" "}
      </Router>{" "}
    </GlobalState>
  );
}

export default App;
