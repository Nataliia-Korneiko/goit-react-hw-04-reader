import React from 'react';
import PropTypes from 'prop-types';
import s from './publication.module.css';

const Publication = ({ title, text }) => (
  <article className={s.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.defaultProps = {
  title: '',
  text: '',
};

Publication.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Publication;
