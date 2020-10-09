import React from 'react';
import './App.css';
import HeaderLogo from "./assets/antenna.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <section id="main" className="container-fluid">
        <div className="card card-main p-5 m-2">
          <div className="header mb-4 text-center">
            <img src={HeaderLogo}></img>
            <h2>Linha de Visada Online</h2>
          </div>
          <form className="formInputs">
            <div className="form-group">
              <label for="exampleFormControlInput1">Antena01</label>
              <input type="number" className="form-control" id="antena01" placeholder="altura em metros"></input>
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Antena02</label>
              <input type="number" className="form-control" id="antena02" placeholder="altura em metros"></input>
            </div>
            <button type="submit" className="btn w-100 mb-2">Calcular</button>
          </form>
          <h6 className="card-description mt-2">Resultado</h6>

          <div className=" resultado text-center">
            <h4 className="p-4">23km</h4>
          </div>
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
