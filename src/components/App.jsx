import React from 'react';
// import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import Hunger from './Hunger';
import Happy from './Happy';
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
      hunger: 1,
      happy: 1,
      health: 10,
      discipline: 0,
      age: 0,
      weight: 10,
      poop: 10
    }
  }

  handleFeed =() => {
    if (this.state.hunger < 10) {
      const newHunger = this.state.hunger+1;
      this.setState({hunger: newHunger})
    }
  }

  handleDiscipline =() => {
    if (this.state.discipline < 10) {
      const newDisciplne = this.state.discipline+1;
      this.setState({discipline: newDisciplne})
    }
  }

  handleHappiness =() => {
    if (this.state.happy < 10) {
      const newHappiness = this.state.happy+1;
      this.setState({happy: newHappiness})
    }
  }

  handlePoop =() => {
    if (this.state.poop >0) {
      const newPoopiness = this.state.poop-1;
      this.setState({poop: newPoopiness})
    }
  }

  render() {
    return(
      <div className="App">
        <Hunger level={this.state.hunger} onFeed={this.handleFeed} />
        <Discipline level={this.state.discipline} onScold={this.handleDiscipline}/>
        <Happy level={this.state.happy} onPlay={this.handleHappiness}/>
        <Health level={this.state.health} />
        <Poop level={this.state.poop} onClean={this.handlePoop} />
        <Age level={this.state.age} />
        <Weight level={this.state.weight} />
      </div>
    );
  }
}

export default App;
