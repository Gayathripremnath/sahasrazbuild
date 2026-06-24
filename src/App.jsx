import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;