import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleGuidePage from "./StyleGuidePage";
import TravelTypeTest from "./component/TravelTypeTest";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/style-guide" element={<StyleGuidePage/>}/>
          <Route path="/travel-test" element={<TravelTypeTest />} />
        </Routes>
    </div>
  );
}

export default App;