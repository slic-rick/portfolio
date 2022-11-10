import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from 'react';
import { useStateContext } from "./context/stateContext";


function App() {
  const {showAnimate,setShowAnimate} = useStateContext();

  useEffect(() => {
  
  console.log(` The Scroll Y is ::::: ${window.scrollY}`);
  

  

  if(window.scrollY > 700){
    setShowAnimate(false);
    console.log(`The SHOW ANIMATE in APP.js ${showAnimate}`);
  }else{
    setShowAnimate(true);
    console.log(`The SHOW ANIMATE in APP.js ${showAnimate}`);
  }


    
  }, [window.scrollY])
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
