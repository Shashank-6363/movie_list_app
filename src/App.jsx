import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import EmptyMovie from "./components/EmptyMovie";
import MovieList from "./components/MovieList";
import CreateMoviePage from "./components/CreateMoviePage";
import MovieEditPage from "./components/MovieEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/movies" element={<EmptyMovie />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/create-movie" element={<CreateMoviePage />} />

        {/* ✅ Edit Movie Page */}
        <Route path="/edit-movie" element={<MovieEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
