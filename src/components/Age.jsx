import React from 'react';
import PropTypes from 'prop-types';

const Age = props => {
  return(
    <div className='Age stateDisplay'>
      <div>Age: {props.level}</div>
    </div>
  )
}

Age.propTypes ={
  level: PropTypes.number.isRequired,
}

export default Age;
