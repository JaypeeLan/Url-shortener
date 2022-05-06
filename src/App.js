import "./App.css";
import Navbar from "./navbar/Navbar";
import Intro from "./Intro/Intro";
import Main from "./main/Main";
import Statistics from "./statistics/Statistics";
import Footer from "./footer/Footer";

function App({ shortLink, value }) {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Main />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
