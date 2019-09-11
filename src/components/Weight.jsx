import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar'

const Weight = props => {
  return(
    <div className='Weight stateDisplay'>
      <div>Weight: {props.level}</div>
    </div>
  )
}

Weight.propTypes ={
  level: PropTypes.number.isRequired,
}

export default Weight;
