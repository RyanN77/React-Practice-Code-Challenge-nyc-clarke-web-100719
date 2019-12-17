import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount(){
    fetch(API).then(resp => resp.json()).then(data => this.setState({
      sushi: data, 
      sushiPlate: data.slice(0,4),
      index: 4,
      money: 100
    }))
  }
  
  state = {
    sushi: [],
    sushiPlate: [],
    index: 0,
    plates: []
  }
  // functions
  

  getNewSushi = (e) => {
    const newPlate = this.state.sushi.slice(this.state.index, this.state.index+4)
    this.setState({
      sushiPlate: newPlate,
      index: this.state.index+4,
    })

  }

  slicedSushi = () => {
    // console.log(this.state.sushi.slice(0,4))
  }

  clickedSushi = (e) => {
    console.log(e)
    console.log(this.state.plates)
    console.log(this.state.sushiPlate)
    this.state.sushiPlate.map(obj => {
      if (parseInt(obj.id) === parseInt(e.id) && this.state.money > obj.price){
        delete obj.img_url
        this.setState({
          sushiPlate: this.state.sushiPlate,
          money: this.state.money - obj.price,
          plates: this.state.plates.concat(obj.id)
        })
      }
    })
  }

  render() {
    this.slicedSushi()
    return (
      <div className="app">
        <SushiContainer getNewSushi={this.getNewSushi} clicked={this.clickedSushi} sushi={this.state.sushiPlate}/>
        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;