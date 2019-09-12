import React from 'react';
import PropTypes from 'prop-types';

const Bar = props => {
  return(
    <meter low={5} value={props.level + ''} min='0' max='10'></meter>
  )
}

Bar.propTypes ={
  level: PropTypes.number.isRequired,
}

export default Bar;
