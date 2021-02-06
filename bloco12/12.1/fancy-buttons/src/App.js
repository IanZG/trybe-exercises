import React from 'react'
import './App.css';



class App extends React.Component {

  constructor() {
    super()
    this.click = this.click.bind(this);
    this.click = this.click2.bind(this);
    this.click = this.click3.bind(this);
    this.state = {
      contagem1: 0,
      contagem2: 0,
      contagem3: 0
    }
  }

  click2 = () => {
    console.log('vambora');
    this.setState((atual, _props) => {
      contagem2: atual.contagem2 + 1
    });
  }
  click = () => {
    console.log('ahiu');
  }
  click3 = () => {
    console.log('hen');
  }

  render() {
    return (
    <>
      <button onClick={this.click}>HEN</button>
      <button onClick={this.click}>AHIU</button>
      <button onClick={this.click2}>VAMBORA</button>
    </>
    )
  }
}
export default App;
