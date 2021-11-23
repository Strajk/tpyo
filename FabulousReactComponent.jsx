import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FabulousReactComponent extends Component {
  render() {
    const {
      name,
      age = 21, // is just a number
      cb,
      onChange,
      isA,
      isB,
    } = this.props;
    return (
      <div>
        Yo u are using React!
        {name}
        {age}
      </div>
    );
  }
}

FabulousReactComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  cb: PropTypes.func,
  onChange: PropTypes.function, // 🚨 should be `func`, `function` is for TS
  isA: PropTypes.bool,
  isB: PropTypes.boolean, // 🚨 should be `bool`, `boolean` is for TS
};

export default FabulousReactComponent;