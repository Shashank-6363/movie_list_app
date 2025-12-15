import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import EmptyMovie from "./components/EmptyMovie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/movies" element={<EmptyMovie />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
