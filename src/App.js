import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    let inc = this.state.count += 1;
    this.setState({
      count: inc
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Jaren   
          </p>
          <h2>413 Starter Kit - Hello</h2>
          <h2>Current Count = {this.state.count}</h2>

          <button onClick={this.onClickHandler}> Increment</button>

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
