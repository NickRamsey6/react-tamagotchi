import React from 'react';
import PropTypes from 'prop-types';
import happyImg from './../assets/images/happy.png';
import sadImg from './../assets/images/sad.png';
import deadImg from './../assets/images/dead.png';

const Status = props => {
  let imageToRender = null;
  if (props.status == 'happy') {
    imageToRender = <img src={happyImg}></img>
  } else if (props.status == 'sad') {
    imageToRender = <img src={sadImg}></img>
  } else {
    imageToRender = <img src={deadImg}></img>
  }
  return(
    <div className='Status'>
      {imageToRender}
    </div>
  )
}

Status.propTypes ={
  status: PropTypes.string.isRequired,
}

export default Status;
