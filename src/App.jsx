import "./App.css";
import { MoviesGrid } from "./pages/MoviesGrid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
      <div>
        <Router>
        <header>
          <Link to="/">Home</Link>

        </header>
        <main>
          <Routes>
            <Route exact path="/"/>{MoviesGrid}<Route/>
            <Route path="/movie/:movieId"/><Route/>
          </Routes>
        </main>
        </Router>
      </div>
    
  );
}

export default App;
