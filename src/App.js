import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chat from "./component/Chat/Chat";
import Join from "./component/Join/Join";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
