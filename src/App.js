import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import Footer from "./PortfolioContainer/Footer/Footer";
// import ContactMe from "./PortfolioContainer/ContactMe/contactMe";
function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      {/* <ContactMe /> */}
      <Footer />
    </div>
  );
}

export default App;
