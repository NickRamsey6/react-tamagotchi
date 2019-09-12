import React from 'react';
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
      poop: 0,
      status: 'happy'
    }
  }

  componentDidMount() {
    this.fullnessUpdateTimer = setInterval(() => this.updateFullness(), 5000);
    this.poopUpdateTimer = setInterval(() => this.updatePoop(), 5000);
    this.happinessUpdateTimer = setInterval(() => this.updateHappiness(), 5000);
    this.healthUpdateTimer = setInterval(() => this.updateHealth(), 5000);
    this.weightUpdateTimer = setInterval(() => this.updateWeight(), 5000);
    this.ageUpdateTimer = setInterval(() => this.updateAge(), 5000);
    this.statusUpdateTimer = setInterval(() => this.updateStatus(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.fullnessUpdateTimer);
    clearInterval(this.poopUpdateTimer);
    clearInterval(this.healthUpdateTimer);
    clearInterval(this.weightUpdateTimer);
    clearInterval(this.ageUpdateTimer);
    clearInterval(this.statusUpdateTimer);
  }

  updateFullness = () => {
    const newFullness = this.state.fullness - 1;
    if (this.state.health !== 0 && newFullness >= 0) {
      this.setState({fullness: newFullness});
    }
  }

  updatePoop = () => {
    // if (this.state.health !== 0){
      if (this.state.fullness >=4) {
        const newPoop = this.state.poop + 1;
        this.setState({poop: newPoop});
      }
    // }
  }

  updateHappiness = () => {
    if (this.state.health !== 0 && this.state.fullness <= 5 && this.state.happiness > 0) {
      this.setState({happiness: this.state.happiness - 1});
    }
  }

  updateHealth = () => {
    if (this.state.poop > 0 && this.state.health > 0) {
      this.setState({health: this.state.health - 1});
    }

  }

  updateWeight = () => {
    if (this.state.health !== 0 && this.state.fullness <= 3 && this.state.weight > 0) {
      this.setState({weight: this.state.weight - 1});
    }
  }

  updateAge = () => {
    if (this.state.health !== 0) {
      this.setState({age: this.state.age + 1});
    }
  }

  updateStatus = () => {
    if (this.state.happiness < 5) {
      this.setState({status: 'sad'});
    } else {
      this.setState({status: 'happy'});
    }
    if (this.state.health === 0) {
      this.setState({status: 'dead'});
      this.componentWillUnmount();
    }
  }

  handleFeed =() => {
    if (this.state.health !== 0) {
      if (this.state.fullness < 10) {
        const newFullness = this.state.fullness+1;
        this.setState({fullness: newFullness});
      } else {
        this.setState({weight: this.state.weight + 1});
      }
    }
  }

  handleDiscipline =() => {
    if (this.state.health !== 0) {
      if (this.state.discipline < 10) {
        const newDisciplne = this.state.discipline+1;
        this.setState({discipline: newDisciplne});
      }
      if (this.state.happiness > 0){
        this.setState({happiness: this.state.happiness - 1});
      }
    }
  }

  handlePlay =() => {
    if (this.state.health !== 0 && this.state.happiness < 10) {
      const newHappiness = this.state.happiness+1;
      this.setState({happiness: newHappiness});
    }
  }

  handlePoop =() => {
    if (this.state.health !== 0 && this.state.poop >0) {
      const newPoopiness = 0;
      this.setState({poop: newPoopiness});
    }
  }

  handleMedicine = () => {
    if (this.state.health !== 0 && this.state.health < 10) {
      this.setState({health: this.state.health + 1});
    }
  }

  render() {
    return(
      <div className="App">
        <Fullness level={this.state.fullness} onFeed={this.handleFeed} />
        <Discipline level={this.state.discipline} onScold={this.handleDiscipline}/>
        <Happiness level={this.state.happiness} onPlay={this.handlePlay}/>
        <Health level={this.state.health} onMedicine={this.handleMedicine}/>
        <Poop level={this.state.poop} onClean={this.handlePoop} />
        <Age level={this.state.age} />
        <Weight level={this.state.weight} />
        <Status status={this.state.status}/>
      </div>
    );
  }
}

export default App;
