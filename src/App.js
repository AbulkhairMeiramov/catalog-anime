import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/home/:id" element={<MoviePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/quiz" element={<QuizPage/>} />
        
        

    
      </Routes>
    </div>
  );
}

export default App;
