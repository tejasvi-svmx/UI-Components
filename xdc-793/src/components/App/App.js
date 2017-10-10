import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Hello from '/components/Hello';
import { Tab, Tabs } from '../Tabs';
import './App.scss';
import '@svmx/ui-components-predix/build/package.css';
import Button from '@svmx/ui-components-predix/build/components/Button';

export default class App extends React.PureComponent {
  static propTypes = {
    onSubmitHello: PropTypes.func.isRequired,
    greeting: PropTypes.string,
  }

  render() {
    const {
      greeting,
      onSubmitHello,
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{greeting || 'Welcome to ServiceMax!'}</h2>
        </div>
        <Tabs selected={0}>
          <Tab label="Tab 1">
            <div>This is my tab 1 contents!</div>
          </Tab>
          <Tab label="Tab 2">
            <div>
              <Button> TEJASVI </Button>
            </div>
          </Tab>
          <Tab label="Tab 3">
            <div className="App-hello">
              <Hello onSubmit={onSubmitHello} />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
