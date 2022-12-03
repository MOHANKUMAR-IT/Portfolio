
import './App.css';
import Intro from './intro';
import Collaboration from './collaboration';
import CurrentCompany from './currentcompany';
import Footer from './footer';
import Technology from './technology'
import Codebase from './codebase'


function App() {
  return (
    <>
      <div className="container App">
        <Intro/>

        <Technology/>   

        <Collaboration/>
        <hr></hr>
        <CurrentCompany/>
        <hr></hr>
        
        <Codebase/>
      </div>
      <Footer/>

  </>
    
  );
}

export default App;
