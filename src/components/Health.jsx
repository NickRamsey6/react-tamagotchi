import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar'

const Health = props => {
  return(
    <div className='Health stateDisplay'>
      <div className='stateLevel'>
        <div>Health: {props.level}</div>
        <Bar level={props.level} />
      </div>
      <button onClick={props.onMedicine}>Give Medicine</button>
    </div>
  )
}

Health.propTypes = {
  level: PropTypes.number.isRequired,
  onMedicine: PropTypes.func.isRequired
}

export default Health;
