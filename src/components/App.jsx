import React from 'react';
// import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import Fullness from './Fullness';
import Happiness from './Happiness';
import Health from './Health';
import Discipline from './Discipline';
import Age from './Age';
import Weight from './Weight';
import Poop from './Poop';
import Status from './Status';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullness: 10,
      happiness: 10,
      health: 10,
      discipline: 0,
      age: 1,
      weight: 10,
      poop: 10,
      status: 'happy'
    }
  }

  componentDidMount() {
    this.fullnessUpdateTimer = setInterval(() => this.updateFullness(), 1000);
    this.poopUpdateTimer = setInterval(() => this.updatePoop(), 5000);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 1000);
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 1000);
    this.weightUpdateTimer = setInterval(() => this.updateWeight(), 1000);
    this.ageUpdateTimer = setInterval(() => this.updateAge(), 1);
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
    if (this.state.fullness <= 5 && this.state.happiness > 0) {
      this.setState({happiness: this.state.happiness - 1})
    }
    if (this.state.happiness < 5) {
      this.setState({status: 'sad'});
    } else {
      this.setState({status: 'happy'});
    }
  }

  updateHealth = () => {
    if (this.state.poop > 0 && this.state.health > 0) {
      this.setState({health: this.state.health - 1})
    }
    if (this.state.health == 0) {
      this.setState({status: 'dead'})
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

  handlePlay =() => {
    if (this.state.happiness < 10) {
      const newHappiness = this.state.happiness+1;
      this.setState({happiness: newHappiness})
    }
    if (this.state.happiness >= 5) {
      this.setState({status: 'happy'});
    }
  }

  handlePoop =() => {
    if (this.state.poop >0) {
      const newPoopiness = 0;
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
        <Happiness level={this.state.happiness} onPlay={this.handlePlay}/>
        <Health level={this.state.health} onMedication={this.handleMedication}/>
        <Poop level={this.state.poop} onClean={this.handlePoop} />
        <Age level={this.state.age} />
        <Weight level={this.state.weight} />
        <Status status={this.state.status}/>
      </div>
    );
  }
}

export default App;
