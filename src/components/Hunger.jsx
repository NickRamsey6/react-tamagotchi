import React from 'react';
import PropTypes from 'prop-types';

const Hunger = props => {
  return(
    <div className='Hunger stateDisplay'>
      <div>Hunger: {props.level}</div>
      <button onClick={props.onFeed}>Feed</button>
    </div>
  )
}

Hunger.propTypes ={
  onFeed: PropTypes.func.isRequired
}

export default Hunger;
