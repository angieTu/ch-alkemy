import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Buscador from "./pages/Buscador/Buscador";
import Nav from "./components/Nav/Nav";

import { AuthContext } from "../src/contexts/AuthContext";
import Footer from "./components/Footer/Footer";

function App() {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <Router>
        {isLogged && <Nav />}
        <Routes>
          <Route exact path="/home" element={<Navigate to="/" />}></Route>
          <Route
            exact
            path="/"
            element={isLogged ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/recipe/:recipeID"
            element={isLogged ? <Detail /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/buscador"
            element={isLogged ? <Buscador /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={isLogged ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
