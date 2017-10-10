import React from 'react';
import PropTypes from 'prop-types';

export default class Tab extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Tab.propTypes = {
  children: PropTypes.element.isRequired,
};
