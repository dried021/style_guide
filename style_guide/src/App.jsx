import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleGuidePage from "./StyleGuidePage";
import TravelTypeTest from "./component/TravelTypeTest";
import MainPage from "./MainPage";
import ProfilePage from "./components/ProfilePage";
import MapPage from "./components/MapPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/style-guide" element={<StyleGuidePage/>}/>
          <Route path="/travel-test" element={<TravelTypeTest />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/map" element={<MapPage/>}/>
        </Routes>
    </div>
  );
}

export default App;