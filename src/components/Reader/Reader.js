/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { items, location, history } = this.props;
    const page = new URLSearchParams(location.search).get('item');

    if (!Number(page) || Number(page) <= 0 || Number(page) > items.length) {
      history.replace({
        ...location,
        search: `item=1`,
      });
    }
  }

  handleDecrement = () => {
    const { location, history } = this.props;
    const page = new URLSearchParams(location.search).get('item');
    history.push({
      pathname: location.pathname,
      search: `item=${Number(page) - 1}`,
    });
  };

  handleIncrement = () => {
    const { location, history } = this.props;
    const page = new URLSearchParams(location.search).get('item');
    history.push({
      pathname: location.pathname,
      search: `item=${Number(page) + 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const page = Number(new URLSearchParams(location.search).get('item'));
    let index;
    if (!Number(page) || Number(page) <= 0 || Number(page) > items.length) {
      index = 0;
    } else {
      index = page - 1;
    }

    const maxIndex = items.length;
    const currentIndex = index + 1;
    const disabledPrev = index === 0;
    const disabledNext = index === maxIndex - 1;

    return (
      <div className={s.reader}>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
        />
        <Counter currentIndex={currentIndex} maxIndex={maxIndex} />
        <Publication title={items[index].title} text={items[index].text} />
      </div>
    );
  }
}
