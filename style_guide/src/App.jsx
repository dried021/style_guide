import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleGuidePage from "./StyleGuidePage";
import TravelTypeTest from "./minjeong/TravelTypeTest";
import TestPage from "./minjeong/TestPage";

import MainPage from "./MainPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/style-guide" element={<StyleGuidePage/>}/>
          <Route path="/travel-test" element={<TravelTypeTest />} />
          <Route path="/test-page" element={<TestPage/>}/>
        </Routes>
    </div>
  );
}

export default App;