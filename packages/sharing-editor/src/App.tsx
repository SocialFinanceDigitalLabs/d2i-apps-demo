import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import EditorPage from "./EditorPage";
import Gallery from "./GalleryPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Gallery />} />
          <Route path="editor" element={<EditorPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
