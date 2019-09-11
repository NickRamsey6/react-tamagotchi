import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar'

const Happiness = props => {
  return(
    <div className='Happiness stateDisplay'>
    <div className='stateLevel'>
      <div>Happiness: {props.level}</div>
      <Bar level={props.level} />
    </div>
      <button onClick={props.onPlay}>Play</button>
    </div>
  )
}

Happiness.propTypes ={
  level: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired
}

export default Happiness;
