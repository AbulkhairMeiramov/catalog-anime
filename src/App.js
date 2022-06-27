import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { RegistrationPage } from "./pages/RegistrationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/registration" />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
