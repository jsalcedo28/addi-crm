import logo from "./logo.svg";
import TopBar from "./components/layout/TopBar";
import SideBar from "./components/layout/SideBar";
import MetricsRow from "./components/common/MetricsRow";
import Footer from "./components/footer/Footer";
import CurrentOpportunities from "./components/opportunities/CurrentOpportunities";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <TopBar />
        <div className="main_container">
          <SideBar />
          <div className="container">
            <MetricsRow />
            <CurrentOpportunities />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
