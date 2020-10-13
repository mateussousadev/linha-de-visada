import React from 'react';
import './App.css';
import HeaderLogo from "./assets/antenna.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormCalc from './Components/FormCalc';


function App() {
  return (
    <div>
      <section id="main" className="container-fluid">
        <div className="card card-main p-5 m-2">
          <div className="header mb-4 text-center">
            <img alt="Icone de uma antena" src={HeaderLogo}></img>
            <h2>Linha de Visada Online</h2>
          </div>
           {/* Aqui é o componente que tem os forms */}
          <FormCalc></FormCalc>
        </div>  
        <footer className="footer">
          <div className="pt-2">
            <h6 className="text-center"> &copy; Mateus Sousa - 2020</h6>
          </div>
        </footer>      
      </section>
      
      
    </div>
    
  );
}

export default App;
