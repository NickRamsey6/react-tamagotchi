import React from 'react';
import PropTypes from 'prop-types';

const Happy = props => {
  return(
    <div className='Happy stateDisplay'>
      <div>Happy: {props.level}</div>
      <button onClick={props.onPlay}>Play</button>
    </div>
  )
}

Happy.propTypes ={
  onPlay: PropTypes.func.isRequired
}

export default Happy;
