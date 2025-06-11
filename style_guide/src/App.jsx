import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleGuidePage from "./StyleGuidePage";
import TravelTypeTest from "./component/TravelTypeTest";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StyleGuidePage />} />
          <Route path="/travel-test" element={<TravelTypeTest />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;