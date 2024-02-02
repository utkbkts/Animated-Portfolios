import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {

  
  return (
    <div style={{ display:"flex",flexDirection:"column",minHeight:"100vh",maxHeight:"100vh" }} >
      <Navbar />
      <div className="container" style={{flex:"grow",height:"100%"}}>
        <Routes>
          <Route path={"/"} element={<Hero />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
