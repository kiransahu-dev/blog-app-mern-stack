import { Route, Routes } from "react-router-dom";
import MainComp from "./components/MainComp";
import Navbar from "./components/Navbar";
import LoginComp from "./pages/LoginComp";
import RegisterComp from "./pages/RegisterComp";

function App() {
  return (
    <>
      <MainComp />
      <Routes>
        <Route path="/blog" element={<Navbar />} />
        <Route path="/" element={<LoginComp />} />
        <Route path="/register" element={<RegisterComp />} />
      </Routes>
    </>
  );
}

export default App;
