import React from 'react';
import PropTypes from 'prop-types';
import s from './counter.module.css';

const Counter = ({ currentIndex, maxIndex }) => (
  <p className={s.counter}>
    {currentIndex}/{maxIndex}
  </p>
);

Counter.defaultProps = {
  currentIndex: 0,
  maxIndex: 0,
};

Counter.propTypes = {
  currentIndex: PropTypes.number,
  maxIndex: PropTypes.number,
};

export default Counter;
