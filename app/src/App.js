import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages";
import './index.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
