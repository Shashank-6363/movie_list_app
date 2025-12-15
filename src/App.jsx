import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import EmptyMovie from "./components/EmptyMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/movies" element={<EmptyMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
