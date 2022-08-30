import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  const pagesize = 15;
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                category="general"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                category="business"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                category="entertainment"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                category="health"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                category="science"
                key="science"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                category="sports"
                key="sports"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                category="technology"
                key="technology"
                apikey={apikey}
                pagesize={pagesize}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
