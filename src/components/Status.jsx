import React from 'react';
import PropTypes from 'prop-types';
import happyImg from './../assets/images/happy.png';
import sadImg from './../assets/images/sad.png';
import deadImg from './../assets/images/dead.png';
import './Status.css';

const Status = props => {
  let textStyles = {
    fontSize: '2em'
  }
  let imageToRender = null;
  let textToRender = null;
  if (props.status === 'happy') {
    imageToRender = <img src={happyImg} alt='happy tamagotchi' className='happy'></img>
    textToRender = <div className='text' style={textStyles}>Tamagotchi is Happy!</div>
  } else if (props.status === 'sad') {
    imageToRender = <img src={sadImg} alt='sad tamagotchi' className='sad'></img>
    textToRender = <div className='text' style={textStyles}>Tamagotchi is Sad!</div>
  } else {
    imageToRender = <img src={deadImg} alt='dead tamagotchi' className='dead'></img>
    textToRender = <div className='text' style={textStyles}>Tamagotchi is Dead!</div>
  }
  return(
    <div className='Status'>
      {imageToRender}
      {textToRender}
    </div>
  )
}

Status.propTypes ={
  status: PropTypes.string.isRequired,
}

export default Status;
