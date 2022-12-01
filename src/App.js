
import './App.css';
import Intro from './intro';
import Collaboration from './collaboration';
import CurrentCompany from './currentcompany';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Collaboration/>
      <CurrentCompany/>
      <Footer/>
    </div>
  );
}

export default App;
