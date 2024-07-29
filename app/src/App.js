import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CriarConta, Login, EsqueciSenha } from "./pages";
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/criar-conta" element={<CriarConta />} />
        <Route path="/login/esqueci-minha-senha" element={<EsqueciSenha />} />
        <Route path="/login/nova-senha" element={<>to do</>} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
