import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Events, Contact, Feed } from "./Pages";
import Team from "./Pages/Team/Components/Team/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team></Team>} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
