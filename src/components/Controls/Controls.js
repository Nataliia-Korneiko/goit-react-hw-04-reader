import React from 'react';
import PropTypes from 'prop-types';
import s from './controls.module.css';

const Controls = ({ onDecrement, onIncrement, disabledPrev, disabledNext }) => (
  <section className={s.controls}>
    <button
      disabled={disabledPrev}
      onClick={onDecrement}
      type="button"
      className={s.button}
    >
      Назад
    </button>
    <button
      disabled={disabledNext}
      onClick={onIncrement}
      type="button"
      className={s.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
  disabledNext: PropTypes.bool.isRequired,
};

export default Controls;
