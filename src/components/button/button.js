import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export class FBtn extends Component {
  static defaultProps = { btnName: 'Nazwa' };

  handleClick = () => {
    this.props.onClick(this.props.btnName);
  };

  render() {
    const { btnName } = this.props;
    return <Button onClick={this.handleClick}>{btnName}</Button>;
  }
}

FBtn.propTypes = {
  btnName: PropTypes.oneOf(['Good', 'Neutral', 'Bad']),
  step: PropTypes.number,
};
