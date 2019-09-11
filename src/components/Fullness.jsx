import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar'

const Fullness = props => {
  return(
    <div className='Fullness stateDisplay'>
      <div className='stateLevel'>
        <div>Fullness: {props.level}</div>
        <Bar level={props.level} />
      </div>
      <button onClick={props.onFeed}>Feed</button>
    </div>
  )
}

Fullness.propTypes ={
  level: PropTypes.number.isRequired,
  onFeed: PropTypes.func.isRequired
}

export default Fullness;
