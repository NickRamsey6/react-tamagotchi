import React from 'react';
// import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import Fullness from './Fullness';
import Happyness from './Happyness';
import Health from './Health';
import Discipline from './Discipline';
import Age from './Age';
import Weight from './Weight';
import Poop from './Poop';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullness: 1,
      happyness: 1,
      health: 10,
      discipline: 0,
      age: 0,
      weight: 10,
      poop: 10
    }
  }

  componentDidMount() {
    this.fullnessUpdateTimer = setInterval(() => this.updateFullness(), 1000);
    this.poopUpdateTimer = setInterval(() => this.updatePoop(), 5000);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 1000);
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 1000);
    this.weightUpdateTimer = setInterval(() => this.updateWeight(), 1000);
    this.ageUpdateTimer = setInterval(() => this.updateAge(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.fullnessUpdateTimer);
    clearInterval(this.poopUpdateTimer);
    clearInterval(this.healthUpdateTimer);
    clearInterval(this.weightUpdateTimer);
    clearInterval(this.ageUpdateTimer);
  }

  updateFullness = () => {
    const newFullness = this.state.fullness - 1;
    if (newFullness >= 0) {
      this.setState({fullness: newFullness});
    }
  }

  updatePoop = () => {
    const newPoop = this.state.poop + 1;
    this.setState({poop: newPoop});
  }

  updateHappiness = () => {
    if (this.state.fullness <= 5 && this.state.happyness > 0) {
      this.setState({happyness: this.state.happyness - 1})
    }
  }

  updateHealth = () => {
    if (this.state.poop > 0 && this.state.health > 0) {
      this.setState({health: this.state.health - 1})
    }
  }

  updateWeight = () => {
    if (this.state.fullness <= 3 && this.state.weight > 0) {
      this.setState({weight: this.state.weight - 1})
    }
  }

  updateAge = () => {
    this.setState({age: this.state.age + 1})
  }
  handleFeed =() => {
    if (this.state.fullness < 10) {
      const newFullness = this.state.fullness+1;
      this.setState({fullness: newFullness})
    } else {
      this.setState({weight: this.state.weight + 1})
    }
  }

  handleDiscipline =() => {
    if (this.state.discipline < 10) {
      const newDisciplne = this.state.discipline+1;
      this.setState({discipline: newDisciplne})
    }
  }

  handleHappiness =() => {
    if (this.state.happyness < 10) {
      const newHappiness = this.state.happyness+1;
      this.setState({happyness: newHappiness})
    }
  }

  handlePoop =() => {
    if (this.state.poop >0) {
      const newPoopiness = this.state.poop-1;
      this.setState({poop: newPoopiness})
    }
  }

  handleMedication = () => {
    if (this.state.health < 10) {
      this.setState({health: this.state.health + 1});
    }
  }

  render() {
    return(
      <div className="App">
        <Fullness level={this.state.fullness} onFeed={this.handleFeed} />
        <Discipline level={this.state.discipline} onScold={this.handleDiscipline}/>
        <Happyness level={this.state.happyness} onPlay={this.handleHappiness}/>
        <Health level={this.state.health} onMedication={this.handleMedication}/>
        <Poop level={this.state.poop} onClean={this.handlePoop} />
        <Age level={this.state.age} />
        <Weight level={this.state.weight} />
      </div>
    );
  }
}

export default App;
