import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
import './Tabs.css';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.createTab = this.createTab.bind(this);
  }

  handleTabClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index,
    });
  }

  createTab(child, index) {
    const activeClass = (this.state.selected === index ? 'iron-selected' : '');
    return (
      <div key={index} className ={activeClass} role="tab">
        <div onClick={(e) => {this.handleTabClick(index,e)}} className="tab-title">
          {child.props.label}
        </div>
      </div>
    );
  }

  renderTabs() {
    return (
      <div className="tabs-container__nav flex">
        {this.props.children.map(this.createTab)}
      </div>
    );
  }

  renderTabContent() {
    return (
      <div className="iron-selected">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="tabs-container" role="tablist">
          {this.renderTabs()}
        </div>
        <div>
          {this.renderTabContent()}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  selected: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

Tabs.defaultProps = {
  selected: 0,
};
