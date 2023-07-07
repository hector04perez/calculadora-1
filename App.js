import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="calculator">
        <h1>Calculadora</h1>
        <Row>
          <Col>
            <input
              type="text"
              value={displayValue}
              readOnly
              className="form-control"
            />
          </Col>
        </Row>
        <Row>
        <Col>
          <Button onClick={handleClear}>Borrar</Button>
          
        </Col>
      </Row>
        <Row>
        <Col>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
          <Button onClick={() => handleButtonClick('2')}>2</Button>
          <Button onClick={() => handleButtonClick('3')}>3</Button>
          <Button onClick={() => handleButtonClick('4')}>4</Button>
          <Button onClick={() => handleButtonClick('5')}>5</Button>
          <Button onClick={() => handleButtonClick('6')}>6</Button>
          <Button onClick={() => handleButtonClick('7')}>7</Button>
          <Button onClick={() => handleButtonClick('8')}>8</Button>
          <Button onClick={() => handleButtonClick('9')}>9</Button>
          <Button onClick={() => handleButtonClick('0')}>0</Button>
          
        </Col>
      </Row>
      <Row>
        <Col>
          
          <Button onClick={() => handleButtonClick('*')}>*</Button>
          <Button onClick={() => handleButtonClick('/')}>/</Button>
          <Button onClick={() => handleButtonClick('-')}>-</Button>
          <Button onClick={() => handleButtonClick('+')}>+</Button>
        </Col>
      </Row>
      <Row>
        <Col>
        <Button onClick={handleCalculate}>=</Button>
        </Col>
      </Row>

      </div>
    </Container>
  );
}

export default App;
