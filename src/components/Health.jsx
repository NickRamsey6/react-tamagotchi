import React from 'react';
import PropTypes from 'prop-types';

const Health = props => {
  return(
    <div className='Health stateDisplay'>
      <div>Health: {props.level}</div>
      <button onClick={props.onMedication}>Give Medication</button>
    </div>
  )
}

Health.propTypes = {
  level: PropTypes.number.isRequired,
  onMedication: PropTypes.func.isRequired
}

export default Health;
