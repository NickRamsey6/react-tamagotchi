import React from 'react';

const Health = props => {
  return(
    <div className='Health stateDisplay'>
      <div>Health: {props.level}</div>
      <button>Give Medication</button>
    </div>
  )
}

export default Health;
