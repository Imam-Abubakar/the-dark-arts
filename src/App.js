import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default App;
