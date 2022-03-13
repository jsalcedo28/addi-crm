import TopBar from "./components/layout/TopBar";
import SideBar from "./components/layout/SideBar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router";
import { Home, Opportunities, PageNotFound } from "./routes/pages";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <TopBar />
        <div className="main_container">
          <SideBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
