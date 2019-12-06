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
  };

  componentDidMount() {
    const { items, location, history } = this.props;
    const page = new URLSearchParams(location.search).get('item');

    if (!page || Number(page) > items.length) {
      history.replace({
        pathname: location.pathname,
        search: `item=1`,
      });
    }

    // if null replace with history string ?item=1
  }

  handleDecrement = () => {
    // this.setState(prevState => ({ index: prevState.index - 1 }));
    const { location, history } = this.props;
    const page = new URLSearchParams(location.search).get('item');
    history.push({
      pathname: location.pathname,
      search: `item=${Number(page) - 1}`,
    });
  };

  handleIncrement = () => {
    // this.setState(prevState => ({ index: prevState.index + 1 }));
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
    const index = page === 0 || page > items.length ? 0 : page - 1;
    console.log('index', index);
    console.log('page', page);

    const maxIndex = items.length;
    const currentIndex = index + 1;
    const disabledPrev = index === 0;
    const disabledNext = index === maxIndex - 1;

    // console.log('index', index);

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
