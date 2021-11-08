import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form,Button} from "react-bootstrap";
import ReloadIcon from "../assets/reload.svg";


export default class FormCalc extends React.Component {
    state = {
        feed: [],
        antena01: "",
        antena02: "",
        resultado: "0",
    };
    
    calc = () => {
        const{ antena01, antena02 } = this.state;
        let result = ((3.56 * parseFloat(antena01))+ (3.56 * parseFloat(antena02)))
        this.setState({resultado: result})
        
    };
    reset  = async () =>{
        await this.setState({antena01: "0", antena02: "0", resultado: "0"})
        console.log(this.state.antena01, this.state.antena02)
    }
    
    handleChange = (e) => {
        // console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
        return (
            <div>
                <div className="formInputs">
                    <Form.Group controlId="antena01">
                        <Form.Label>Antena 01</Form.Label>
                        <Form.Control name="antena01" type="number"  value={this.state.antena01}  placeholder="m" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="antena02">
                        <Form.Label>Antena 02</Form.Label>
                        <Form.Control name="antena02" type="number" value={this.state.antena02}  placeholder="altura em metros" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button className="btn w-100 mb-2"  variant="primary"  type="submit" onClick={this.calc}>Calcular</Button>
                </div>
                <Form.Group controlId="resultado" className="text-center" >
                    <Form.Label>Resultado em KM:</Form.Label>
                    <div className="resultado py-2">
                        
                        <Form.Text >{this.state.resultado} km</Form.Text>
                    </div>
                    
                    <Button onClick={this.reset}className="mt-3">
                        <img alt="" width="30px" src={ReloadIcon}></img>
                    </Button>
                </Form.Group>
            </div>
        );
    }
}
