import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss'
import { Header, MovieDetail, PageNotFound, Footer, Home } from './components'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            {/* Define a Route for the root path */}
            <Route path="/" element={<Home />} />
            {/* Define a Route for the /movie/:imdbID path */}
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            {/* Define a fallback route for unmatched paths */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
