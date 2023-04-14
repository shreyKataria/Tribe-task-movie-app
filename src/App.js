import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./LinkPages/HomePage";
import Favourites from "./LinkPages/FavoritePage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;